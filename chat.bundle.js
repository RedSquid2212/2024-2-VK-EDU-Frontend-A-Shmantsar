/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/chat.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scripts/chat.js":
/*!*************************!*\
  !*** ./scripts/chat.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.css */ \"./styles/index.css\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_0__);\nvar _JSON$parse;\n\nvar form = document.querySelector('form');\nvar input = document.querySelector('.message-input');\nvar messageList = document.querySelector('.message-list');\nvar backButton = document.querySelector('.back-button');\nvar oldMessages = (_JSON$parse = JSON.parse(localStorage.getItem('messages'))) !== null && _JSON$parse !== void 0 ? _JSON$parse : [];\nwindow.addEventListener('load', function () {\n  oldMessages.forEach(function (message) {\n    return displayMessage(message, false);\n  });\n});\nwindow.addEventListener('unload', function () {\n  return saveInLocalStorage();\n});\nform.addEventListener('submit', handleSubmit);\nform.addEventListener('keypress', handleKeyPress);\nbackButton.addEventListener('click', function () {\n  window.location.href = 'http://localhost:8080/';\n});\nfunction handleSubmit(event) {\n  event.preventDefault();\n  var messageText = input.value.trim();\n  if (messageText && messageText.length > 0) {\n    var message = {\n      text: messageText,\n      from: 'Jennifer',\n      time: new Date().toLocaleTimeString('RU', {\n        hour: '2-digit',\n        minute: '2-digit'\n      })\n    };\n    oldMessages.push(message);\n    displayMessage(message, true);\n    input.value = '';\n  }\n}\nfunction handleKeyPress(event) {\n  if (event.keyCode === 13 && !event.shiftKey) {\n    form.dispatchEvent(new Event('submit'));\n  }\n}\nfunction displayMessage(message, isNew) {\n  var messageElement = document.createElement('div');\n  messageElement.classList.add('message');\n  if (isNew) {\n    messageElement.classList.add('new-message');\n  } else {\n    messageElement.classList.remove('new-message');\n  }\n  messageElement.innerText = \"\".concat(message.text);\n  messageElement.insertAdjacentHTML('beforeend', \"<span class=\\\"message-time\\\">\".concat(message.from, \" at \").concat(message.time, \"</span>\"));\n  messageList.appendChild(messageElement);\n}\nfunction saveInLocalStorage(message) {\n  localStorage.setItem('messages', JSON.stringify(oldMessages));\n}\n\n//# sourceURL=webpack:///./scripts/chat.js?");

/***/ }),

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/index.css?");

/***/ })

/******/ });