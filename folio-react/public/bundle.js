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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /home/roland/wpbabelreact/src/index.js: Unexpected token (7:4)\\n\\n\\u001b[0m \\u001b[90m  5 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  6 | \\u001b[39m\\u001b[33mReactDOM\\u001b[39m\\u001b[33m.\\u001b[39mrender(\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m  7 | \\u001b[39m    \\u001b[33m<\\u001b[39m\\u001b[33mBrowserRouter\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m    \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  8 | \\u001b[39m        \\u001b[33m<\\u001b[39m\\u001b[33mRoute\\u001b[39m path\\u001b[33m=\\u001b[39m\\u001b[32m\\\"/\\\"\\u001b[39m component\\u001b[33m=\\u001b[39m{\\u001b[33mApp\\u001b[39m}\\u001b[33m>\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mRoute\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  9 | \\u001b[39m    \\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mBrowserRouter\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m,\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 10 | \\u001b[39m    document\\u001b[33m.\\u001b[39mgetElementById(\\u001b[32m'root'\\u001b[39m)\\u001b[0m\\n    at Parser.raise (/home/roland/wpbabelreact/node_modules/@babel/parser/lib/index.js:7012:17)\\n    at Parser.unexpected (/home/roland/wpbabelreact/node_modules/@babel/parser/lib/index.js:8405:16)\\n    at Parser.parseExprAtom (/home/roland/wpbabelreact/node_modules/@babel/parser/lib/index.js:9661:20)\\n    at Parser.parseExprSubscripts (/home/roland/wpbabelreact/node_modules/@babel/parser/lib/index.js:9237:23)\\n    at Parser.parseMaybeUnary (/home/roland/wpbabelreact/node_modules/@babel/parser/lib/index.js:9217:21)\\n    at Parser.parseExprOps (/home/roland/wpbabelreact/node_modules/@babel/parser/lib/index.js:9083:23)\\n    at Parser.parseMaybeConditional (/home/roland/wpbabelreact/node_modules/@babel/parser/lib/index.js:9056:23)\\n    at Parser.parseMaybeAssign (/home/roland/wpbabelreact/node_modules/@babel/parser/lib/index.js:9015:21)\\n    at Parser.parseExprListItem (/home/roland/wpbabelreact/node_modules/@babel/parser/lib/index.js:10331:18)\\n    at Parser.parseCallExpressionArguments (/home/roland/wpbabelreact/node_modules/@babel/parser/lib/index.js:9434:22)\\n    at Parser.parseSubscript (/home/roland/wpbabelreact/node_modules/@babel/parser/lib/index.js:9342:29)\\n    at Parser.parseSubscripts (/home/roland/wpbabelreact/node_modules/@babel/parser/lib/index.js:9258:19)\\n    at Parser.parseExprSubscripts (/home/roland/wpbabelreact/node_modules/@babel/parser/lib/index.js:9247:17)\\n    at Parser.parseMaybeUnary (/home/roland/wpbabelreact/node_modules/@babel/parser/lib/index.js:9217:21)\\n    at Parser.parseExprOps (/home/roland/wpbabelreact/node_modules/@babel/parser/lib/index.js:9083:23)\\n    at Parser.parseMaybeConditional (/home/roland/wpbabelreact/node_modules/@babel/parser/lib/index.js:9056:23)\\n    at Parser.parseMaybeAssign (/home/roland/wpbabelreact/node_modules/@babel/parser/lib/index.js:9015:21)\\n    at Parser.parseExpression (/home/roland/wpbabelreact/node_modules/@babel/parser/lib/index.js:8965:23)\\n    at Parser.parseStatementContent (/home/roland/wpbabelreact/node_modules/@babel/parser/lib/index.js:10819:23)\\n    at Parser.parseStatement (/home/roland/wpbabelreact/node_modules/@babel/parser/lib/index.js:10690:17)\\n    at Parser.parseBlockOrModuleBlockBody (/home/roland/wpbabelreact/node_modules/@babel/parser/lib/index.js:11266:25)\\n    at Parser.parseBlockBody (/home/roland/wpbabelreact/node_modules/@babel/parser/lib/index.js:11253:10)\\n    at Parser.parseTopLevel (/home/roland/wpbabelreact/node_modules/@babel/parser/lib/index.js:10621:10)\\n    at Parser.parse (/home/roland/wpbabelreact/node_modules/@babel/parser/lib/index.js:12131:10)\\n    at parse (/home/roland/wpbabelreact/node_modules/@babel/parser/lib/index.js:12182:38)\\n    at parser (/home/roland/wpbabelreact/node_modules/@babel/core/lib/transformation/normalize-file.js:187:34)\\n    at normalizeFile (/home/roland/wpbabelreact/node_modules/@babel/core/lib/transformation/normalize-file.js:113:11)\\n    at runSync (/home/roland/wpbabelreact/node_modules/@babel/core/lib/transformation/index.js:44:43)\\n    at runAsync (/home/roland/wpbabelreact/node_modules/@babel/core/lib/transformation/index.js:35:14)\\n    at /home/roland/wpbabelreact/node_modules/@babel/core/lib/transform.js:34:34\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });