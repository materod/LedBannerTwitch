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

/***/ "./src/controllers/edit.js":
/*!*********************************!*\
  !*** ./src/controllers/edit.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_fireBaseUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/fireBaseUtils */ \"./src/utils/fireBaseUtils.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.js\");\n/* harmony import */ var _utils_textStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/textStyles */ \"./src/utils/textStyles.js\");\n\r\n\r\n\r\n\r\nconst urlParams = new URLSearchParams(window.location.search);\r\nconst styleNames = (0,_utils_textStyles__WEBPACK_IMPORTED_MODULE_2__.getStyleNames)();\r\n\r\n// Check logged\r\n(0,_utils_fireBaseUtils__WEBPACK_IMPORTED_MODULE_0__.subscribeAuth)((user) => {\r\n  if (user) {\r\n    let bannerUrl = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.getParentUrl)() + 'banner.html?id=' + urlParams.get('id');\r\n    (0,_utils_fireBaseUtils__WEBPACK_IMPORTED_MODULE_0__.subscribeBanner)(urlParams.get('id'), (banner) => {\r\n      if (banner) {\r\n        // Editor\r\n        document.getElementById('bannerUrl').value = bannerUrl + banner.id;\r\n        document.getElementById('bannerName').value = banner.name;\r\n        let styleSelector = document.getElementById('bannerStyle');\r\n        styleSelector.innerHTML = '';\r\n        for (let i in styleNames) {\r\n          let option = document.createElement('option');\r\n          option.value = styleNames[i];\r\n          option.innerHTML = styleNames[i];\r\n          if (styleNames[i] === banner.style) {\r\n            option.selected = true;\r\n          }\r\n          styleSelector.append(option);\r\n        }\r\n        document.getElementById('bannerDuration').value = banner.duration;\r\n        let fontSelector = document.getElementById('bannerFont');\r\n        console.log(fontSelector)\r\n        fontSelector.innerHTML = '';\r\n        for (let i in _utils_textStyles__WEBPACK_IMPORTED_MODULE_2__.fontFammilies) {\r\n          let option = document.createElement('option');\r\n          option.value = _utils_textStyles__WEBPACK_IMPORTED_MODULE_2__.fontFammilies[i];\r\n          option.innerHTML = _utils_textStyles__WEBPACK_IMPORTED_MODULE_2__.fontFammilies[i];\r\n          if (_utils_textStyles__WEBPACK_IMPORTED_MODULE_2__.fontFammilies[i] === banner.font) {\r\n            option.selected = true;\r\n          }\r\n          fontSelector.append(option);\r\n        }\r\n        document.getElementById('bannerSize').value = banner.size;\r\n        document.getElementById('bannerColor1').value = banner.color1;\r\n        document.getElementById('bannerColor2').value = banner.color2;\r\n        document.getElementById('bannerText').value = banner.text.join('\\n');\r\n\r\n        // Preview\r\n        let preview = document.getElementById('previewFrame');\r\n        preview.src = 'banner.html?id=' + banner.id;\r\n      } else {\r\n        document.location = 'error404.html';\r\n      }\r\n    });\r\n  } else {\r\n    document.location = 'login.html';\r\n  }\r\n});\r\n\r\nconst logoutButton = document.querySelector('#logoutBtn');\r\nlogoutButton.addEventListener('click', () => {\r\n  (0,_utils_fireBaseUtils__WEBPACK_IMPORTED_MODULE_0__.logout)();\r\n});\r\n\r\n// Update banner\r\nconst editBannerForm = document.querySelector('#editBannerForm');\r\neditBannerForm.addEventListener('submit', (e) => {\r\n  e.preventDefault();\r\n\r\n  let bannerName = editBannerForm.bannerName.value;\r\n  let bannerStyle = editBannerForm.bannerStyle.value;\r\n  let bannerDur = editBannerForm.bannerDuration.value;\r\n  let bannerFont = editBannerForm.bannerFont.value;\r\n  let bannerSize = editBannerForm.bannerSize.value;\r\n  let bannerColor1 = editBannerForm.bannerColor1.value;\r\n  let bannerColor2 = editBannerForm.bannerColor2.value;\r\n  let textArray = editBannerForm.bannerText.value.split('\\n');\r\n\r\n  (0,_utils_fireBaseUtils__WEBPACK_IMPORTED_MODULE_0__.updateBanner)(\r\n    urlParams.get('id'),\r\n    {\r\n      name: bannerName,\r\n      style: bannerStyle,\r\n      duration: bannerDur,\r\n      font: bannerFont,\r\n      size: bannerSize,\r\n      color1: bannerColor1,\r\n      color2: bannerColor2,\r\n      text: textArray,\r\n    },\r\n    () => {\r\n      console.log('updated');\r\n    }\r\n  );\r\n});\r\n\r\n// Copy to clipboard\r\nconst copyToClipboardBtn = document.getElementById('copyToClipboardBtn');\r\ncopyToClipboardBtn.addEventListener('click', (e) => {\r\n  var url = document.getElementById('bannerUrl').value;\r\n  navigator.clipboard\r\n    .writeText(url)\r\n    .then(() => {\r\n      console.log('Copied ' + url);\r\n    })\r\n    .catch((err) => {\r\n      console.log('Error ' + err);\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://ledbannertwitch/./src/controllers/edit.js?");

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getParentUrl\": () => (/* binding */ getParentUrl),\n/* harmony export */   \"showErrorMessage\": () => (/* binding */ showErrorMessage)\n/* harmony export */ });\n// Show error message\r\nconst showErrorMessage = (msg) => {\r\n  const alertBox = document.getElementById('errorMessage');\r\n  if (alertBox) {\r\n    alertBox.classList.remove('hide');\r\n    alertBox.innerHTML =\r\n      '<strong>Error!: </strong>' +\r\n      msg +\r\n      '<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\" aria-label=\"Close\"></button>';\r\n    alertBox.classList.add('show');\r\n  }\r\n};\r\n\r\n// Url\r\nconst getParentUrl = () => {\r\n  let pathArray = window.location.pathname.slice().split('/');\r\n  pathArray.pop();\r\n  let parentUrl =\r\n    window.location.protocol +\r\n    '//' +\r\n    window.location.hostname +\r\n    pathArray.join('/') +\r\n    '/';\r\n  return parentUrl;\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://ledbannertwitch/./src/utils/utils.js?");

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
/******/ 			"edit": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_firebase_app_dist_index_esm_js-node_modules_firebase_auth_dist_index_esm-05d92e","src_utils_fireBaseUtils_js-src_utils_textStyles_js"], () => (__webpack_require__("./src/controllers/edit.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;