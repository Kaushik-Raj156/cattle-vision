from fastapi import APIRouter, UploadFile, File, HTTPException, Query
from starlette.concurrency import run_in_threadpool
import re

from ..core.model_loader import models
from ..static_data import BREED_STATIC_DATA
from .. import cattle_model


router = APIRouter()


def _parse_milk_yield(text: str):
    """
    Parse text like '5,000–7,000 liters/year' → midpoint (float).
    Returns None if parsing fails.
    """
    if not text:
        return None
    nums = re.findall(r"(\d[\d,]*)", text)
    if not nums:
        return None
    try:
        values = [int(n.replace(",", "")) for n in nums]
    except ValueError:
        return None
    if len(values) == 1:
        return float(values[0])
    return (values[0] + values[-1]) / 2.0


def _average_strings(a_val: str, b_val: str):
    """
    Combine or average qualitative fields.
    If both exist and are same, return one.
    Otherwise combine them with a slash.
    """
    if not a_val and not b_val:
        return "N/A"
    if a_val and not b_val:
        return a_val
    if b_val and not a_val:
        return b_val
    if a_val.strip().lower() == b_val.strip().lower():
        return a_val
    return f"{a_val} / {b_val}"


@router.post("/", response_model=dict)
async def predict_crossbreed(
    parent_a: UploadFile = File(...),
    parent_b: UploadFile = File(...),
    lang: str = Query("en", description="Language code: en, hi, kn")
):
    # validate content types
    if not parent_a.content_type.startswith("image/") or not parent_b.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="Both files must be images.")

    a_bytes = await parent_a.read()
    b_bytes = await parent_b.read()

    try:
        # load breed model
        breed_model, breed_device, breed_transform = models.load_breed()

        # import predict function at runtime to avoid circular import
        from app import cattle_model

        def _pred(bytes_):
            return cattle_model.predict_bytes(breed_model, breed_device, breed_transform, bytes_)

        # run both predictions
        a_label, a_conf, _ = await run_in_threadpool(lambda: _pred(a_bytes))
        b_label, b_conf, _ = await run_in_threadpool(lambda: _pred(b_bytes))

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Crossbreed prediction failed: {e}")

    # normalize language
    if lang not in {"en", "hi", "kn"}:
        lang = "en"

    # Static breed descriptions are currently stored as one flat English map.
    lang_data = BREED_STATIC_DATA

    a_static = lang_data.get(a_label.lower(), {})
    b_static = lang_data.get(b_label.lower(), {})

    cross_name = f"{a_label} x {b_label}"

    # ---- compute averaged or merged static info ----
    avg_yield = None
    a_yield_mid = _parse_milk_yield(a_static.get("average_milk_yield"))
    b_yield_mid = _parse_milk_yield(b_static.get("average_milk_yield"))

    if a_yield_mid and b_yield_mid:
        avg_yield = (a_yield_mid + b_yield_mid) / 2
        avg_yield_text = f"{avg_yield:,.0f} liters/year (approx. average of parents)"
    elif a_yield_mid:
        avg_yield_text = f"{a_yield_mid:,.0f} liters/year"
    elif b_yield_mid:
        avg_yield_text = f"{b_yield_mid:,.0f} liters/year"
    else:
        avg_yield_text = "N/A"

    # average-style merge for other fields
    cross_static = {
        "breed": cross_name,
        "milk_type": _average_strings(a_static.get("milk_type"), b_static.get("milk_type")),
        "average_milk_yield": avg_yield_text,
        "primary_color": _average_strings(a_static.get("primary_color"), b_static.get("primary_color")),
        "size": _average_strings(a_static.get("size"), b_static.get("size")),
        "temperament": _average_strings(a_static.get("temperament"), b_static.get("temperament")),
        "origin": _average_strings(a_static.get("origin"), b_static.get("origin")),
        "use_case": _average_strings(a_static.get("use_case"), b_static.get("use_case")),
        "fun_fact": _average_strings(a_static.get("fun_fact"), b_static.get("fun_fact")),
        "history": _average_strings(a_static.get("history"), b_static.get("history")),
        "cross_breeding": _average_strings(a_static.get("cross_breeding"), b_static.get("cross_breeding")),
        "future_potential": _average_strings(a_static.get("future_potential"), b_static.get("future_potential")),
    }

    # ---- language-specific summary ----
    if lang == "hi":
        summary = (
            f"{cross_name} {a_label} और {b_label} के क्रॉसब्रीड से बना है। "
            f"इससे औसतन {avg_yield_text} का दूध उत्पादन और "
            f"{cross_static['milk_type']} प्रकार का दूध मिलने की उम्मीद की जाती है।"
        )
    elif lang == "kn":
        summary = (
            f"{cross_name} ಇದು {a_label} ಮತ್ತು {b_label}ಗಳ ಕ್ರಾಸು ಆಗಿದೆ. "
            f"ಇದರಿಂದ ಸರಾಸರಿ {avg_yield_text} ಹಾಲು ಉತ್ಪಾದನೆ ಮತ್ತು "
            f"{cross_static['milk_type']} ರೀತಿಯ ಹಾಲು ದೊರೆಯುವ ನಿರೀಕ್ಷೆಯಿದೆ."
        )
    else:
        summary = (
            f"{cross_name} is a cross between {a_label} and {b_label}. "
            f"It is expected to yield around {avg_yield_text} of {cross_static['milk_type']} milk."
        )

    cross_static["summary"] = summary

    return {
        "parent_a": {
            "filename": parent_a.filename,
            "predicted_class": a_label,
            "confidence": float(a_conf),
            "static_data": a_static,
        },
        "parent_b": {
            "filename": parent_b.filename,
            "predicted_class": b_label,
            "confidence": float(b_conf),
            "static_data": b_static,
        },
        "crossbreed": cross_static,
        "lang": lang,
    }
