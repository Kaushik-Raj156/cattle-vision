# Cattle Vision

Cattle Vision is a web application for image-based cattle breed and
disease classification. It combines a Vite-based frontend with a FastAPI
backend and separate deep-learning models for breed and disease
predictions.

> **Important:** Predictions are model outputs, not veterinary
> diagnoses. Confirm suspected diseases with a qualified veterinarian.
> Model performance depends on training data, image quality, and the
> supported classes.

## Features

-   Upload an image or capture one using the camera (where browser
    permissions and device support allow).
-   Request breed, disease, or crossbreed analysis through separate API
    routes.
-   Present explanatory information from the backend's static data.
-   Provide interface text in English, Hindi, and Kannada.
-   Display prediction results and support PDF download, as implemented
    by the frontend.

## Architecture

``` mermaid
flowchart TD
    U[User: upload or capture image] --> F[Vite frontend :5173]
    F -->|HTTP request with image| API[FastAPI backend :8000]
    API --> BR[POST /predict_breed/]
    API --> DI[POST /predict_disease/]
    API --> CR[POST /predict_crossbreed/]
    BR --> PM[PyTorch breed model]
    DI --> TM[TensorFlow disease model]
    CR --> CL[Crossbreed logic - verify implementation]
    PM --> SD[Static descriptions and response formatting]
    TM --> SD
    CL --> SD
    SD --> R[JSON prediction response]
    R --> F
    F --> PDF[Display result / PDF download]
```

## Project structure

``` text
Cattle-Vision/
├── frontend/
│   ├── index.html
│   └── public/
│       └── js/
│           └── i18n.js
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── api/
│   │   │   ├── breed.py
│   │   │   ├── disease.py
│   │   │   └── crossbreed.py
│   │   ├── core/
│   │   │   └── model_loader.py
│   │   ├── cattle_model.py
│   │   ├── utils.py
│   │   └── static_data.py
│   └── models/
│       ├── best_enhanced_model.pth
│       └── custom_model.h5
└── README.md
```

## Technology stack

  Component                     Technology
  ----------------------------- -----------------------------------------
  Frontend development server   Vite
  API backend                   FastAPI
  Breed classifier              PyTorch
  Disease classifier            TensorFlow/Keras-compatible `.h5` model
  API documentation             FastAPI Swagger UI / ReDoc
  UI languages                  English, Hindi, Kannada

## Requirements

-   Python version compatible with the installed backend dependencies.
-   Node.js and npm.
-   The trained model files listed above.
-   Dependencies installed from the project's actual Python and npm
    dependency manifests.

Use the versions specified in your dependency files where available. Do
not install arbitrary versions without checking compatibility between
PyTorch, TensorFlow, Python, and the operating system.

## Run locally

Open two terminals from the project root.

### 1. Start the backend

``` powershell
cd backend
python -m venv .venv
.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
```

Install the backend's declared dependencies. If
`backend/requirements.txt` exists:

``` powershell
pip install -r requirements.txt
```

Start FastAPI:

``` powershell
uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

If your dependency manifest is stored elsewhere, or your app uses a
different import path, adjust these commands to match the repository.

Open: - API documentation: `http://127.0.0.1:8000/docs` - ReDoc:
`http://127.0.0.1:8000/redoc`

### 2. Start the frontend

In a second terminal:

``` powershell
cd frontend
npm install
npm run dev
```

Open the local URL printed by Vite, normally `http://localhost:5173`.

If `npm run dev` is unavailable, check the `scripts` section in
`frontend/package.json`.

## API routes

  ------------------------------------------------------------------------
  Method                  Route                    Purpose
  ----------------------- ------------------------ -----------------------
  POST                    `/predict_breed/`        Predict cattle breed

  POST                    `/predict_disease/`      Predict a supported
                                                   disease class

  POST                    `/predict_crossbreed/`   Run the project's
                                                   crossbreed analysis
                                                   logic
  ------------------------------------------------------------------------

The exact request field names, accepted image formats, response schemas,
and error codes should be documented from the route implementations in
`backend/app/api/`. Use `/docs` to inspect the live API contract.

## Model and data notes

-   Keep image preprocessing consistent with the preprocessing used
    during model training.
-   Document the exact breed labels and disease labels in the order
    expected by each model.
-   Report confidence scores only if the inference code calculates them
    correctly; a confidence score is not a guarantee of correctness.
-   Do not claim an accuracy percentage unless it comes from a
    reproducible evaluation on a clearly described test set.
-   Treat unsupported, blurry, empty, or non-cattle images safely and
    return useful validation errors.
-   Load each model once where practical rather than reloading it for
    every request.

## Recommended engineering improvements

1.  Add automated tests for each API route, including invalid files and
    inference failures.
2.  Add consistent request validation, file-size limits, and allowed
    image types.
3.  Configure the frontend API base URL through environment
    configuration rather than hard-coding it.
4.  Keep model labels and preprocessing settings documented alongside
    the model files.
5.  Add a reproducible evaluation report with per-class precision,
    recall, F1-score, and a confusion matrix when labelled test data is
    available.
6.  Add Docker only after the local frontend/backend workflow is
    reliable.
7.  Add a database only if saved prediction history, user accounts, or
    audit records are genuinely required.
8.  Add detection, body measurements, ATC scoring, or external
    integrations only after those features are implemented and tested.

## Troubleshooting

-   **Model file not found:** Check the configured paths and confirm
    that the model files exist.
-   **Frontend cannot reach the API:** Confirm the backend is running on
    port 8000 and that CORS allows the frontend origin.
-   **Import errors:** Activate the correct virtual environment and
    install the backend's declared dependencies.
-   **Prediction failures:** Check the server logs, input image format,
    preprocessing dimensions, and model-label mapping.
-   **Camera unavailable:** Check browser camera permissions and use a
    supported browser context.

## Limitations

Cattle Vision is an image-classification aid. It should not be presented
as a replacement for veterinary examination. Prediction reliability must
be established through evaluation on representative, labelled data.
Crossbreed functionality should be described according to its actual
implementation.

## License and attribution

Add the project's chosen license and acknowledge model architectures,
datasets, pretrained weights, and third-party code according to their
respective licenses. Clearly document each contributor's work.
