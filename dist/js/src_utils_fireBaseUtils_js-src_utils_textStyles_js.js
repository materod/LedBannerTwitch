"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkledbannertwitch"] = self["webpackChunkledbannertwitch"] || []).push([["src_utils_fireBaseUtils_js-src_utils_textStyles_js"],{

/***/ "./config/firebaseConfig.js":
/*!**********************************!*\
  !*** ./config/firebaseConfig.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"firebaseConfig\": () => (/* binding */ firebaseConfig)\n/* harmony export */ });\n// Your web app's Firebase configuration\r\nconst firebaseConfig = {\r\n  apiKey: \"AIzaSyC9nleSxjqSBD0SM53RNrb9DfFf2ACUQy4\",\r\n  authDomain: \"ledbannertwitch.firebaseapp.com\",\r\n  projectId: \"ledbannertwitch\",\r\n  storageBucket: \"ledbannertwitch.appspot.com\",\r\n  messagingSenderId: \"812290893406\",\r\n  appId: \"1:812290893406:web:1bd13b0156e8ed3e9276cf\"\r\n};\r\n\r\n\n\n//# sourceURL=webpack://ledbannertwitch/./config/firebaseConfig.js?");

/***/ }),

/***/ "./src/utils/fireBaseUtils.js":
/*!************************************!*\
  !*** ./src/utils/fireBaseUtils.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addUserBanner\": () => (/* binding */ addUserBanner),\n/* harmony export */   \"loginWithEmail\": () => (/* binding */ loginWithEmail),\n/* harmony export */   \"logout\": () => (/* binding */ logout),\n/* harmony export */   \"registerWithEmail\": () => (/* binding */ registerWithEmail),\n/* harmony export */   \"removeUserBanner\": () => (/* binding */ removeUserBanner),\n/* harmony export */   \"subscribeAuth\": () => (/* binding */ subscribeAuth),\n/* harmony export */   \"subscribeBanner\": () => (/* binding */ subscribeBanner),\n/* harmony export */   \"subscribeUserBanners\": () => (/* binding */ subscribeUserBanners),\n/* harmony export */   \"updateBanner\": () => (/* binding */ updateBanner)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/firebaseConfig */ \"./config/firebaseConfig.js\");\n\r\n\r\n\r\n\r\n// Import your web app's Firebase configuration\r\n\r\n\r\n// Initialize Firebase\r\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(_config_firebaseConfig__WEBPACK_IMPORTED_MODULE_3__.firebaseConfig);\r\n\r\n// Authentication\r\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(app);\r\n\r\n// Auth changes\r\nlet currentUser = null;\r\nconst subscribeAuth = (callback) => {\r\n  (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(auth, (user) => {\r\n    currentUser = user;\r\n    if (callback) {\r\n      callback(currentUser);\r\n    }\r\n  });\r\n};\r\n\r\nconst registerWithEmail = (email, pass, okCallback, errCallback) => {\r\n  (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.createUserWithEmailAndPassword)(auth, email, pass)\r\n    .then((cred) => {\r\n      if (okCallback) {\r\n        okCallback();\r\n      }\r\n    })\r\n    .catch((err) => {\r\n      if (errCallback) {\r\n        errCallback(err);\r\n      }\r\n    });\r\n};\r\n\r\nconst loginWithEmail = (email, pass, okCallback, errCallback) => {\r\n  (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithEmailAndPassword)(auth, email, pass)\r\n    .then((cred) => {\r\n      if (okCallback) {\r\n        okCallback();\r\n      }\r\n    })\r\n    .catch((err) => {\r\n      if (errCallback) {\r\n        errCallback(err);\r\n      }\r\n    });\r\n};\r\n\r\n// Logout\r\nconst logout = () => {\r\n  (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signOut)(auth)\r\n    .then(() => {})\r\n    .catch((err) => {\r\n      showErrorMessage(err.message);\r\n    });\r\n};\r\n\r\n// Get db\r\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);\r\n\r\n// Subscribe user banner changes\r\nconst subscribeUserBanners = (userId, callback) => {\r\n  const bannersRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, 'banners');\r\n  // Query banners of the current user\r\n  const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(\r\n    bannersRef,\r\n    (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('user', '==', userId),\r\n    (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.orderBy)('created', 'asc')\r\n  );\r\n\r\n  // Subscribe to banners\r\n  (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.onSnapshot)(q, (snapshot) => {\r\n    let userBanners = [];\r\n    snapshot.docs.forEach((doc) => {\r\n      userBanners.push({ ...doc.data(), id: doc.id });\r\n    });\r\n    if (callback) {\r\n      callback(userBanners);\r\n    }\r\n  });\r\n};\r\n\r\n// Add new banner\r\nconst addUserBanner = (banner, okCallback, errCallback) => {\r\n  const bannersRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, 'banners');\r\n  (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)(bannersRef, banner)\r\n    .then(() => {\r\n      if (okCallback) {\r\n        okCallback();\r\n      }\r\n    })\r\n    .catch((err) => {\r\n      if (errCallback) {\r\n        errCallback(err);\r\n      }\r\n    });\r\n};\r\n\r\n// Remove banner\r\nconst removeUserBanner = (id, okCallback, errCallback) => {\r\n  const bannerRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, 'banners', id);\r\n  console.log(bannerRef);\r\n  (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.deleteDoc)(bannerRef)\r\n    .then(() => {\r\n      if (okCallback) {\r\n        okCallback();\r\n      }\r\n    })\r\n    .catch((err) => {\r\n      if (errCallback) {\r\n        errCallback(err);\r\n      }\r\n    });\r\n};\r\n\r\n// Subscribe banner changes\r\nconst subscribeBanner = (id, callback) => {\r\n  const bannerRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, 'banners', id);\r\n  (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.onSnapshot)(bannerRef, (snapshot) => {\r\n    let banner = null;\r\n    if (snapshot.exists()) {\r\n      banner = { ...snapshot.data(), id: snapshot.id };\r\n    }\r\n    if (callback) {\r\n      callback(banner);\r\n    }\r\n  });\r\n};\r\n\r\n// Update document\r\nconst updateBanner = (id, data, callback) => {\r\n  const bannerRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, 'banners', id);\r\n  (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)(bannerRef, data).then(() => {\r\n    if (callback) {\r\n      callback();\r\n    }\r\n  });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://ledbannertwitch/./src/utils/fireBaseUtils.js?");

/***/ }),

/***/ "./src/utils/textStyles.js":
/*!*********************************!*\
  !*** ./src/utils/textStyles.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"applyStyle\": () => (/* binding */ applyStyle),\n/* harmony export */   \"fontFammilies\": () => (/* binding */ fontFammilies),\n/* harmony export */   \"getStyleNames\": () => (/* binding */ getStyleNames)\n/* harmony export */ });\nconst fontFammilies = [\r\n  'Akronim',\r\n  'Alfa Slab One',\r\n  'Anton', \r\n  'Arial', \r\n  'Bangers',\r\n  'Black Ops One',\r\n  'Bungee Shade',\r\n  'Caveat', \r\n  'Coda',\r\n  'Codystar',\r\n  'Comfortaa', \r\n  'Courier Prime', \r\n  'Creepster',\r\n  'Dancing Script', \r\n  'Faster One',\r\n  'Flavors',\r\n  'Fredericka the Great',\r\n  'Fredoka One', \r\n  'Indie Flower',\r\n  'Londrina Shadow', \r\n  'Monoton',\r\n  'Nanum Pen Script', \r\n  'Nosifer',\r\n  'Notable',\r\n  'Oswald',\r\n  'Permanent Marker', \r\n  'Pirata One', \r\n  'Press Start 2P',\r\n  'Rampart One',\r\n  'Righteous', \r\n  'Rubik Moonrocks',\r\n  'Rye',\r\n  'Sacramento', \r\n  'Silkscreen',\r\n  'Titan One',\r\n  'VT323',\r\n  'Zilla Slab Highlight'\r\n];\r\n\r\nconst drawBoobles = (banner) => {\r\n  let bannerDiv = document.getElementById('placeholder');\r\n  bannerDiv.innerHTML = '';\r\n\r\n  let styleContainer = document.createElement('div');\r\n  styleContainer.classList = ['boobles-container'];\r\n  bannerDiv.appendChild(styleContainer);\r\n\r\n  let i = 0;\r\n  let item = document.createElement('span');\r\n  item.innerHTML = banner.text[i];\r\n  item.classList = ['boobles-text'];\r\n  item.style.setProperty('--style-color1', banner.color1);\r\n  item.style.setProperty('--style-font', '\\'' + banner.font + '\\'');\r\n  item.style.setProperty('--style-size', banner.size + 'px');\r\n  styleContainer.appendChild(item);\r\n\r\n  // Create particles\r\n  let booblesCount = (styleContainer.offsetWidth / 50) * 5;\r\n  for (let n = 0; n <= booblesCount; n++) {\r\n    let size = Math.random() * (24 - 6) + 6;\r\n    let delay = Math.random() * banner.duration;\r\n    let particle = document.createElement('span');\r\n    particle.classList = ['particle'];\r\n    particle.style.setProperty(\r\n      'top',\r\n      '50%'\r\n    );\r\n    particle.style.setProperty(\r\n      'left',\r\n      Math.random() * (styleContainer.offsetWidth / 2) +(styleContainer.offsetWidth / 4) \r\n    );\r\n    particle.style.setProperty('width', size + 'px');\r\n    particle.style.setProperty('height', size + 'px');\r\n    particle.style.setProperty('--style-color2', banner.color2);\r\n    particle.style.setProperty('--style-duration', banner.duration + 's');\r\n    particle.style.setProperty('-webkit-animation-delay', delay + 's');\r\n    particle.style.setProperty('-moz-animation-delay', delay + 's');\r\n    particle.style.setProperty('-ms-animation-delay', delay + 's');\r\n    particle.style.setProperty('animation-delay', delay + 's');\r\n    styleContainer.appendChild(particle);\r\n\r\n    // Change text\r\n    if (n == 0) {\r\n      particle.addEventListener(\r\n        'animationiteration',\r\n        () => {\r\n          i++;\r\n          if (i >= banner.text.length) {\r\n            i = 0;\r\n          }\r\n          item.innerHTML = banner.text[i];\r\n        },\r\n        false\r\n      );\r\n    }\r\n  }\r\n};\r\n\r\nconst drawColorful = (banner) => {\r\n  let bannerDiv = document.getElementById('placeholder');\r\n  bannerDiv.innerHTML = '';\r\n\r\n  let styleContainer = document.createElement('div');\r\n  styleContainer.classList = ['colorful-container'];\r\n  bannerDiv.appendChild(styleContainer);\r\n\r\n  let item = document.createElement('div');\r\n  item.classList = ['colorful-text'];\r\n  item.style.setProperty('--style-color1', banner.color1);\r\n  item.style.setProperty('--style-color2', banner.color2);\r\n  item.style.setProperty('--style-font', '\\'' + banner.font + '\\'');\r\n  item.style.setProperty('--style-size', banner.size + 'px');\r\n  let delay = 0;\r\n  for (let i in banner.text) {\r\n    let chars = banner.text[i].split(\"\");\r\n    for (let c in chars) {\r\n      item.innerHTML += '<span style=\"-webkit-animation-delay: '+ delay +'s;-moz-animation-delay: '+ delay +'s;-ms-animation-delay: '+ delay +'s; animation-delay: '+ delay +'s\">' + chars[c] + '</span>';\r\n      delay += 0.1;\r\n    }\r\n    item.innerHTML += '<br/>';\r\n  }\r\n  styleContainer.appendChild(item);\r\n};\r\n\r\nconst drawHearts = (banner) => {\r\n  let bannerDiv = document.getElementById('placeholder');\r\n  bannerDiv.innerHTML = '';\r\n\r\n  let styleContainer = document.createElement('div');\r\n  styleContainer.classList = ['hearts-container'];\r\n  bannerDiv.appendChild(styleContainer);\r\n\r\n  let i = 0;\r\n  let item = document.createElement('span');\r\n  item.innerHTML = banner.text[i];\r\n  item.classList = ['hearts-text'];\r\n  item.style.setProperty('--style-color1', banner.color1);\r\n  item.style.setProperty('--style-font', '\\'' + banner.font + '\\'');\r\n  item.style.setProperty('--style-size', banner.size + 'px');\r\n  styleContainer.appendChild(item);\r\n\r\n  // Create particles\r\n  let heartcount = (styleContainer.offsetWidth / 50) * 5;\r\n  for (let n = 0; n <= heartcount; n++) {\r\n    let size = Math.random() * (12 - 6) + 6;\r\n    let delay = Math.random() * banner.duration;\r\n    let particle = document.createElement('span');\r\n    particle.classList = ['particle'];\r\n    particle.style.setProperty(\r\n      'top',\r\n      Math.random() * (styleContainer.offsetHeight - 10) + 10\r\n    );\r\n    particle.style.setProperty(\r\n      'left',\r\n      Math.random() * (styleContainer.offsetWidth - 0)\r\n    );\r\n    particle.style.setProperty('width', size + 'px');\r\n    particle.style.setProperty('height', size + 'px');\r\n    particle.style.setProperty('--style-color2', banner.color2);\r\n    particle.style.setProperty('--style-duration', banner.duration + 's');\r\n    particle.style.setProperty('-webkit-animation-delay', delay + 's');\r\n    particle.style.setProperty('-moz-animation-delay', delay + 's');\r\n    particle.style.setProperty('-ms-animation-delay', delay + 's');\r\n    particle.style.setProperty('animation-delay', delay + 's');\r\n    styleContainer.appendChild(particle);\r\n\r\n    // Change text\r\n    if (n == 0) {\r\n      particle.addEventListener(\r\n        'animationiteration',\r\n        () => {\r\n          i++;\r\n          if (i >= banner.text.length) {\r\n            i = 0;\r\n          }\r\n          item.innerHTML = banner.text[i];\r\n        },\r\n        false\r\n      );\r\n    }\r\n  }\r\n};\r\n\r\nconst drawRotating = (banner) => {\r\n  let bannerDiv = document.getElementById('placeholder');\r\n  bannerDiv.innerHTML = '';\r\n\r\n  let styleContainer = document.createElement('div');\r\n  styleContainer.classList = ['rotating-container'];\r\n  bannerDiv.appendChild(styleContainer);\r\n\r\n  let textContainer = document.createElement('p');\r\n  textContainer.classList = ['rotating-text'];\r\n  textContainer.style.setProperty('--style-color1', banner.color1);\r\n  textContainer.style.setProperty('--style-font', '\\'' + banner.font + '\\'');\r\n  textContainer.style.setProperty('--style-size', banner.size + 'px');\r\n  textContainer.style.setProperty('--style-duration', banner.duration + 's');\r\n  styleContainer.appendChild(textContainer);\r\n\r\n  let delay=0;\r\n  let dur = parseFloat(banner.duration);\r\n  let lastLetter = null;\r\n  for (let i in banner.text) {\r\n    let wordContainer = document.createElement('span');\r\n    wordContainer.classList = ['rotating-word'];\r\n    textContainer.appendChild(wordContainer);\r\n\r\n    let chars = banner.text[i].split(\"\");\r\n    let delayOut = dur * chars.length;\r\n    for (let c in chars) {\r\n      let letterContainer = document.createElement('span');\r\n      letterContainer.classList = ['rotating-letter'];\r\n      letterContainer.style.setProperty('--delay-in', delay + 's');\r\n      letterContainer.style.setProperty('--delay-out', (delayOut + delay) + 's');\r\n      if (chars[c] == \" \") {\r\n        letterContainer.style.setProperty('min-width', banner.size / 3 + 'px');\r\n      }\r\n      letterContainer.innerHTML = chars[c];\r\n      wordContainer.appendChild(letterContainer);\r\n      lastLetter = letterContainer;\r\n      if (c < chars.length - 1) {\r\n        delay+=dur / 2.0;\r\n      }\r\n    }\r\n    delay+=delayOut;\r\n  }\r\n\r\n  // Replays at end of last animation\r\n  lastLetter.addEventListener(\r\n    'animationend',\r\n    (ev) => {\r\n      if (ev.animationName == \"rotation-out-keyframes\") {\r\n        document.getAnimations().forEach((animation) => {\r\n          animation.play();\r\n        });\r\n      }\r\n      \r\n    },\r\n    false\r\n  );\r\n}\r\n\r\nconst drawTextAnimation = (banner) => {\r\n  let bannerDiv = document.getElementById('placeholder');\r\n  bannerDiv.innerHTML = '';\r\n\r\n  let styleContainer = document.createElement('div');\r\n  styleContainer.classList = ['textAnimation-container'];\r\n  bannerDiv.appendChild(styleContainer);\r\n\r\n  let styleContent = document.createElement('div');\r\n  styleContent.classList = ['textAnimation-content'];\r\n  styleContainer.appendChild(styleContent);\r\n\r\n  let i = 0;\r\n  let item = document.createElement('h2');\r\n  item.innerHTML = banner.text[i];\r\n  item.classList = ['textAnimation-text'];\r\n  item.style.setProperty('--style-color1', banner.color1);\r\n  item.style.setProperty('--style-color2', banner.color2);\r\n  item.style.setProperty('--style-duration', banner.duration + 's');\r\n  item.style.setProperty('--style-font', '\\'' + banner.font + '\\'');\r\n  item.style.setProperty('--style-size', banner.size + 'px');\r\n  styleContainer.appendChild(item);\r\n\r\n  item.addEventListener(\r\n    'animationiteration',\r\n    () => {\r\n      i++;\r\n      if (i >= banner.text.length) {\r\n        i = 0;\r\n      }\r\n      item.innerHTML = banner.text[i];\r\n    },\r\n    false\r\n  );\r\n};\r\n\r\nconst stylesMap = {\r\n  Boobles: drawBoobles,\r\n  Colorful: drawColorful,\r\n  Hearts: drawHearts,\r\n  Rotating: drawRotating,\r\n  'Text-Animation': drawTextAnimation,\r\n};\r\n\r\nconst applyStyle = (banner) => {\r\n  stylesMap[banner.style](banner);\r\n};\r\n\r\nconst getStyleNames = () => {\r\n  return Object.keys(stylesMap);\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://ledbannertwitch/./src/utils/textStyles.js?");

/***/ })

}]);