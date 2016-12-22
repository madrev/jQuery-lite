/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const DOMNodeCollection = __webpack_require__(1);

	window.$l = function(arg) {
	  let nodeList = [];
	  if(arg instanceof HTMLElement) nodeList = [arg];
	  else nodeList = document.querySelectorAll(arg);
	  return new DOMNodeCollection(Array.from(nodeList));
	};


/***/ },
/* 1 */
/***/ function(module, exports) {

	class DOMNodeCollection {
	  constructor(array) {
	    this.elements = array;
	  }

	  html(val) {
	    if(val) this.elements.forEach(el => {el.innerHTML = val;});
	    else return this.elements[0].innerHTML;
	  }

	  empty(){
	    this.html(" ");
	  }

	  append(arg){
	    let elements = [];
	    if(arg instanceof DOMNodeCollection) elements = arg.elements;
	    else elements = [arg];
	    elements.forEach( inputEl => {
	      this.elements.forEach (collectionEl => {
	        if(typeof inputEl === 'string') collectionEl.innerHTML += inputEl;
	        else collectionEl.innerHTML += inputEl.outerHTML;
	      });
	    });
	  }
	}

	module.exports = DOMNodeCollection;


/***/ }
/******/ ]);