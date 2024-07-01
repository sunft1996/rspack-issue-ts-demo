(function() {
var __webpack_modules__ = {
"163": (function () {
var xhr = {
    responseType: false,
    responseText: "OK",
    response: {}
};
console.log((xhr.responseType || "text") !== "text" || 0 ? { // 语句：`typeof xhr.responseText !== "string"` 被转为 0 
    binary: 1
} : 0) // 此处打印{ binary: 1 } 或 0，结果都不对；
;
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
var __webpack_exports__ = __webpack_require__("163");
})()

//# sourceMappingURL=main.js.map