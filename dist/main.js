(function() {
var __webpack_modules__ = {
"657": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  a: function() { return a; }
});
var a = "a";
}),
"923": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  b: function() { return b; }
});
var b = "b";
}),
"163": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _alias_a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @alias/a */"657");
/* harmony import */var _alias_b__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @alias/b */"923");


var xhr = {
    status: 200
};
console.log((xhr || "text") !== "text" || 0);   // 不符合预期，typeof xhr !== "string" 被转为 0
console.log(_alias_a__WEBPACK_IMPORTED_MODULE_0__.a, _alias_b__WEBPACK_IMPORTED_MODULE_1__.b);
}),

}
// The module cache
 var __webpack_module_cache__ = {};
function __webpack_require__(moduleId) {
// Check if module is in cache
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== undefined) {
      return cachedModule.exports;
      }
      // Create a new module (and put it into the cache)
      var module = (__webpack_module_cache__[moduleId] = {
       exports: {}
      });
      // Execute the module function
      __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
// Return the exports of the module
 return module.exports;

}
// webpack/runtime/define_property_getters
!function() {
__webpack_require__.d = function(exports, definition) {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
}();
// webpack/runtime/has_own_property
!function() {
__webpack_require__.o = function (obj, prop) {
	return Object.prototype.hasOwnProperty.call(obj, prop);
};

}();
// webpack/runtime/make_namespace_object
!function() {
// define __esModule on exports
__webpack_require__.r = function(exports) {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};

}();
var __webpack_exports__ = __webpack_require__("163");
})()

//# sourceMappingURL=main.js.map