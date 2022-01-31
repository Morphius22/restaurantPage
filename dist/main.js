/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "h1, h2 {\n    text-align: center;\n}\n\n#content {\n    display: grid;\n    grid-template-rows: 50px auto;\n    justify-content: center;\n}\n\n#nav {\n    display: flex;\n    gap: 10px;\n    justify-content: center;\n}\n\nbutton {\n    width: 75px;\n    height: 40px;\n}\n\n#header, #mustTry, #hours, #location, #appetizers, #entrees, #dessert, #contactSection {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: rgb(252, 181, 0);\n    padding: 20px 20px;\n    margin-top: 20px;\n    border-radius: 15px;\n    color: white\n}\n\n#location {\n    margin-bottom: 30px;\n}\n\np {\n    margin-top: 5px;\n}\n\nbody {\n    background-color: rgb(48, 48, 48);\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,SAAS;IACT,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kCAAkC;IAClC,kBAAkB;IAClB,gBAAgB;IAChB,mBAAmB;IACnB;AACJ;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iCAAiC;AACrC","sourcesContent":["h1, h2 {\n    text-align: center;\n}\n\n#content {\n    display: grid;\n    grid-template-rows: 50px auto;\n    justify-content: center;\n}\n\n#nav {\n    display: flex;\n    gap: 10px;\n    justify-content: center;\n}\n\nbutton {\n    width: 75px;\n    height: 40px;\n}\n\n#header, #mustTry, #hours, #location, #appetizers, #entrees, #dessert, #contactSection {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: rgb(252, 181, 0);\n    padding: 20px 20px;\n    margin-top: 20px;\n    border-radius: 15px;\n    color: white\n}\n\n#location {\n    margin-bottom: 30px;\n}\n\np {\n    margin-top: 5px;\n}\n\nbody {\n    background-color: rgb(48, 48, 48);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/utils/contact-load.js":
/*!***********************************!*\
  !*** ./src/utils/contact-load.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactLoad": () => (/* binding */ contactLoad)
/* harmony export */ });
/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-element */ "./src/utils/create-element.js");
/* harmony import */ var _nav_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-buttons */ "./src/utils/nav-buttons.js");



function contactLoad () {

    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', '#content','container')

    ;(0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', '#container', 'nav')
    ;(0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', '#nav', 'home', 'home');
    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', '#nav', 'menu', 'menu');
    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', '#nav', 'contact', 'contact');

    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', '#container', 'contactSection');
    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('h3', '#contactSection', '', 'Contact Info');
    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('p','#contactSection', '', 'Phone number: 1234567890');
    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('p','#contactSection', '', 'Email: info@dumplings.com');
    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('p','#contactSection', '', 'Address: 1234 dumpling way, dumplingville, NC, 994509');

    (0,_nav_buttons__WEBPACK_IMPORTED_MODULE_1__.navButtonClicks)();
}

/***/ }),

/***/ "./src/utils/create-element.js":
/*!*************************************!*\
  !*** ./src/utils/create-element.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement)
/* harmony export */ });
function createElement (elementToAdd, parentIdentifier, id, content) {
    let parent = document.querySelector(parentIdentifier);
    let element = document.createElement(elementToAdd);
    element.setAttribute('id', id)
    element.textContent = content
    parent.appendChild(element);
}

/***/ }),

/***/ "./src/utils/erase-dom.js":
/*!********************************!*\
  !*** ./src/utils/erase-dom.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eraseDom": () => (/* binding */ eraseDom)
/* harmony export */ });
function eraseDom () {
    document.querySelectorAll('#container').forEach(item => item.remove());
};


/***/ }),

/***/ "./src/utils/initial-load.js":
/*!***********************************!*\
  !*** ./src/utils/initial-load.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialLoad": () => (/* binding */ initialLoad)
/* harmony export */ });
/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-element */ "./src/utils/create-element.js");
/* harmony import */ var _nav_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-buttons */ "./src/utils/nav-buttons.js");



function initialLoad () {
    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', '#content','container')

    ;(0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', '#container', 'nav')
    ;(0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', '#nav', 'home', 'home');
    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', '#nav', 'menu', 'menu');
    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', '#nav', 'contact', 'contact');

    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', '#container', 'header');
    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('h1', '#header','', 'Dumpling Hours');
    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('h1', '#header','', 'Walnut Creeks Best Dim Sum');

    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', '#container', 'mustTry');
    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('h3', '#mustTry','', 'Must Try Items');
    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', '#mustTry','', 'Juicy Pan Fried Pork Buns');
    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', '#mustTry','', 'Garlic String Beans');
    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', '#mustTry','', 'Spicy Xia Long Bao');

    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', '#container', 'hours');
    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('h3', '#hours','', 'Hours');
    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', '#hours','', 'Monday: 12pm - 9pm');
    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', '#hours','', 'Tuesday: 12pm - 9pm');
    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', '#hours','', 'Wednesday: 12pm - 9pm');
    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', '#hours','', 'Thursday: 12pm - 9pm');
    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', '#hours','', 'Friday: 12pm - 9pm');
    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', '#hours','', 'Saturday: 12pm - 9pm');
    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', '#hours','', 'Sunday: 12pm - 9pm');

    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', '#container', 'location');
    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('h3', '#location','', 'Location');
    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', '#location','', '100 best dumpling shop, Walnut Creek, CA');

    (0,_nav_buttons__WEBPACK_IMPORTED_MODULE_1__.navButtonClicks)();
}


/***/ }),

/***/ "./src/utils/menu-load.js":
/*!********************************!*\
  !*** ./src/utils/menu-load.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuLoad": () => (/* binding */ menuLoad)
/* harmony export */ });
/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-element */ "./src/utils/create-element.js");
/* harmony import */ var _nav_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-buttons */ "./src/utils/nav-buttons.js");



function menuLoad () {

    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', '#content','container')

    ;(0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', '#container', 'nav')
    ;(0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', '#nav', 'home', 'home');
    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', '#nav', 'menu', 'menu');
    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', '#nav', 'contact', 'contact');

    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', '#container', 'appetizers');
    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('h3', '#appetizers', '', 'Appetizers');
    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('p','#appetizers', '', 'Garlic String Beans');
    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('p','#appetizers', '', 'Scallion Pancakes');
    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('p','#appetizers', '', 'Ox Tail');
    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('p','#appetizers', '', 'Fried Okra');

    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', '#container', 'entrees');
    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('h3', '#entrees', '', 'Entrees');
    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('p','#entrees', '', 'Juicy Pan Fried Pork Buns');
    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('p','#entrees', '', 'Pork Xia Long Bao');
    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('p','#entrees', '', 'Spicy Pork Xia Long Bao');
    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('p','#entrees', '', 'Scallion Noodles');

    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', '#container', 'dessert');
    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('h3', '#dessert', '', 'Desserts');
    (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('p','#dessert', '', 'Hit the gym and do some snatches! Work off those dumplings');

    (0,_nav_buttons__WEBPACK_IMPORTED_MODULE_1__.navButtonClicks)();

}

/***/ }),

/***/ "./src/utils/nav-buttons.js":
/*!**********************************!*\
  !*** ./src/utils/nav-buttons.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navButtonClicks": () => (/* binding */ navButtonClicks)
/* harmony export */ });
/* harmony import */ var _erase_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./erase-dom */ "./src/utils/erase-dom.js");
/* harmony import */ var _initial_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initial-load */ "./src/utils/initial-load.js");
/* harmony import */ var _contact_load__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-load */ "./src/utils/contact-load.js");
/* harmony import */ var _menu_load__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-load */ "./src/utils/menu-load.js");





function navButtonClicks () {
    let homeButton = document.querySelector('#home');
    let menuButton = document.querySelector('#menu');
    let contactButton = document.querySelector('#contact');

    contactButton.addEventListener('click', (e) => {
        (0,_erase_dom__WEBPACK_IMPORTED_MODULE_0__.eraseDom)();
        (0,_contact_load__WEBPACK_IMPORTED_MODULE_2__.contactLoad)();
    });

    menuButton.addEventListener('click', (e) => {
        (0,_erase_dom__WEBPACK_IMPORTED_MODULE_0__.eraseDom)();
        (0,_menu_load__WEBPACK_IMPORTED_MODULE_3__.menuLoad)();
    });

    homeButton.addEventListener('click', (e) => {
        (0,_erase_dom__WEBPACK_IMPORTED_MODULE_0__.eraseDom)();
        (0,_initial_load__WEBPACK_IMPORTED_MODULE_1__.initialLoad)();
    });
}


/***/ }),

/***/ "./src/assets/dumplings.jpeg":
/*!***********************************!*\
  !*** ./src/assets/dumplings.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "24c379e290dfc0e94edc.jpeg";

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
/******/ 			id: moduleId,
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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_initial_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/initial-load */ "./src/utils/initial-load.js");
/* harmony import */ var _utils_menu_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/menu-load */ "./src/utils/menu-load.js");
/* harmony import */ var _utils_contact_load__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/contact-load */ "./src/utils/contact-load.js");
/* harmony import */ var _utils_nav_buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/nav-buttons */ "./src/utils/nav-buttons.js");
/* harmony import */ var _assets_dumplings_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/dumplings.jpeg */ "./src/assets/dumplings.jpeg");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");







(0,_utils_initial_load__WEBPACK_IMPORTED_MODULE_0__.initialLoad)();
(0,_utils_nav_buttons__WEBPACK_IMPORTED_MODULE_3__.navButtonClicks)();

let container = document.querySelector('#content');

// let image = document.createElement('img');
// image.src = './assets/dumplings.jpeg';

const myIcon = new Image();
myIcon.src = _assets_dumplings_jpeg__WEBPACK_IMPORTED_MODULE_4__;

container.appendChild(myIcon);

// container.appendChild(image);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7O1VDeEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FpRDtBQUNQO0FBQ007QUFDRztBQUNKO0FBQzFCOztBQUVyQixnRUFBVztBQUNYLG1FQUFlOztBQUVmOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLG1EQUFTOztBQUV0Qjs7QUFFQSxnQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy91dGlscy9jb250YWN0LWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3V0aWxzL2NyZWF0ZS1lbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy91dGlscy9lcmFzZS1kb20uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3V0aWxzL2luaXRpYWwtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdXRpbHMvbWVudS1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy91dGlscy9uYXYtYnV0dG9ucy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImgxLCBoMiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggYXV0bztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNuYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICB3aWR0aDogNzVweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4jaGVhZGVyLCAjbXVzdFRyeSwgI2hvdXJzLCAjbG9jYXRpb24sICNhcHBldGl6ZXJzLCAjZW50cmVlcywgI2Rlc3NlcnQsICNjb250YWN0U2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTIsIDE4MSwgMCk7XFxuICAgIHBhZGRpbmc6IDIwcHggMjBweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgY29sb3I6IHdoaXRlXFxufVxcblxcbiNsb2NhdGlvbiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbnAge1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsIDQ4LCA0OCk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImgxLCBoMiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggYXV0bztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNuYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICB3aWR0aDogNzVweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4jaGVhZGVyLCAjbXVzdFRyeSwgI2hvdXJzLCAjbG9jYXRpb24sICNhcHBldGl6ZXJzLCAjZW50cmVlcywgI2Rlc3NlcnQsICNjb250YWN0U2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTIsIDE4MSwgMCk7XFxuICAgIHBhZGRpbmc6IDIwcHggMjBweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgY29sb3I6IHdoaXRlXFxufVxcblxcbiNsb2NhdGlvbiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbnAge1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsIDQ4LCA0OCk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge2NyZWF0ZUVsZW1lbnR9IGZyb20gXCIuL2NyZWF0ZS1lbGVtZW50XCJcbmltcG9ydCB7bmF2QnV0dG9uQ2xpY2tzfSBmcm9tIFwiLi9uYXYtYnV0dG9uc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY29udGFjdExvYWQgKCkge1xuXG4gICAgY3JlYXRlRWxlbWVudCgnZGl2JywgJyNjb250ZW50JywnY29udGFpbmVyJylcblxuICAgIGNyZWF0ZUVsZW1lbnQoJ2RpdicsICcjY29udGFpbmVyJywgJ25hdicpXG4gICAgY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgJyNuYXYnLCAnaG9tZScsICdob21lJyk7XG4gICAgY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgJyNuYXYnLCAnbWVudScsICdtZW51Jyk7XG4gICAgY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgJyNuYXYnLCAnY29udGFjdCcsICdjb250YWN0Jyk7XG5cbiAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCAnI2NvbnRhaW5lcicsICdjb250YWN0U2VjdGlvbicpO1xuICAgIGNyZWF0ZUVsZW1lbnQoJ2gzJywgJyNjb250YWN0U2VjdGlvbicsICcnLCAnQ29udGFjdCBJbmZvJyk7XG4gICAgY3JlYXRlRWxlbWVudCgncCcsJyNjb250YWN0U2VjdGlvbicsICcnLCAnUGhvbmUgbnVtYmVyOiAxMjM0NTY3ODkwJyk7XG4gICAgY3JlYXRlRWxlbWVudCgncCcsJyNjb250YWN0U2VjdGlvbicsICcnLCAnRW1haWw6IGluZm9AZHVtcGxpbmdzLmNvbScpO1xuICAgIGNyZWF0ZUVsZW1lbnQoJ3AnLCcjY29udGFjdFNlY3Rpb24nLCAnJywgJ0FkZHJlc3M6IDEyMzQgZHVtcGxpbmcgd2F5LCBkdW1wbGluZ3ZpbGxlLCBOQywgOTk0NTA5Jyk7XG5cbiAgICBuYXZCdXR0b25DbGlja3MoKTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCAoZWxlbWVudFRvQWRkLCBwYXJlbnRJZGVudGlmaWVyLCBpZCwgY29udGVudCkge1xuICAgIGxldCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmVudElkZW50aWZpZXIpO1xuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50VG9BZGQpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGlkKVxuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xufSIsImV4cG9ydCBmdW5jdGlvbiBlcmFzZURvbSAoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NvbnRhaW5lcicpLmZvckVhY2goaXRlbSA9PiBpdGVtLnJlbW92ZSgpKTtcbn07XG4iLCJpbXBvcnQge2NyZWF0ZUVsZW1lbnR9IGZyb20gXCIuL2NyZWF0ZS1lbGVtZW50XCI7XG5pbXBvcnQge25hdkJ1dHRvbkNsaWNrc30gZnJvbSBcIi4vbmF2LWJ1dHRvbnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxMb2FkICgpIHtcbiAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCAnI2NvbnRlbnQnLCdjb250YWluZXInKVxuXG4gICAgY3JlYXRlRWxlbWVudCgnZGl2JywgJyNjb250YWluZXInLCAnbmF2JylcbiAgICBjcmVhdGVFbGVtZW50KCdidXR0b24nLCAnI25hdicsICdob21lJywgJ2hvbWUnKTtcbiAgICBjcmVhdGVFbGVtZW50KCdidXR0b24nLCAnI25hdicsICdtZW51JywgJ21lbnUnKTtcbiAgICBjcmVhdGVFbGVtZW50KCdidXR0b24nLCAnI25hdicsICdjb250YWN0JywgJ2NvbnRhY3QnKTtcblxuICAgIGNyZWF0ZUVsZW1lbnQoJ2RpdicsICcjY29udGFpbmVyJywgJ2hlYWRlcicpO1xuICAgIGNyZWF0ZUVsZW1lbnQoJ2gxJywgJyNoZWFkZXInLCcnLCAnRHVtcGxpbmcgSG91cnMnKTtcbiAgICBjcmVhdGVFbGVtZW50KCdoMScsICcjaGVhZGVyJywnJywgJ1dhbG51dCBDcmVla3MgQmVzdCBEaW0gU3VtJyk7XG5cbiAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCAnI2NvbnRhaW5lcicsICdtdXN0VHJ5Jyk7XG4gICAgY3JlYXRlRWxlbWVudCgnaDMnLCAnI211c3RUcnknLCcnLCAnTXVzdCBUcnkgSXRlbXMnKTtcbiAgICBjcmVhdGVFbGVtZW50KCdwJywgJyNtdXN0VHJ5JywnJywgJ0p1aWN5IFBhbiBGcmllZCBQb3JrIEJ1bnMnKTtcbiAgICBjcmVhdGVFbGVtZW50KCdwJywgJyNtdXN0VHJ5JywnJywgJ0dhcmxpYyBTdHJpbmcgQmVhbnMnKTtcbiAgICBjcmVhdGVFbGVtZW50KCdwJywgJyNtdXN0VHJ5JywnJywgJ1NwaWN5IFhpYSBMb25nIEJhbycpO1xuXG4gICAgY3JlYXRlRWxlbWVudCgnZGl2JywgJyNjb250YWluZXInLCAnaG91cnMnKTtcbiAgICBjcmVhdGVFbGVtZW50KCdoMycsICcjaG91cnMnLCcnLCAnSG91cnMnKTtcbiAgICBjcmVhdGVFbGVtZW50KCdwJywgJyNob3VycycsJycsICdNb25kYXk6IDEycG0gLSA5cG0nKTtcbiAgICBjcmVhdGVFbGVtZW50KCdwJywgJyNob3VycycsJycsICdUdWVzZGF5OiAxMnBtIC0gOXBtJyk7XG4gICAgY3JlYXRlRWxlbWVudCgncCcsICcjaG91cnMnLCcnLCAnV2VkbmVzZGF5OiAxMnBtIC0gOXBtJyk7XG4gICAgY3JlYXRlRWxlbWVudCgncCcsICcjaG91cnMnLCcnLCAnVGh1cnNkYXk6IDEycG0gLSA5cG0nKTtcbiAgICBjcmVhdGVFbGVtZW50KCdwJywgJyNob3VycycsJycsICdGcmlkYXk6IDEycG0gLSA5cG0nKTtcbiAgICBjcmVhdGVFbGVtZW50KCdwJywgJyNob3VycycsJycsICdTYXR1cmRheTogMTJwbSAtIDlwbScpO1xuICAgIGNyZWF0ZUVsZW1lbnQoJ3AnLCAnI2hvdXJzJywnJywgJ1N1bmRheTogMTJwbSAtIDlwbScpO1xuXG4gICAgY3JlYXRlRWxlbWVudCgnZGl2JywgJyNjb250YWluZXInLCAnbG9jYXRpb24nKTtcbiAgICBjcmVhdGVFbGVtZW50KCdoMycsICcjbG9jYXRpb24nLCcnLCAnTG9jYXRpb24nKTtcbiAgICBjcmVhdGVFbGVtZW50KCdwJywgJyNsb2NhdGlvbicsJycsICcxMDAgYmVzdCBkdW1wbGluZyBzaG9wLCBXYWxudXQgQ3JlZWssIENBJyk7XG5cbiAgICBuYXZCdXR0b25DbGlja3MoKTtcbn1cbiIsImltcG9ydCB7Y3JlYXRlRWxlbWVudH0gZnJvbSBcIi4vY3JlYXRlLWVsZW1lbnRcIlxuaW1wb3J0IHtuYXZCdXR0b25DbGlja3N9IGZyb20gXCIuL25hdi1idXR0b25zXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtZW51TG9hZCAoKSB7XG5cbiAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCAnI2NvbnRlbnQnLCdjb250YWluZXInKVxuXG4gICAgY3JlYXRlRWxlbWVudCgnZGl2JywgJyNjb250YWluZXInLCAnbmF2JylcbiAgICBjcmVhdGVFbGVtZW50KCdidXR0b24nLCAnI25hdicsICdob21lJywgJ2hvbWUnKTtcbiAgICBjcmVhdGVFbGVtZW50KCdidXR0b24nLCAnI25hdicsICdtZW51JywgJ21lbnUnKTtcbiAgICBjcmVhdGVFbGVtZW50KCdidXR0b24nLCAnI25hdicsICdjb250YWN0JywgJ2NvbnRhY3QnKTtcblxuICAgIGNyZWF0ZUVsZW1lbnQoJ2RpdicsICcjY29udGFpbmVyJywgJ2FwcGV0aXplcnMnKTtcbiAgICBjcmVhdGVFbGVtZW50KCdoMycsICcjYXBwZXRpemVycycsICcnLCAnQXBwZXRpemVycycpO1xuICAgIGNyZWF0ZUVsZW1lbnQoJ3AnLCcjYXBwZXRpemVycycsICcnLCAnR2FybGljIFN0cmluZyBCZWFucycpO1xuICAgIGNyZWF0ZUVsZW1lbnQoJ3AnLCcjYXBwZXRpemVycycsICcnLCAnU2NhbGxpb24gUGFuY2FrZXMnKTtcbiAgICBjcmVhdGVFbGVtZW50KCdwJywnI2FwcGV0aXplcnMnLCAnJywgJ094IFRhaWwnKTtcbiAgICBjcmVhdGVFbGVtZW50KCdwJywnI2FwcGV0aXplcnMnLCAnJywgJ0ZyaWVkIE9rcmEnKTtcblxuICAgIGNyZWF0ZUVsZW1lbnQoJ2RpdicsICcjY29udGFpbmVyJywgJ2VudHJlZXMnKTtcbiAgICBjcmVhdGVFbGVtZW50KCdoMycsICcjZW50cmVlcycsICcnLCAnRW50cmVlcycpO1xuICAgIGNyZWF0ZUVsZW1lbnQoJ3AnLCcjZW50cmVlcycsICcnLCAnSnVpY3kgUGFuIEZyaWVkIFBvcmsgQnVucycpO1xuICAgIGNyZWF0ZUVsZW1lbnQoJ3AnLCcjZW50cmVlcycsICcnLCAnUG9yayBYaWEgTG9uZyBCYW8nKTtcbiAgICBjcmVhdGVFbGVtZW50KCdwJywnI2VudHJlZXMnLCAnJywgJ1NwaWN5IFBvcmsgWGlhIExvbmcgQmFvJyk7XG4gICAgY3JlYXRlRWxlbWVudCgncCcsJyNlbnRyZWVzJywgJycsICdTY2FsbGlvbiBOb29kbGVzJyk7XG5cbiAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCAnI2NvbnRhaW5lcicsICdkZXNzZXJ0Jyk7XG4gICAgY3JlYXRlRWxlbWVudCgnaDMnLCAnI2Rlc3NlcnQnLCAnJywgJ0Rlc3NlcnRzJyk7XG4gICAgY3JlYXRlRWxlbWVudCgncCcsJyNkZXNzZXJ0JywgJycsICdIaXQgdGhlIGd5bSBhbmQgZG8gc29tZSBzbmF0Y2hlcyEgV29yayBvZmYgdGhvc2UgZHVtcGxpbmdzJyk7XG5cbiAgICBuYXZCdXR0b25DbGlja3MoKTtcblxufSIsImltcG9ydCB7ZXJhc2VEb219IGZyb20gXCIuL2VyYXNlLWRvbVwiXG5pbXBvcnQge2luaXRpYWxMb2FkfSBmcm9tIFwiLi9pbml0aWFsLWxvYWRcIjtcbmltcG9ydCB7Y29udGFjdExvYWR9IGZyb20gXCIuL2NvbnRhY3QtbG9hZFwiXG5pbXBvcnQge21lbnVMb2FkfSBmcm9tIFwiLi9tZW51LWxvYWRcIlxuXG5leHBvcnQgZnVuY3Rpb24gbmF2QnV0dG9uQ2xpY2tzICgpIHtcbiAgICBsZXQgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lJyk7XG4gICAgbGV0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudScpO1xuICAgIGxldCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3QnKTtcblxuICAgIGNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlcmFzZURvbSgpO1xuICAgICAgICBjb250YWN0TG9hZCgpO1xuICAgIH0pO1xuXG4gICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGVyYXNlRG9tKCk7XG4gICAgICAgIG1lbnVMb2FkKCk7XG4gICAgfSk7XG5cbiAgICBob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZXJhc2VEb20oKTtcbiAgICAgICAgaW5pdGlhbExvYWQoKTtcbiAgICB9KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjsiLCJpbXBvcnQge2luaXRpYWxMb2FkfSBmcm9tIFwiLi91dGlscy9pbml0aWFsLWxvYWRcIjtcbmltcG9ydCB7bWVudUxvYWR9IGZyb20gXCIuL3V0aWxzL21lbnUtbG9hZFwiXG5pbXBvcnQge2NvbnRhY3RMb2FkfSBmcm9tIFwiLi91dGlscy9jb250YWN0LWxvYWRcIlxuaW1wb3J0IHtuYXZCdXR0b25DbGlja3N9IGZyb20gXCIuL3V0aWxzL25hdi1idXR0b25zXCJcbmltcG9ydCBkdW1wbGluZ3MgZnJvbSBcIi4vYXNzZXRzL2R1bXBsaW5ncy5qcGVnXCJcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiXG5cbmluaXRpYWxMb2FkKCk7XG5uYXZCdXR0b25DbGlja3MoKTtcblxubGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbi8vIGxldCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuLy8gaW1hZ2Uuc3JjID0gJy4vYXNzZXRzL2R1bXBsaW5ncy5qcGVnJztcblxuY29uc3QgbXlJY29uID0gbmV3IEltYWdlKCk7XG5teUljb24uc3JjID0gZHVtcGxpbmdzO1xuXG5jb250YWluZXIuYXBwZW5kQ2hpbGQobXlJY29uKTtcblxuLy8gY29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=