(() => {
  const messages = {
    en: {
      "app.title": "Cattle Vision",
      "app.subtitle": "AI-powered cattle breed and disease classifier with rich insights.",
      "input.section_title": "Input",
      "input.upload_label": "Upload an image from your device",
      "input.aria_choose_file": "Choose an image file for cattle classification",
      "input.choose_file": "Choose Image File",
      "input.change_image": "Change Image File",
      "input.selected_file": "Selected: {filename}",
      "input.predict_from_image": "Predict from Image",
      "input.camera_label": "Or use your camera",
      "input.start_camera": "Start Camera",
      "input.capture_predict": "Capture & Predict",
      "input.camera_idle": "Camera is idle.",
      "input.prediction_complete": "Prediction complete.",
      "input.prediction_failed": "Prediction failed. See the result panel.",
      "input.preview": "Preview",
      "input.placeholder_text": "No image selected yet.<br>Upload or start the camera to begin.",
      "crossbreed.upload_parents": "Upload Parent Images",
      "crossbreed.choose_parent_a": "Choose Parent A",
      "crossbreed.choose_parent_b": "Choose Parent B",
      "crossbreed.preview_label": "Preview",
      "crossbreed.parent_a_label": "Parent A",
      "crossbreed.parent_b_label": "Parent B",
      "crossbreed.no_image": "No image selected",
      "crossbreed.predict_button": "Predict Crossbreed",
      "crossbreed.parent_images_label": "Parent Images",
      "crossbreed.predicted_summary": "Predicted hybrid characteristics",
      "crossbreed.milk_type_label": "Milk Type",
      "crossbreed.avg_yield_label": "Average Milk Yield",
      "crossbreed.color_label": "Color",
      "crossbreed.size_label": "Size",
      "crossbreed.temperament_label": "Temperament",
      "prediction.section_title": "Prediction",
      "prediction.model_status_breed": "Model Status: Breed model ready",
      "prediction.model_status_disease": "Model Status: Disease model ready",
      "prediction.model_status_crossbreed": "Model Status: Crossbreed model ready",
      "prediction.mode_breed": "Breed",
      "prediction.mode_disease": "Disease",
      "prediction.mode_crossbreed": "Crossbreed",
      "prediction.download_pdf": "Download PDF report",
      "prediction.waiting_result": "Prediction result will appear here after you submit an image.",
      "prediction.mode_label": "Mode",
      "prediction.model_prediction": "Prediction",
      "prediction.confidence_label": "Confidence",
      "history.title": "Recent Predictions",
      "common.file_label": "File: {filename}",
      "breed.origin": "Origin",
      "breed.milk_profile": "Milk Profile",
      "breed.avg_milk_yield": "Average Milk Yield",
      "breed.coat_color": "Coat Color",
      "breed.body_size": "Body Size",
      "breed.temperament": "Temperament",
      "breed.primary_use": "Primary Use",
      "breed.overview_text": "Breed overview",
      "breed.fun_fact": "Fun Fact",
      "breed.history_title": "History",
      "breed.crossbreeding_title": "Crossbreeding",
      "breed.future_title": "Future Potential",
      "disease.severity": "Severity",
      "disease.danger_level": "Danger Level",
      "disease.pathogen": "Pathogen",
      "disease.transmission": "Transmission",
      "disease.prevention": "Prevention",
      "disease.treatment": "Treatment",
      "disease.overview_text": "Disease overview",
      "disease.symptoms_title": "Symptoms"
    },
    hi: {
      "app.title": "कैटल विज़न",
      "app.subtitle": "समृद्ध जानकारी के साथ AI आधारित पशु नस्ल और रोग पहचान।",
      "input.section_title": "इनपुट",
      "input.upload_label": "अपने डिवाइस से तस्वीर अपलोड करें",
      "input.aria_choose_file": "पशु वर्गीकरण के लिए तस्वीर चुनें",
      "input.choose_file": "तस्वीर चुनें",
      "input.change_image": "तस्वीर बदलें",
      "input.selected_file": "चुनी गई फ़ाइल: {filename}",
      "input.predict_from_image": "तस्वीर से पहचानें",
      "input.camera_label": "या कैमरा इस्तेमाल करें",
      "input.start_camera": "कैमरा शुरू करें",
      "input.capture_predict": "तस्वीर लें और पहचानें",
      "input.camera_idle": "कैमरा बंद है।",
      "input.prediction_complete": "पहचान पूरी हुई।",
      "input.prediction_failed": "पहचान विफल हुई। परिणाम पैनल देखें।",
      "input.preview": "पूर्वावलोकन",
      "input.placeholder_text": "अभी कोई तस्वीर नहीं चुनी गई।<br>शुरू करने के लिए तस्वीर अपलोड करें या कैमरा चालू करें।",
      "crossbreed.upload_parents": "दोनों माता-पिता की तस्वीरें अपलोड करें",
      "crossbreed.choose_parent_a": "माता-पिता A चुनें",
      "crossbreed.choose_parent_b": "माता-पिता B चुनें",
      "crossbreed.preview_label": "पूर्वावलोकन",
      "crossbreed.parent_a_label": "माता-पिता A",
      "crossbreed.parent_b_label": "माता-पिता B",
      "crossbreed.no_image": "कोई तस्वीर नहीं चुनी गई",
      "crossbreed.predict_button": "संकर नस्ल की पहचान करें",
      "crossbreed.parent_images_label": "माता-पिता की तस्वीरें",
      "crossbreed.predicted_summary": "अनुमानित संकर विशेषताएँ",
      "crossbreed.milk_type_label": "दूध का प्रकार",
      "crossbreed.avg_yield_label": "औसत दूध उत्पादन",
      "crossbreed.color_label": "रंग",
      "crossbreed.size_label": "आकार",
      "crossbreed.temperament_label": "स्वभाव",
      "prediction.section_title": "पहचान परिणाम",
      "prediction.model_status_breed": "मॉडल स्थिति: नस्ल मॉडल तैयार है",
      "prediction.model_status_disease": "मॉडल स्थिति: रोग मॉडल तैयार है",
      "prediction.model_status_crossbreed": "मॉडल स्थिति: संकर मॉडल तैयार है",
      "prediction.mode_breed": "नस्ल",
      "prediction.mode_disease": "रोग",
      "prediction.mode_crossbreed": "संकर नस्ल",
      "prediction.download_pdf": "PDF रिपोर्ट डाउनलोड करें",
      "prediction.waiting_result": "तस्वीर भेजने के बाद पहचान परिणाम यहाँ दिखाई देगा।",
      "prediction.mode_label": "मोड",
      "prediction.model_prediction": "अनुमान",
      "prediction.confidence_label": "विश्वास स्तर",
      "history.title": "हाल के परिणाम",
      "common.file_label": "फ़ाइल: {filename}",
      "breed.origin": "उत्पत्ति",
      "breed.milk_profile": "दूध की विशेषताएँ",
      "breed.avg_milk_yield": "औसत दूध उत्पादन",
      "breed.coat_color": "रंग",
      "breed.body_size": "शरीर का आकार",
      "breed.temperament": "स्वभाव",
      "breed.primary_use": "मुख्य उपयोग",
      "breed.overview_text": "नस्ल का परिचय",
      "breed.fun_fact": "रोचक तथ्य",
      "breed.history_title": "इतिहास",
      "breed.crossbreeding_title": "संकर प्रजनन",
      "breed.future_title": "भविष्य की संभावनाएँ",
      "disease.severity": "गंभीरता",
      "disease.danger_level": "खतरे का स्तर",
      "disease.pathogen": "रोगजनक",
      "disease.transmission": "फैलने का तरीका",
      "disease.prevention": "बचाव",
      "disease.treatment": "उपचार",
      "disease.overview_text": "रोग का परिचय",
      "disease.symptoms_title": "लक्षण"
    },
    kn: {
      "app.title": "ಕ್ಯಾಟಲ್ ವಿಷನ್",
      "app.subtitle": "ವಿವರವಾದ ಮಾಹಿತಿಯೊಂದಿಗೆ AI ಆಧಾರಿತ ದನದ ತಳಿ ಮತ್ತು ರೋಗ ಗುರುತಿಸುವಿಕೆ.",
      "input.section_title": "ಇನ್‌ಪುಟ್",
      "input.upload_label": "ನಿಮ್ಮ ಸಾಧನದಿಂದ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
      "input.aria_choose_file": "ದನದ ವರ್ಗೀಕರಣಕ್ಕಾಗಿ ಚಿತ್ರವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
      "input.choose_file": "ಚಿತ್ರವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
      "input.change_image": "ಚಿತ್ರವನ್ನು ಬದಲಾಯಿಸಿ",
      "input.selected_file": "ಆಯ್ಕೆ ಮಾಡಿದ ಫೈಲ್: {filename}",
      "input.predict_from_image": "ಚಿತ್ರದಿಂದ ಗುರುತಿಸಿ",
      "input.camera_label": "ಅಥವಾ ಕ್ಯಾಮೆರಾ ಬಳಸಿ",
      "input.start_camera": "ಕ್ಯಾಮೆರಾ ಪ್ರಾರಂಭಿಸಿ",
      "input.capture_predict": "ಚಿತ್ರ ತೆಗೆದು ಗುರುತಿಸಿ",
      "input.camera_idle": "ಕ್ಯಾಮೆರಾ ನಿಷ್ಕ್ರಿಯವಾಗಿದೆ.",
      "input.prediction_complete": "ಗುರುತಿಸುವಿಕೆ ಪೂರ್ಣಗೊಂಡಿದೆ.",
      "input.prediction_failed": "ಗುರುತಿಸುವಿಕೆ ವಿಫಲವಾಗಿದೆ. ಫಲಿತಾಂಶ ಫಲಕವನ್ನು ನೋಡಿ.",
      "input.preview": "ಮುನ್ನೋಟ",
      "input.placeholder_text": "ಇನ್ನೂ ಚಿತ್ರವನ್ನು ಆಯ್ಕೆಮಾಡಿಲ್ಲ.<br>ಪ್ರಾರಂಭಿಸಲು ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ ಅಥವಾ ಕ್ಯಾಮೆರಾ ಬಳಸಿ.",
      "crossbreed.upload_parents": "ಎರಡೂ ಪೋಷಕ ದನಗಳ ಚಿತ್ರಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
      "crossbreed.choose_parent_a": "ಪೋಷಕ A ಆಯ್ಕೆಮಾಡಿ",
      "crossbreed.choose_parent_b": "ಪೋಷಕ B ಆಯ್ಕೆಮಾಡಿ",
      "crossbreed.preview_label": "ಮುನ್ನೋಟ",
      "crossbreed.parent_a_label": "ಪೋಷಕ A",
      "crossbreed.parent_b_label": "ಪೋಷಕ B",
      "crossbreed.no_image": "ಚಿತ್ರ ಆಯ್ಕೆಯಾಗಿಲ್ಲ",
      "crossbreed.predict_button": "ಮಿಶ್ರ ತಳಿಯನ್ನು ಗುರುತಿಸಿ",
      "crossbreed.parent_images_label": "ಪೋಷಕ ದನಗಳ ಚಿತ್ರಗಳು",
      "crossbreed.predicted_summary": "ಅಂದಾಜಿಸಿದ ಮಿಶ್ರ ತಳಿಯ ಲಕ್ಷಣಗಳು",
      "crossbreed.milk_type_label": "ಹಾಲಿನ ವಿಧ",
      "crossbreed.avg_yield_label": "ಸರಾಸರಿ ಹಾಲಿನ ಉತ್ಪಾದನೆ",
      "crossbreed.color_label": "ಬಣ್ಣ",
      "crossbreed.size_label": "ಗಾತ್ರ",
      "crossbreed.temperament_label": "ಸ್ವಭಾವ",
      "prediction.section_title": "ಅಂದಾಜು",
      "prediction.model_status_breed": "ಮಾದರಿ ಸ್ಥಿತಿ: ತಳಿ ಮಾದರಿ ಸಿದ್ಧವಾಗಿದೆ",
      "prediction.model_status_disease": "ಮಾದರಿ ಸ್ಥಿತಿ: ರೋಗ ಮಾದರಿ ಸಿದ್ಧವಾಗಿದೆ",
      "prediction.model_status_crossbreed": "ಮಾದರಿ ಸ್ಥಿತಿ: ಮಿಶ್ರ ತಳಿ ಮಾದರಿ ಸಿದ್ಧವಾಗಿದೆ",
      "prediction.mode_breed": "ತಳಿ",
      "prediction.mode_disease": "ರೋಗ",
      "prediction.mode_crossbreed": "ಮಿಶ್ರ ತಳಿ",
      "prediction.download_pdf": "PDF ವರದಿಯನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ",
      "prediction.waiting_result": "ಚಿತ್ರವನ್ನು ಸಲ್ಲಿಸಿದ ನಂತರ ಫಲಿತಾಂಶ ಇಲ್ಲಿ ಕಾಣಿಸುತ್ತದೆ.",
      "prediction.mode_label": "ವಿಧ",
      "prediction.model_prediction": "ಮಾದರಿ ಫಲಿತಾಂಶ",
      "prediction.confidence_label": "ವಿಶ್ವಾಸಮಟ್ಟ",
      "history.title": "ಇತ್ತೀಚಿನ ಅಂದಾಜುಗಳು",
      "common.file_label": "ಫೈಲ್: {filename}",
      "breed.origin": "ಮೂಲ",
      "breed.milk_profile": "ಹಾಲಿನ ಗುಣಲಕ್ಷಣ",
      "breed.avg_milk_yield": "ಸರಾಸರಿ ಹಾಲಿನ ಉತ್ಪಾದನೆ",
      "breed.coat_color": "ಬಣ್ಣ",
      "breed.body_size": "ದೇಹದ ಗಾತ್ರ",
      "breed.temperament": "ಸ್ವಭಾವ",
      "breed.primary_use": "ಮುಖ್ಯ ಬಳಕೆ",
      "breed.overview_text": "ತಳಿಯ ಪರಿಚಯ",
      "breed.fun_fact": "ಆಸಕ್ತಿದಾಯಕ ಮಾಹಿತಿ",
      "breed.history_title": "ಇತಿಹಾಸ",
      "breed.crossbreeding_title": "ಮಿಶ್ರ ತಳಿ ಅಭಿವೃದ್ಧಿ",
      "breed.future_title": "ಭವಿಷ್ಯದ ಸಾಧ್ಯತೆ",
      "disease.severity": "ತೀವ್ರತೆ",
      "disease.danger_level": "ಅಪಾಯದ ಮಟ್ಟ",
      "disease.pathogen": "ರೋಗಕಾರಕ",
      "disease.transmission": "ಹರಡುವಿಕೆ",
      "disease.prevention": "ತಡೆಗಟ್ಟುವಿಕೆ",
      "disease.treatment": "ಚಿಕಿತ್ಸೆ",
      "disease.overview_text": "ರೋಗದ ಪರಿಚಯ",
      "disease.symptoms_title": "ಲಕ್ಷಣಗಳು"
    }
  };

  let currentLang = "en";

  const i18n = {
    async init() {
      try {
        const savedLanguage = localStorage.getItem("cattle-language");
        if (savedLanguage && messages[savedLanguage]) currentLang = savedLanguage;
      } catch {
        currentLang = "en";
      }
    },

    getCurrentLanguage() {
      return currentLang;
    },

    t(key, values = {}) {
      const template = messages[currentLang][key] || messages.en[key] || key;
      return template.replace(/\{([^}]+)\}/g, (match, name) =>
        Object.prototype.hasOwnProperty.call(values, name) ? values[name] : match
      );
    },

    createLanguageSelector() {
      return `<label class="language-picker" for="languageSelect"><span>Language</span><select id="languageSelect" aria-label="Language"><option value="en">English</option><option value="hi">हिन्दी</option><option value="kn">ಕನ್ನಡ</option></select></label>`;
    },

    initLanguageSelector() {
      const selector = document.getElementById("languageSelect");
      if (!selector) return;
      selector.value = currentLang;
      selector.addEventListener("change", () => {
        currentLang = messages[selector.value] ? selector.value : "en";
        try {
          localStorage.setItem("cattle-language", currentLang);
        } catch {
          // The selection still works for this page if storage is unavailable.
        }
        this.applyTranslations();
        window.dispatchEvent(new CustomEvent("languageChanged", { detail: { lang: currentLang } }));
      });
    },

    applyTranslations() {
      document.querySelectorAll("[data-i18n]").forEach(element => {
        element.textContent = this.t(element.dataset.i18n);
      });
      document.querySelectorAll("[data-i18n-html]").forEach(element => {
        element.innerHTML = this.t(element.dataset.i18nHtml);
      });
      document.querySelectorAll("[data-i18n-aria]").forEach(element => {
        element.setAttribute("aria-label", this.t(element.dataset.i18nAria));
      });
      document.documentElement.lang = currentLang;
    }
  };

  window.i18n = i18n;
  window.updateAllTranslations = () => i18n.applyTranslations();
})();
