/* =========================================================
   LINGUAFLOW
   CODEALPHA TASK 1
   LANGUAGE TRANSLATION TOOL
========================================================= */


/* =========================================================
   LANGUAGE DATA
========================================================= */

const languages = {

    en: {
        name: "English",
        native: "English"
    },

    te: {
        name: "Telugu",
        native: "తెలుగు"
    },

    hi: {
        name: "Hindi",
        native: "हिन्दी"
    },

    ta: {
        name: "Tamil",
        native: "தமிழ்"
    },

    kn: {
        name: "Kannada",
        native: "ಕನ್ನಡ"
    },

    ml: {
        name: "Malayalam",
        native: "മലയാളം"
    },

    mr: {
        name: "Marathi",
        native: "मराठी"
    },

    bn: {
        name: "Bengali",
        native: "বাংলা"
    },

    gu: {
        name: "Gujarati",
        native: "ગુજરાતી"
    },

    pa: {
        name: "Punjabi",
        native: "ਪੰਜਾਬੀ"
    },

    ur: {
        name: "Urdu",
        native: "اردو"
    },

    or: {
        name: "Odia",
        native: "ଓଡ଼ିଆ"
    },

    ne: {
        name: "Nepali",
        native: "नेपाली"
    },

    es: {
        name: "Spanish",
        native: "Español"
    },

    fr: {
        name: "French",
        native: "Français"
    },

    de: {
        name: "German",
        native: "Deutsch"
    },

    ja: {
        name: "Japanese",
        native: "日本語"
    },

    ko: {
        name: "Korean",
        native: "한국어"
    },

    pt: {
        name: "Portuguese",
        native: "Português"
    },

    zh: {
        name: "Mandarin",
        native: "中文"
    }

};


/* =========================================================
   COMMON TRANSLATIONS
========================================================= */

const commonTranslations = {

    "en-te": {

        "what is your name":
            "మీ పేరు ఏమిటి?",

        "what is your name?":
            "మీ పేరు ఏమిటి?",

        "hello":
            "హలో",

        "hello!":
            "హలో!",

        "hi":
            "హాయ్",

        "hi!":
            "హాయ్!",

        "how are you":
            "మీరు ఎలా ఉన్నారు?",

        "how are you?":
            "మీరు ఎలా ఉన్నారు?",

        "good morning":
            "శుభోదయం",

        "good morning!":
            "శుభోదయం!",

        "good night":
            "శుభ రాత్రి",

        "thank you":
            "ధన్యవాదాలు",

        "thank you!":
            "ధన్యవాదాలు!",

        "please":
            "దయచేసి",

        "yes":
            "అవును",

        "no":
            "కాదు",

        "welcome":
            "స్వాగతం",

        "sorry":
            "క్షమించండి",

        "i am fine":
            "నేను బాగున్నాను",

        "i am fine.":
            "నేను బాగున్నాను.",

        "my name is yashwanth":
            "నా పేరు యశ్వంత్",

        "where are you":
            "మీరు ఎక్కడ ఉన్నారు?",

        "where are you?":
            "మీరు ఎక్కడ ఉన్నారు?"

    },


    "en-hi": {

        "what is your name":
            "आपका नाम क्या है?",

        "what is your name?":
            "आपका नाम क्या है?",

        "hello":
            "नमस्ते",

        "hello!":
            "नमस्ते!",

        "hi":
            "नमस्ते",

        "how are you":
            "आप कैसे हैं?",

        "how are you?":
            "आप कैसे हैं?",

        "good morning":
            "सुप्रभात",

        "good night":
            "शुभ रात्रि",

        "thank you":
            "धन्यवाद",

        "please":
            "कृपया",

        "yes":
            "हाँ",

        "no":
            "नहीं",

        "welcome":
            "स्वागत है",

        "sorry":
            "माफ़ कीजिए",

        "i am fine":
            "मैं ठीक हूँ",

        "my name is yashwanth":
            "मेरा नाम यशवंत है"

    },


    "en-ta": {

        "what is your name":
            "உங்கள் பெயர் என்ன?",

        "what is your name?":
            "உங்கள் பெயர் என்ன?",

        "hello":
            "வணக்கம்",

        "hello!":
            "வணக்கம்!",

        "how are you":
            "நீங்கள் எப்படி இருக்கிறீர்கள்?",

        "how are you?":
            "நீங்கள் எப்படி இருக்கிறீர்கள்?",

        "good morning":
            "காலை வணக்கம்",

        "good night":
            "இனிய இரவு",

        "thank you":
            "நன்றி",

        "please":
            "தயவுசெய்து",

        "yes":
            "ஆம்",

        "no":
            "இல்லை"

    },


    "en-kn": {

        "what is your name":
            "ನಿಮ್ಮ ಹೆಸರೇನು?",

        "what is your name?":
            "ನಿಮ್ಮ ಹೆಸರೇನು?",

        "hello":
            "ನಮಸ್ಕಾರ",

        "hello!":
            "ನಮಸ್ಕಾರ!",

        "how are you":
            "ನೀವು ಹೇಗಿದ್ದೀರಿ?",

        "how are you?":
            "ನೀವು ಹೇಗಿದ್ದೀರಿ?",

        "good morning":
            "ಶುಭೋದಯ",

        "thank you":
            "ಧನ್ಯವಾದಗಳು",

        "yes":
            "ಹೌದು",

        "no":
            "ಇಲ್ಲ"

    },


    "en-ml": {

        "what is your name":
            "നിങ്ങളുടെ പേര് എന്താണ്?",

        "what is your name?":
            "നിങ്ങളുടെ പേര് എന്താണ്?",

        "hello":
            "ഹലോ",

        "hello!":
            "ഹലോ!",

        "how are you":
            "സുഖമാണോ?",

        "how are you?":
            "സുഖമാണോ?",

        "good morning":
            "സുപ്രഭാതം",

        "thank you":
            "നന്ദി",

        "yes":
            "അതെ",

        "no":
            "ഇല്ല"

    },


    "en-es": {

        "what is your name":
            "¿Cuál es tu nombre?",

        "what is your name?":
            "¿Cuál es tu nombre?",

        "hello":
            "Hola",

        "how are you":
            "¿Cómo estás?",

        "thank you":
            "Gracias",

        "good morning":
            "Buenos días",

        "good night":
            "Buenas noches"

    },


    "en-fr": {

        "what is your name":
            "Comment vous appelez-vous ?",

        "hello":
            "Bonjour",

        "how are you":
            "Comment allez-vous ?",

        "thank you":
            "Merci",

        "good morning":
            "Bonjour",

        "good night":
            "Bonne nuit"

    },


    "en-de": {

        "what is your name":
            "Wie heißt du?",

        "hello":
            "Hallo",

        "how are you":
            "Wie geht es dir?",

        "thank you":
            "Danke",

        "good morning":
            "Guten Morgen",

        "good night":
            "Gute Nacht"

    },


    "en-ja": {

        "what is your name":
            "あなたの名前は何ですか？",

        "hello":
            "こんにちは",

        "how are you":
            "お元気ですか？",

        "thank you":
            "ありがとうございます"

    },


    "en-ko": {

        "what is your name":
            "이름이 뭐예요?",

        "hello":
            "안녕하세요",

        "how are you":
            "잘 지내세요?",

        "thank you":
            "감사합니다"

    },


    "en-zh": {

        "what is your name":
            "你叫什么名字？",

        "hello":
            "你好",

        "how are you":
            "你好吗？",

        "thank you":
            "谢谢"

    },


    "en-pt": {

        "what is your name":
            "Qual é o seu nome?",

        "hello":
            "Olá",

        "how are you":
            "Como você está?",

        "thank you":
            "Obrigado"

    }

};


/* =========================================================
   GET ELEMENTS
========================================================= */

const sourceLanguage =
    document.getElementById(
        "sourceLanguage"
    );

const targetLanguage =
    document.getElementById(
        "targetLanguage"
    );

const sourceText =
    document.getElementById(
        "sourceText"
    );

const translationResult =
    document.getElementById(
        "translationResult"
    );

const translateBtn =
    document.getElementById(
        "translateBtn"
    );

const swapBtn =
    document.getElementById(
        "swapBtn"
    );

const voiceBtn =
    document.getElementById(
        "voiceBtn"
    );

const clearInputBtn =
    document.getElementById(
        "clearInputBtn"
    );

const copyBtn =
    document.getElementById(
        "copyBtn"
    );

const speakBtn =
    document.getElementById(
        "speakBtn"
    );

const favoriteBtn =
    document.getElementById(
        "favoriteBtn"
    );

const charCount =
    document.getElementById(
        "charCount"
    );

const translationStatus =
    document.getElementById(
        "translationStatus"
    );

const historyBtn =
    document.getElementById(
        "historyBtn"
    );

const favoritesBtn =
    document.getElementById(
        "favoritesBtn"
    );

const historyModal =
    document.getElementById(
        "historyModal"
    );

const favoritesModal =
    document.getElementById(
        "favoritesModal"
    );

const closeHistoryBtn =
    document.getElementById(
        "closeHistoryBtn"
    );

const closeFavoritesBtn =
    document.getElementById(
        "closeFavoritesBtn"
    );

const historyList =
    document.getElementById(
        "historyList"
    );

const favoritesList =
    document.getElementById(
        "favoritesList"
    );

const clearHistoryBtn =
    document.getElementById(
        "clearHistoryBtn"
    );

const clearFavoritesBtn =
    document.getElementById(
        "clearFavoritesBtn"
    );

const themeToggle =
    document.getElementById(
        "themeToggle"
    );

const toast =
    document.getElementById(
        "toast"
    );

const confirmModal =
    document.getElementById(
        "confirmModal"
    );

const confirmTitle =
    document.getElementById(
        "confirmTitle"
    );

const confirmMessage =
    document.getElementById(
        "confirmMessage"
    );

const cancelConfirm =
    document.getElementById(
        "cancelConfirm"
    );

const confirmAction =
    document.getElementById(
        "confirmAction"
    );


/* =========================================================
   STORAGE
========================================================= */

let history =
    JSON.parse(
        localStorage.getItem(
            "linguaflow_history"
        )
    ) || [];


let favorites =
    JSON.parse(
        localStorage.getItem(
            "linguaflow_favorites"
        )
    ) || [];


let pendingAction =
    null;


/* =========================================================
   LOAD LANGUAGES
========================================================= */

function loadLanguages() {

    sourceLanguage.innerHTML =
        "";

    targetLanguage.innerHTML =
        "";


    Object.entries(
        languages
    ).forEach(
        ([code, language]) => {

            const sourceOption =
                document.createElement(
                    "option"
                );

            sourceOption.value =
                code;

            sourceOption.textContent =
                `${language.name} (${language.native})`;


            sourceLanguage.appendChild(
                sourceOption
            );


            const targetOption =
                document.createElement(
                    "option"
                );

            targetOption.value =
                code;

            targetOption.textContent =
                `${language.name} (${language.native})`;


            targetLanguage.appendChild(
                targetOption
            );

        }
    );


    sourceLanguage.value =
        "en";

    targetLanguage.value =
        "te";

}


/* =========================================================
   GET COMMON TRANSLATION
========================================================= */

function getCommonTranslation(
    text,
    source,
    target
) {

    const key =
        `${source}-${target}`;

    const cleanText =
        text
            .toLowerCase()
            .trim();


    if (
        commonTranslations[key] &&
        commonTranslations[key][cleanText]
    ) {

        return commonTranslations[key][cleanText];

    }


    return null;

}


/* =========================================================
   TRANSLATE
========================================================= */

async function translateText() {

    const text =
        sourceText.value.trim();

    const source =
        sourceLanguage.value;

    const target =
        targetLanguage.value;


    if (!text) {

        showToast(
            "Please enter text first."
        );

        return;

    }


    /* SAME LANGUAGE */

    if (source === target) {

        displayTranslation(
            text,
            text,
            source,
            target
        );

        return;

    }


    /* COMMON PHRASE */

    const common =
        getCommonTranslation(
            text,
            source,
            target
        );


    if (common) {

        displayTranslation(
            text,
            common,
            source,
            target
        );

        return;

    }


    /* API TRANSLATION */

    translateBtn.disabled =
        true;

    translateBtn.textContent =
        "Translating...";

    translationStatus.textContent =
        "Processing";


    try {

        const url =
            "https://translate.googleapis.com/translate_a/single" +
            "?client=gtx" +
            "&sl=" +
            encodeURIComponent(source) +
            "&tl=" +
            encodeURIComponent(target) +
            "&dt=t" +
            "&q=" +
            encodeURIComponent(text);


        const response =
            await fetch(url);


        if (!response.ok) {

            throw new Error(
                `HTTP ${response.status}`
            );

        }


        const data =
            await response.json();


        let translatedText =
            "";


        if (
            data &&
            data[0]
        ) {

            data[0].forEach(
                segment => {

                    if (
                        segment &&
                        segment[0]
                    ) {

                        translatedText +=
                            segment[0];

                    }

                }
            );

        }


        translatedText =
            translatedText.trim();


        if (!translatedText) {

            throw new Error(
                "Translation not available."
            );

        }


        displayTranslation(
            text,
            translatedText,
            source,
            target
        );


    } catch (error) {

        console.error(
            "Translation error:",
            error
        );


        translationStatus.textContent =
            "Failed";


        translationResult.textContent =
            "Translation service is unavailable. Please try again.";


        showToast(
            "Translation failed."
        );


    } finally {

        translateBtn.disabled =
            false;

        translateBtn.textContent =
            "Translate";

    }

}


/* =========================================================
   DISPLAY TRANSLATION
========================================================= */

function displayTranslation(
    original,
    translated,
    source,
    target
) {

    translationResult.textContent =
        translated;

    translationStatus.textContent =
        "Completed";


    addHistory(
        original,
        translated,
        source,
        target
    );


    favoriteBtn.textContent =
        "☆ Favorite";


    showToast(
        "Translation completed."
    );

}


/* =========================================================
   TRANSLATE BUTTON
========================================================= */

translateBtn.addEventListener(
    "click",
    translateText
);


/* =========================================================
   CTRL + ENTER
========================================================= */

sourceText.addEventListener(
    "keydown",
    event => {

        if (
            event.ctrlKey &&
            event.key === "Enter"
        ) {

            translateText();

        }

    }
);


/* =========================================================
   CHARACTER COUNT
========================================================= */

sourceText.addEventListener(
    "input",
    () => {

        charCount.textContent =
            `${sourceText.value.length} / 1000`;

    }
);


/* =========================================================
   SWAP
========================================================= */

swapBtn.addEventListener(
    "click",
    () => {

        const oldSource =
            sourceLanguage.value;

        const oldTarget =
            targetLanguage.value;


        sourceLanguage.value =
            oldTarget;

        targetLanguage.value =
            oldSource;


        const oldInput =
            sourceText.value;

        const oldOutput =
            translationResult.textContent;


        if (
            oldOutput &&
            oldOutput !==
            "Your translation will appear here..."
        ) {

            sourceText.value =
                oldOutput;

            translationResult.textContent =
                oldInput;

        }


        charCount.textContent =
            `${sourceText.value.length} / 1000`;


        showToast(
            "Languages swapped."
        );

    }
);


/* =========================================================
   COPY
========================================================= */

copyBtn.addEventListener(
    "click",
    async () => {

        const text =
            translationResult.textContent.trim();


        if (
            !text ||
            text ===
            "Your translation will appear here..."
        ) {

            showToast(
                "Nothing to copy."
            );

            return;

        }


        try {

            await navigator.clipboard.writeText(
                text
            );

            showToast(
                "Translation copied."
            );

        } catch {

            showToast(
                "Unable to copy."
            );

        }

    }
);


/* =========================================================
   SPEAK
========================================================= */

speakBtn.addEventListener(
    "click",
    () => {

        const text =
            translationResult.textContent.trim();


        if (
            !text ||
            text ===
            "Your translation will appear here..."
        ) {

            showToast(
                "Nothing to speak."
            );

            return;

        }


        if (
            !window.speechSynthesis
        ) {

            showToast(
                "Text-to-speech is not supported."
            );

            return;

        }


        window.speechSynthesis.cancel();


        const speech =
            new SpeechSynthesisUtterance(
                text
            );


        speech.lang =
            getSpeechLanguage(
                targetLanguage.value
            );


        speech.rate =
            0.9;


        window.speechSynthesis.speak(
            speech
        );

    }
);


/* =========================================================
   SPEECH LANGUAGE
========================================================= */

function getSpeechLanguage(code) {

    const map = {

        en: "en-US",

        te: "te-IN",

        hi: "hi-IN",

        ta: "ta-IN",

        kn: "kn-IN",

        ml: "ml-IN",

        mr: "mr-IN",

        bn: "bn-IN",

        gu: "gu-IN",

        pa: "pa-IN",

        ur: "ur-PK",

        or: "or-IN",

        ne: "ne-NP",

        es: "es-ES",

        fr: "fr-FR",

        de: "de-DE",

        ja: "ja-JP",

        ko: "ko-KR",

        pt: "pt-PT",

        zh: "zh-CN"

    };


    return (
        map[code] ||
        "en-US"
    );

}


/* =========================================================
   VOICE INPUT
========================================================= */

voiceBtn.addEventListener(
    "click",
    () => {

        const Recognition =
            window.SpeechRecognition ||
            window.webkitSpeechRecognition;


        if (!Recognition) {

            showToast(
                "Voice input is not supported in this browser."
            );

            return;

        }


        const recognition =
            new Recognition();


        recognition.lang =
            getSpeechLanguage(
                sourceLanguage.value
            );


        recognition.continuous =
            false;

        recognition.interimResults =
            false;


        voiceBtn.textContent =
            "🎙 Listening...";


        recognition.start();


        recognition.onresult =
            event => {

                const text =
                    event.results[0][0]
                        .transcript;


                sourceText.value =
                    text;


                charCount.textContent =
                    `${text.length} / 1000`;


                showToast(
                    "Voice input added."
                );

            };


        recognition.onerror =
            () => {

                showToast(
                    "Voice recognition failed."
                );

            };


        recognition.onend =
            () => {

                voiceBtn.textContent =
                    "🎤 Voice";

            };

    }
);


/* =========================================================
   CLEAR INPUT
========================================================= */

clearInputBtn.addEventListener(
    "click",
    () => {

        sourceText.value =
            "";

        translationResult.textContent =
            "Your translation will appear here...";

        translationStatus.textContent =
            "Ready";

        charCount.textContent =
            "0 / 1000";

        favoriteBtn.textContent =
            "☆ Favorite";

    }
);


/* =========================================================
   ADD FAVORITE
========================================================= */

favoriteBtn.addEventListener(
    "click",
    () => {

        const original =
            sourceText.value.trim();

        const translated =
            translationResult.textContent.trim();


        if (
            !original ||
            !translated ||
            translated ===
            "Your translation will appear here..."
        ) {

            showToast(
                "Translate something first."
            );

            return;

        }


        const duplicate =
            favorites.some(
                item =>
                    item.original ===
                        original &&
                    item.translated ===
                        translated
            );


        if (duplicate) {

            showToast(
                "Already in favorites."
            );

            return;

        }


        favorites.unshift({

            id:
                Date.now(),

            original:

                original,

            translated:

                translated,

            source:

                sourceLanguage.value,

            target:

                targetLanguage.value

        });


        saveFavorites();


        favoriteBtn.textContent =
            "★ Favorited";


        showToast(
            "Added to favorites."
        );

    }
);


/* =========================================================
   HISTORY
========================================================= */

function addHistory(
    original,
    translated,
    source,
    target
) {

    history.unshift({

        id:
            Date.now(),

        original:

            original,

        translated:

            translated,

        source:

            source,

        target:

            target,

        date:

            new Date()
                .toLocaleString()

    });


    /*
       Keep maximum 50 entries.
    */

    history =
        history.slice(
            0,
            50
        );


    saveHistory();

}


/* =========================================================
   SAVE HISTORY
========================================================= */

function saveHistory() {

    localStorage.setItem(
        "linguaflow_history",
        JSON.stringify(
            history
        )
    );

}


/* =========================================================
   SAVE FAVORITES
========================================================= */

function saveFavorites() {

    localStorage.setItem(
        "linguaflow_favorites",
        JSON.stringify(
            favorites
        )
    );

}


/* =========================================================
   OPEN HISTORY
========================================================= */

historyBtn.addEventListener(
    "click",
    () => {

        renderHistory();

        historyModal.classList.add(
            "show"
        );

    }
);


/* =========================================================
   CLOSE HISTORY
========================================================= */

closeHistoryBtn.addEventListener(
    "click",
    () => {

        historyModal.classList.remove(
            "show"
        );

    }
);


/* =========================================================
   OPEN FAVORITES
========================================================= */

favoritesBtn.addEventListener(
    "click",
    () => {

        renderFavorites();

        favoritesModal.classList.add(
            "show"
        );

    }
);


/* =========================================================
   CLOSE FAVORITES
========================================================= */

closeFavoritesBtn.addEventListener(
    "click",
    () => {

        favoritesModal.classList.remove(
            "show"
        );

    }
);


/* =========================================================
   CLOSE MODALS WHEN CLICKING BACKGROUND
========================================================= */

historyModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            historyModal
        ) {

            historyModal.classList.remove(
                "show"
            );

        }

    }
);


favoritesModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            favoritesModal
        ) {

            favoritesModal.classList.remove(
                "show"
            );

        }

    }
);


/* =========================================================
   RENDER HISTORY
========================================================= */

function renderHistory() {

    historyList.innerHTML =
        "";


    if (history.length === 0) {

        historyList.innerHTML = `

            <div class="empty-message">

                <div class="empty-icon">
                    🕘
                </div>

                <h3>
                    No Translation History
                </h3>

                <p>
                    Your translations will appear here.
                </p>

            </div>

        `;

        return;

    }


    history.forEach(
        item => {

            const div =
                document.createElement(
                    "div"
                );


            div.className =
                "data-item";


            div.innerHTML = `

                <div class="data-item-top">

                    <span class="language-pair">

                        ${languages[item.source].name}

                        →

                        ${languages[item.target].name}

                    </span>


                    <span class="item-date">

                        ${item.date}

                    </span>

                </div>


                <p class="original-text">

                    ${escapeHTML(
                        item.original
                    )}

                </p>


                <p class="translated-text">

                    ${escapeHTML(
                        item.translated
                    )}

                </p>


                <div class="item-buttons">

                    <button
                        class="item-btn use-btn"
                        onclick="useHistory(${item.id})">

                        ↩ Use

                    </button>


                    <button
                        class="item-btn delete-item-btn"
                        onclick="deleteHistory(${item.id})">

                        🗑 Delete

                    </button>

                </div>

            `;


            historyList.appendChild(
                div
            );

        }
    );

}


/* =========================================================
   RENDER FAVORITES
========================================================= */

function renderFavorites() {

    favoritesList.innerHTML =
        "";


    if (favorites.length === 0) {

        favoritesList.innerHTML = `

            <div class="empty-message">

                <div class="empty-icon">
                    ⭐
                </div>

                <h3>
                    No Favorite Translations
                </h3>

                <p>
                    Your favorite translations will appear here.
                </p>

            </div>

        `;

        return;

    }


    favorites.forEach(
        item => {

            const div =
                document.createElement(
                    "div"
                );


            div.className =
                "data-item";


            div.innerHTML = `

                <div class="data-item-top">

                    <span class="language-pair">

                        ${languages[item.source].name}

                        →

                        ${languages[item.target].name}

                    </span>


                    <span>
                        ⭐
                    </span>

                </div>


                <p class="original-text">

                    ${escapeHTML(
                        item.original
                    )}

                </p>


                <p class="translated-text">

                    ${escapeHTML(
                        item.translated
                    )}

                </p>


                <div class="item-buttons">

                    <button
                        class="item-btn use-btn"
                        onclick="useFavorite(${item.id})">

                        ↩ Use

                    </button>


                    <button
                        class="item-btn delete-item-btn"
                        onclick="deleteFavorite(${item.id})">

                        🗑 Delete

                    </button>

                </div>

            `;


            favoritesList.appendChild(
                div
            );

        }
    );

}


/* =========================================================
   USE HISTORY
========================================================= */

function useHistory(id) {

    const item =
        history.find(
            item =>
                item.id === id
        );


    if (!item) return;


    sourceLanguage.value =
        item.source;

    targetLanguage.value =
        item.target;

    sourceText.value =
        item.original;

    translationResult.textContent =
        item.translated;

    translationStatus.textContent =
        "Completed";


    charCount.textContent =
        `${item.original.length} / 1000`;


    historyModal.classList.remove(
        "show"
    );


    window.scrollTo({

        top: 0,

        behavior:
            "smooth"

    });


    showToast(
        "History translation loaded."
    );

}


/* =========================================================
   USE FAVORITE
========================================================= */

function useFavorite(id) {

    const item =
        favorites.find(
            item =>
                item.id === id
        );


    if (!item) return;


    sourceLanguage.value =
        item.source;

    targetLanguage.value =
        item.target;

    sourceText.value =
        item.original;

    translationResult.textContent =
        item.translated;

    translationStatus.textContent =
        "Completed";


    charCount.textContent =
        `${item.original.length} / 1000`;


    favoriteBtn.textContent =
        "★ Favorited";


    favoritesModal.classList.remove(
        "show"
    );


    window.scrollTo({

        top: 0,

        behavior:
            "smooth"

    });


    showToast(
        "Favorite translation loaded."
    );

}


/* =========================================================
   DELETE HISTORY
========================================================= */

function deleteHistory(id) {

    openConfirmation(

        "Delete History",

        "Are you sure you want to delete this history item?",

        () => {

            history =
                history.filter(
                    item =>
                        item.id !== id
                );


            saveHistory();


            renderHistory();


            showToast(
                "History item deleted."
            );

        }

    );

}


/* =========================================================
   DELETE FAVORITE
========================================================= */

function deleteFavorite(id) {

    openConfirmation(

        "Delete Favorite",

        "Are you sure you want to delete this favorite?",

        () => {

            favorites =
                favorites.filter(
                    item =>
                        item.id !== id
                );


            saveFavorites();


            renderFavorites();


            showToast(
                "Favorite deleted."
            );

        }

    );

}


/* =========================================================
   CLEAR HISTORY
========================================================= */

clearHistoryBtn.addEventListener(
    "click",
    () => {

        if (
            history.length === 0
        ) {

            showToast(
                "History is already empty."
            );

            return;

        }


        openConfirmation(

            "Clear History",

            "Are you sure you want to delete all translation history?",

            () => {

                history =
                    [];


                saveHistory();


                renderHistory();


                showToast(
                    "History cleared."
                );

            }

        );

    }
);


/* =========================================================
   CLEAR FAVORITES
========================================================= */

clearFavoritesBtn.addEventListener(
    "click",
    () => {

        if (
            favorites.length === 0
        ) {

            showToast(
                "Favorites are already empty."
            );

            return;

        }


        openConfirmation(

            "Clear Favorites",

            "Are you sure you want to delete all favorite translations?",

            () => {

                favorites =
                    [];


                saveFavorites();


                renderFavorites();


                favoriteBtn.textContent =
                    "☆ Favorite";


                showToast(
                    "Favorites cleared."
                );

            }

        );

    }
);


/* =========================================================
   CONFIRMATION
========================================================= */

function openConfirmation(
    title,
    message,
    action
) {

    confirmTitle.textContent =
        title;

    confirmMessage.textContent =
        message;


    pendingAction =
        action;


    confirmModal.classList.add(
        "show"
    );

}


/* =========================================================
   CONFIRM BUTTON
========================================================= */

confirmAction.addEventListener(
    "click",
    () => {

        if (pendingAction) {

            pendingAction();

        }


        pendingAction =
            null;


        confirmModal.classList.remove(
            "show"
        );

    }
);


/* =========================================================
   CANCEL BUTTON
========================================================= */

cancelConfirm.addEventListener(
    "click",
    () => {

        pendingAction =
            null;


        confirmModal.classList.remove(
            "show"
        );

    }
);


/* =========================================================
   CLICK OUTSIDE CONFIRMATION
========================================================= */

confirmModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            confirmModal
        ) {

            pendingAction =
                null;

            confirmModal.classList.remove(
                "show"
            );

        }

    }
);


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key ===
            "Escape"
        ) {

            historyModal.classList.remove(
                "show"
            );

            favoritesModal.classList.remove(
                "show"
            );

            confirmModal.classList.remove(
                "show"
            );

            pendingAction =
                null;

        }

    }
);


/* =========================================================
   TOAST
========================================================= */

let toastTimer;


function showToast(message) {

    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(text) {

    const div =
        document.createElement(
            "div"
        );


    div.textContent =
        text;


    return div.innerHTML;

}


/* =========================================================
   DARK MODE
========================================================= */

function loadTheme() {

    const theme =
        localStorage.getItem(
            "linguaflow_theme"
        );


    if (
        theme ===
        "dark"
    ) {

        document.body.classList.add(
            "dark"
        );


        themeToggle.textContent =
            "☀️";

    }

}


themeToggle.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "dark"
        );


        const dark =
            document.body.classList.contains(
                "dark"
            );


        localStorage.setItem(
            "linguaflow_theme",
            dark
                ? "dark"
                : "light"
        );


        themeToggle.textContent =
            dark
                ? "☀️"
                : "🌙";

    }
);


/* =========================================================
   START APPLICATION
========================================================= */

loadLanguages();

loadTheme();