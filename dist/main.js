/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship-game/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship-game/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship-game/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship-game/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const shipBuilding = (__webpack_require__(/*! ./shipBuilding */ \"./src/shipBuilding.js\").shipBuilding);\n\n\nclass gameBoard{\n    constructor(gridSize) {\n        this.gridSize = gridSize;   // didn't click first to add this.grid as part of  constructor keep it in mind\n        this.grid = Array(this.gridSize)\n          .fill(null)\n          .map(() => Array(this.gridSize).fill(null));\n        this.ships = []; //didnt think of having an array of ships either before what i can do now is pop every ship if its sunken and if in last array is empty i can end the game\n        this.missedAttack = [];\n      } \n           /*I was thinking always in terms of having a div and filling it with inner text that marks the ship instead\n           of creating an array and initializing it to null and then later finding a way to create equal number of divs\n           and later populating them with these array items  */\n\n        checkLegalPlacement(length, coordinates, orientation) {\n        const x = coordinates[0];\n        const y = coordinates[1];\n        const minBoundary = [0, 0];\n        const maxBoundary = [this.gridSize - 1, this.gridSize - 1];\n      \n        switch (length) {\n            case 1:\n                if (orientation === 'horizontal') {\n                    if (y >= minBoundary[1] && y <= maxBoundary[1] &&\n                        x >= minBoundary[0] && x <= maxBoundary[0] && !this.grid[x][y]) {\n                        return true;\n                    }\n                } else if (orientation === 'vertical') {\n                    if (x >= minBoundary[0] && x <= maxBoundary[0] &&\n                        y >= minBoundary[1] && y <= maxBoundary[1] && !this.grid[x][y]) {\n                        return true;\n                    }\n                }\n                break;\n            case 2:\n            case 3:\n            case 4:\n                if (orientation === 'horizontal') {\n                    // Check for overlap in ship placement\n                    for (let i = 0; i < length; i++) {\n                        if (y + i > maxBoundary[1] || this.grid[x][y + i]) {\n                            return false; // Overlap detected or out of bounds\n                        }\n                    }\n                    return true; // No overlap detected\n                } else if (orientation === 'vertical') {\n                    // Check for overlap in ship placement\n                    for (let i = 0; i < length; i++) {\n                        if (x + i > maxBoundary[0] || this.grid[x + i][y]) {\n                            return false; // Overlap detected or out of bounds\n                        }\n                    }\n                    return true; // No overlap detected\n                }\n                break;\n            default:\n                return false;\n        }\n      \n        return false;\n    }\n        \n\n      allShipsSunken(){\n        if(this.ships.length === 0){\n          return true;\n        }\n        return false;\n      }\n\n      placeShipOnBoard(length, coordinates, orientation) {\n        if (this.checkLegalPlacement(length, coordinates, orientation)) {\n          const [x, y] = coordinates;\n          const ship = new shipBuilding(length);\n    \n          switch (orientation) {\n            case 'horizontal':\n              for (let i = 0; i < length; i++) {\n                this.grid[x][y + i] = ship;\n              }\n              break;\n            case 'vertical':\n              for (let i = 0; i < length; i++) {\n                this.grid[x + i][y] = ship;\n              }\n              break;\n          }\n    \n          this.ships.push(ship);\n          return true;\n        }\n        return false;\n      }\n      receiveAttack(attackCoordinates) {\n        const x = attackCoordinates[0];\n        const y = attackCoordinates[1];\n        let hit = false;    // this is also a nice way to switch to missing attack instead of using else block keep it in mind to use in other codes\n    \n        for (let i = 0; i < this.ships.length; i++) {\n            const ship = this.ships[i];\n            if (this.grid[x][y] === ship) {\n                if (!ship.isSunk()) {\n                    ship.shipHit();\n                    hit = true;\n                    console.log('Ship hit!');\n                    if (ship.isSunk()) {\n                        this.ships.splice(i, 1); // Remove sunken ship from ships \n                        console.log('Ship sunk!');\n                        if (this.allShipsSunken()) {\n                            console.log('Game over');\n                        }\n                    }\n                }\n            }\n        }\n    \n        if (!hit) {\n            console.log('Missed it!');\n            this.missedAttack.push(attackCoordinates);\n        }\n    }\n    \n      /* problem with my this logic is every time I am clicking on any ship it is iterating over\n      all the ships and which is making the else part of this code being executed every time */\n      // receiveAttack(attackCoordinates){\n      //   const x = attackCoordinates[0];\n      //   const y = attackCoordinates[1];\n        \n      //   for(const ship of this.ships){\n      //       if(this.grid[x][y] === ship){\n      //           if(!ship.isSunk()){\n      //               ship.shipHit();\n      //               if(ship.isSunk()){\n      //                   this.ships.pop(ship);\n      //               console.log('ship gone');\n      //               if(this.allShipsSunken()){\n      //                 console.log('game over');\n      //               }\n      //               break;\n      //               }\n      //               console.log('shi hit');\n      //               break;\n                    \n      //           }\n      //           else{\n      //               this.ships.pop(ship);\n      //               console.log('ship gone');\n      //               if(this.allShipsSunken()){\n      //                 console.log('game over');\n      //               }\n      //               break;\n      //           }\n      //       }\n      //       else{\n      //           console.log('missed it');\n      //           this.missedAttack.push(attackCoordinates);\n      //       }\n      //   }\n      // }\n}\n\nmodule.exports = { gameBoard };\n\n//# sourceURL=webpack://battleship-game/./src/gameBoard.js?");

/***/ }),

/***/ "./src/htmlGridGenerator.js":
/*!**********************************!*\
  !*** ./src/htmlGridGenerator.js ***!
  \**********************************/
/***/ ((module) => {

eval("function toggleBlurEffect(element, shouldBlur) {            // such a powerful concept to toggle classes keep it in your mind\n    if (shouldBlur) {\n        element.classList.add('blur');\n    } else {\n        element.classList.remove('blur');\n    }\n}\n\nfunction htmlGridGenerator(player, playerDiv){\n    playerDiv.innerHTML = '';\n    for (let i = 0; i < 10; i++) {\n        const gridRow = document.createElement('div');\n        gridRow.classList.add('grid-row');\n        playerDiv.appendChild(gridRow);\n        for (let j = 0; j < 10; j++) {\n            const column = document.createElement('div');\n            column.classList.add('grid-cell');\n            column.setAttribute('data-coordinates', `[${i},${j}]`);\n            if (player.gameBoard.grid[i][j] && playerDiv.id === 'playerOneDiv') {\n                column.classList.add('ship-cell');\n            }\n            // column.innerHTML = player.gameBoard.grid[i][j] ? 'S' : '';\n            if(playerDiv.id === 'playerOneDiv'){\n                toggleBlurEffect(column, false); \n            }\n            else{\n                toggleBlurEffect(column, true); \n            }\n            gridRow.appendChild(column);\n        }\n    }\n}\n\nmodule.exports = {toggleBlurEffect, htmlGridGenerator};\n\n\n//# sourceURL=webpack://battleship-game/./src/htmlGridGenerator.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _randomShipGeneration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./randomShipGeneration */ \"./src/randomShipGeneration.js\");\n/* harmony import */ var _randomShipGeneration__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_randomShipGeneration__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_player__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _htmlGridGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./htmlGridGenerator */ \"./src/htmlGridGenerator.js\");\n/* harmony import */ var _htmlGridGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_htmlGridGenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\nconst playerOne = new _player__WEBPACK_IMPORTED_MODULE_1__.player('rajat', false, 10);\nconst playerTwo = new _player__WEBPACK_IMPORTED_MODULE_1__.player('pc', true, 10);\nlet currentPlayer = playerOne;\n\nconst container = document.createElement('div');    //shifting welcome message, mainDIv and Button inside it to use flex on it to display things\ncontainer.classList.add('container');\ndocument.body.appendChild(container);\n\nconst welcomeMessage = document.createElement('div');\nwelcomeMessage.classList.add('welcome-message');\nwelcomeMessage.innerText = 'Welcome to Battleship! Click the \"Random Ship Placement\" button to start the game.';\ncontainer.appendChild(welcomeMessage);\n\nconst mainDiv = document.createElement('div');\nmainDiv.classList.add('mainDiv');\ncontainer.appendChild(mainDiv);\n\nconst btn = document.createElement('button');\nbtn.innerText = 'Random Ship Placement';\nbtn.id = 'generateShipsButton';\ncontainer.appendChild(btn);\n\nconst playerOneDiv = document.createElement('div');\nplayerOneDiv.id = 'playerOneDiv';   //added this id part only cuz of I dont want the player one to be blurred its used in htmlgrid part\nplayerOneDiv.classList.add('gameboard');\nmainDiv.appendChild(playerOneDiv);\n\nconst playerTwoDiv = document.createElement('div');\nplayerTwoDiv.id = 'playerTwoDiv';\nplayerTwoDiv.classList.add('gameboard');\nmainDiv.appendChild(playerTwoDiv);\n\n(0,_htmlGridGenerator__WEBPACK_IMPORTED_MODULE_2__.htmlGridGenerator)(playerOne, playerOneDiv);\n(0,_htmlGridGenerator__WEBPACK_IMPORTED_MODULE_2__.htmlGridGenerator)(playerTwo, playerTwoDiv);\n\nfunction computerPlay() {\n    const attackFromPc = playerOne.receiveAttack();\n    const clickedX = attackFromPc[0];\n    const clickedY = attackFromPc[1];\n    const clickedCell = playerOne.gameBoard.grid[clickedX][clickedY];\n\n    const targetCell = playerOneDiv.querySelector(`[data-coordinates=\"[${clickedX},${clickedY}]\"]`);\n    if(targetCell.innerHTML ){\n        currentPlayer = playerOne;\n        toggleTurn();\n    }\n    else{\n        if (clickedCell) {\n            targetCell.innerHTML = 'S';\n            if(playerOne.gameBoard.allShipsSunken()){\n                currentPlayer = null;\n                alert('Game Over');\n                return;                 // this return statement I could not think of to exit code when game is over\n            }\n        } else {\n            targetCell.innerHTML = 'X';\n        }\n        toggleTurn(); \n    }\n}\n\n\nbtn.addEventListener('click', () => {\n    clearGameBoard(playerOne.gameBoard);\n\n    const shipLengths = { 4: 1, 3: 2, 2: 3, 1: 4 };\n    for (const [length, count] of Object.entries(shipLengths)) {\n        for (let i = 0; i < count; i++) {\n            let placed = false;\n            while (!placed) {           // i put this code in randomship genrtor but it caused problem as gameboard wasnt defined or player in that module\n                const [shipLength, coordinates, orientation] = (0,_randomShipGeneration__WEBPACK_IMPORTED_MODULE_0__.randomShipGeneration)(Number(length));\n                placed = playerOne.gameBoard.placeShipOnBoard(shipLength, coordinates, orientation);\n            }\n        }\n    }\n    (0,_htmlGridGenerator__WEBPACK_IMPORTED_MODULE_2__.htmlGridGenerator)(playerOne, playerOneDiv);\n    console.log(playerOne.gameBoard.ships);\n\n    clearGameBoard(playerTwo.gameBoard);\n    for (const [length, count] of Object.entries(shipLengths)) {\n        for (let i = 0; i < count; i++) {\n            let placed = false;\n            while (!placed) {\n                const [shipLength, coordinates, orientation] = (0,_randomShipGeneration__WEBPACK_IMPORTED_MODULE_0__.randomShipGeneration)(Number(length));\n                placed = playerTwo.gameBoard.placeShipOnBoard(shipLength, coordinates, orientation);\n            }\n        }\n    }\n    (0,_htmlGridGenerator__WEBPACK_IMPORTED_MODULE_2__.htmlGridGenerator)(playerTwo, playerTwoDiv);\n    console.log(playerTwo.gameBoard.ships);\n});\n\nfunction toggleTurn(){\n    currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;\n    console.log(`It's now ${currentPlayer.playerName}'s turn`);\n    if (currentPlayer.isComputer) {                     // i was stuck as to how will i simulate pc's turn but this is how to do it\n        computerPlay();\n    }\n}\n\nfunction letsPlay(){\n    // playerOneDiv.addEventListener('click', (e) => {\n    //     if(currentPlayer === playerTwo){\n    //         const attackFromPc = playerOne.receiveAttack();\n    //         const clickedX = attackFromPc.x;\n    //         const clickedY = attackFromPc.y;\n    //         const clickedCell = playerOne.gameBoard.grid[clickedX][clickedY];\n    //         if(clickedCell){\n    //             // column.classList.remove('grid-cell-hidden');\n    //             // column.classList.add('grid-cell');\n    //             console.log(`Clicked on cell [${clickedX},${clickedY}]`);\n    //             e.target.innerHTML = 'S';\n    //         }\n    //         else{\n    //             console.log(playerOne.gameBoard.missedAttack);\n    //             e.target.innerHTML = 'X';\n    //         }\n    //         toggleTurn();\n    //     }\n    // })\n\n    playerTwoDiv.addEventListener('click', (e) => {\n        if(currentPlayer === playerOne){\n            if(e.target.innerHTML ){         // to give the same player chance again if clicked on same block\n                currentPlayer = playerTwo;\n                toggleTurn();\n            }\n            else{\n                (0,_htmlGridGenerator__WEBPACK_IMPORTED_MODULE_2__.toggleBlurEffect)(e.target, false);\n            const clickedCoordinates = JSON.parse(e.target.getAttribute('data-coordinates'));\n            const clickedX = clickedCoordinates[0];\n            const clickedY = clickedCoordinates[1];\n            \n            // Retrieve the ship object or null from the gameboard grid at clicked coordinates\n            const clickedCell = playerTwo.gameBoard.grid[clickedX][clickedY];\n            playerTwo.receiveAttack([clickedX, clickedY]);\n            if(clickedCell){\n                e.target.classList.add('hit-cell');\n                // column.classList.remove('grid-cell-hidden');\n                // column.classList.add('grid-cell');\n                console.log(`Clicked on cell [${clickedX},${clickedY}]`);\n                e.target.innerHTML = 'S';\n                if(playerTwo.gameBoard.allShipsSunken()){\n                    currentPlayer = null;\n                    alert('Game Over');\n                    return;                 // this return statement I could not think of to exit code when game is over\n                }\n            }\n            else{\n                e.target.classList.add('miss-cell');\n                console.log(playerTwo.gameBoard.missedAttack);\n                e.target.innerHTML = 'X';\n            }\n            // if (clickedCell) {\n            //     // Perform action here, e.g., receive attack\n            //     playerTwo.receiveAttack([clickedX, clickedY]);\n            //     // Update UI or game state as needed\n            //     console.log(`Clicked on cell [${clickedX},${clickedY}]`);\n            //     console.log('Performing attack or other action...');\n            // } else {\n            //     // Handle missed attack or invalid click if needed\n            //     playerTwo.;\n            // } \n            toggleTurn();\n            }\n            \n        }\n    })\n\n    playerOneDiv.addEventListener('click', () => {          //so that when the game starts button gets disabled\n       btn.disabled = true;\n    });\n    playerTwoDiv.addEventListener('click', () => {\n       btn.disabled = true;\n    });\n}\n\nletsPlay();\n\n\n\nfunction clearGameBoard(gameBoard) {            // I was confused as to how to clear the previous ships when the button is clicked this is how I had to\n    gameBoard.grid = Array.from({ length: 10 }, () => Array(10).fill(null));\n    gameBoard.ships = [];\n    gameBoard.missedAttack = [];\n}\n\n\n\n\n\n//# sourceURL=webpack://battleship-game/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const gameBoard = (__webpack_require__(/*! ./gameBoard */ \"./src/gameBoard.js\").gameBoard);\n\nclass player{\n    constructor(name, isComputer, gridSize){\n        this.playerName = name;\n        this.isComputer = isComputer;       //its  a nice trick to differentiate between a computer and a human based on true false flag of it\n        this.gameBoard = new gameBoard(gridSize);\n    }\n\n    placeShip(length, coordinates, orientation) {\n         this.gameBoard.placeShipOnBoard(length, coordinates, orientation);\n    }\n\n    randomNumberGenerate(){\n        var randomNumber = Math.floor(Math.random() * 10);\n        return randomNumber;\n    }\n\n    receiveAttack(attackCoordinates){\n        if(!this.isComputer){\n            const x = this.randomNumberGenerate();\n            const y = this.randomNumberGenerate();\n            this.gameBoard.receiveAttack([x, y]);\n            return [x, y];\n        }\n        else{\n            this.gameBoard.receiveAttack(attackCoordinates);\n        }\n    }\n\n\n}\nmodule.exports = {player};\n\n//# sourceURL=webpack://battleship-game/./src/player.js?");

/***/ }),

/***/ "./src/randomShipGeneration.js":
/*!*************************************!*\
  !*** ./src/randomShipGeneration.js ***!
  \*************************************/
/***/ ((module) => {

eval("// randomShipGeneration.js\nfunction randomNumberGenerate(maxNum){\n    return Math.floor(Math.random() * maxNum);\n}\n\nfunction randomShipGeneration(length) {\n    const orientations = ['horizontal', 'vertical'];\n    const orientation = orientations[randomNumberGenerate(2)];\n    const gameBoardSize = 10; // Assuming the game board is 10x10\n\n    if (length >= 1 && length <= 4) {\n        let x, y;\n\n        if (orientation === 'horizontal') {\n            x = randomNumberGenerate(gameBoardSize);\n            y = randomNumberGenerate(gameBoardSize - length + 1);\n        } else {\n            x = randomNumberGenerate(gameBoardSize - length + 1);\n            y = randomNumberGenerate(gameBoardSize);\n        }\n\n        return [length, [x, y], orientation];\n    }\n\n    return null; // If the length is not valid, return null\n}\n\nmodule.exports = { randomShipGeneration };\n\n\n//# sourceURL=webpack://battleship-game/./src/randomShipGeneration.js?");

/***/ }),

/***/ "./src/shipBuilding.js":
/*!*****************************!*\
  !*** ./src/shipBuilding.js ***!
  \*****************************/
/***/ ((module) => {

eval("class shipBuilding {\n    constructor(length){\n        this.length = length;\n        this.timesHit = 0;\n        this.sunkStatus = false;\n    }\n\n    shipHit() { //confused whether to add the condition for hit++ only if its less than ship size or leave it to be handled by other modules\n        if (this.timesHit < this.length) { // added the if condition\n            this.timesHit++;\n          }\n          this.isSunk(); // didnt think of calling it in shipHit before\n    }\n    \n    isSunk() {\n        if (this.timesHit >= this.length) {\n            this.sunkStatus = true;\n          }\n        return this.sunkStatus;\n    }\n}\n\nmodule.exports = {shipBuilding};\n\n//# sourceURL=webpack://battleship-game/./src/shipBuilding.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;