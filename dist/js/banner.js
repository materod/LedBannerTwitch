/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./config/firebaseConfig.js":
/*!**********************************!*\
  !*** ./config/firebaseConfig.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"firebaseConfig\": () => (/* binding */ firebaseConfig)\n/* harmony export */ });\n// Your web app's Firebase configuration\r\nconst firebaseConfig = {\r\n  apiKey: \"AIzaSyC9nleSxjqSBD0SM53RNrb9DfFf2ACUQy4\",\r\n  authDomain: \"ledbannertwitch.firebaseapp.com\",\r\n  projectId: \"ledbannertwitch\",\r\n  storageBucket: \"ledbannertwitch.appspot.com\",\r\n  messagingSenderId: \"812290893406\",\r\n  appId: \"1:812290893406:web:1bd13b0156e8ed3e9276cf\"\r\n};\r\n\r\n\n\n//# sourceURL=webpack://ledbannertwitch/./config/firebaseConfig.js?");

/***/ }),

/***/ "./src/controllers/banner.js":
/*!***********************************!*\
  !*** ./src/controllers/banner.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_fireBaseUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/fireBaseUtils */ \"./src/utils/fireBaseUtils.js\");\n/* harmony import */ var _utils_textStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/textStyles */ \"./src/utils/textStyles.js\");\n\r\n\r\n\r\n// Get banner\r\nconst urlParams = new URLSearchParams(window.location.search);\r\n(0,_utils_fireBaseUtils__WEBPACK_IMPORTED_MODULE_0__.subscribeBanner)(urlParams.get('id'), (banner) => {\r\n  if (banner) {\r\n    (0,_utils_textStyles__WEBPACK_IMPORTED_MODULE_1__.applyStyle)(banner);\r\n  } else {\r\n    document.location = 'error404.html';\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://ledbannertwitch/./src/controllers/banner.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"applyStyle\": () => (/* binding */ applyStyle),\n/* harmony export */   \"fontFammilies\": () => (/* binding */ fontFammilies),\n/* harmony export */   \"getStyleNames\": () => (/* binding */ getStyleNames)\n/* harmony export */ });\nconst fontFammilies = ['Arial', 'VT323'];\r\n\r\nconst drawHearts = (banner) => {\r\n  document.body.classList = ['bodyTextAnimation'];\r\n  let bannerDiv = document.getElementById('placeholder');\r\n  bannerDiv.innerHTML = '';\r\n\r\n  let styleContainer = document.createElement('div');\r\n  styleContainer.classList = ['hearts-container'];\r\n  bannerDiv.appendChild(styleContainer);\r\n\r\n  let i = 0;\r\n  let item = document.createElement('span');\r\n  item.innerHTML = banner.text[i];\r\n  item.classList = ['hearts-text'];\r\n  item.style.setProperty('--style-color1', banner.color1);\r\n  item.style.setProperty('--style-font', banner.font);\r\n  item.style.setProperty('--style-size', banner.size + 'px');\r\n  styleContainer.appendChild(item);\r\n\r\n  // Create particles\r\n  var heartcount = (styleContainer.offsetWidth / 50) * 5;\r\n  for (let n = 0; n <= heartcount; n++) {\r\n    var size = Math.random() * (12 - 6) + 6;\r\n    var delay = Math.random() * banner.duration;\r\n    let particle = document.createElement('span');\r\n    particle.classList = ['particle'];\r\n    particle.style.setProperty(\r\n      'top',\r\n      Math.random() * (styleContainer.offsetHeight - 10) + 10\r\n    );\r\n    particle.style.setProperty(\r\n      'left',\r\n      Math.random() * (styleContainer.offsetWidth - 0)\r\n    );\r\n    particle.style.setProperty('width', size + 'px');\r\n    particle.style.setProperty('height', size + 'px');\r\n    particle.style.setProperty('--style-color2', banner.color2);\r\n    particle.style.setProperty('--style-duration', banner.duration + 's');\r\n    particle.style.setProperty('-webkit-animation-delay', delay + 's');\r\n    particle.style.setProperty('-moz-animation-delay', delay + 's');\r\n    particle.style.setProperty('-ms-animation-delay', delay + 's');\r\n    particle.style.setProperty('animation-delay', delay + 's');\r\n    styleContainer.appendChild(particle);\r\n\r\n    // Change text\r\n    if (n == 0) {\r\n      particle.addEventListener(\r\n        'animationiteration',\r\n        () => {\r\n          i++;\r\n          if (i >= banner.text.length) {\r\n            i = 0;\r\n          }\r\n          item.innerHTML = banner.text[i];\r\n        },\r\n        false\r\n      );\r\n    }\r\n  }\r\n};\r\n\r\nconst drawTextAnimation = (banner) => {\r\n  document.body.classList = ['bodyTextAnimation'];\r\n  let bannerDiv = document.getElementById('placeholder');\r\n  bannerDiv.innerHTML = '';\r\n\r\n  let styleContainer = document.createElement('div');\r\n  styleContainer.classList = ['textAnimation-container'];\r\n  bannerDiv.appendChild(styleContainer);\r\n\r\n  let styleContent = document.createElement('div');\r\n  styleContent.classList = ['textAnimation-content'];\r\n  styleContainer.appendChild(styleContent);\r\n\r\n  let i = 0;\r\n  let item = document.createElement('h2');\r\n  item.innerHTML = banner.text[i];\r\n  item.classList = ['textAnimation-text'];\r\n  item.style.setProperty('--style-color1', banner.color1);\r\n  item.style.setProperty('--style-color2', banner.color2);\r\n  item.style.setProperty('--style-duration', banner.duration + 's');\r\n  item.style.setProperty('--style-font', banner.font);\r\n  item.style.setProperty('--style-size', banner.size + 'px');\r\n  styleContainer.appendChild(item);\r\n\r\n  item.addEventListener(\r\n    'animationiteration',\r\n    () => {\r\n      i++;\r\n      if (i >= banner.text.length) {\r\n        i = 0;\r\n      }\r\n      item.innerHTML = banner.text[i];\r\n    },\r\n    false\r\n  );\r\n};\r\n\r\nconst stylesMap = {\r\n  Hearts: drawHearts,\r\n  'Text-Animation': drawTextAnimation,\r\n};\r\n\r\nconst applyStyle = (banner) => {\r\n  stylesMap[banner.style](banner);\r\n};\r\n\r\nconst getStyleNames = () => {\r\n  return Object.keys(stylesMap);\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://ledbannertwitch/./src/utils/textStyles.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"banner": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkledbannertwitch"] = self["webpackChunkledbannertwitch"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_firebase_app_dist_index_esm_js-node_modules_firebase_auth_dist_index_esm-05d92e"], () => (__webpack_require__("./src/controllers/banner.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;