"use strict";
(self["webpackChunkshoptrade_Shopify_Development"] = self["webpackChunkshoptrade_Shopify_Development"] || []).push([["shared"],{

/***/ "./js/sections/test.js"
/*!*****************************!*\
  !*** ./js/sections/test.js ***!
  \*****************************/
(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");

function getAllSpecs(_x) {
  return _getAllSpecs.apply(this, arguments);
}
function _getAllSpecs() {
  _getAllSpecs = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (url) {
    var nextUrl = url;
    var allSpecs = [];

    //console.log('started')

    while (nextUrl) {
      //console.log("Fetching:", nextUrl);
      var response = yield fetch(nextUrl);
      var json = yield response.json();
      allSpecs = allSpecs.concat(json.item_key);
      nextUrl = json.next_url;
    }
    return allSpecs;
  });
  return _getAllSpecs.apply(this, arguments);
}
function fetchSpecs() {
  return _fetchSpecs.apply(this, arguments);
}
function _fetchSpecs() {
  _fetchSpecs = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
    var urls = ["/products/the-multi-managed-snowboard?view=specs-frst", "/products/the-multi-managed-snowboard?view=specs-secnd", "/products/the-multi-managed-snowboard?view=specs-third"];
    var data = "";
    try {
      var results = yield Promise.all(urls.map(url => getAllSpecs(url)));

      // Merge all arrays into one
      var allSpecs = results.flat();
      for (var spec of allSpecs) {
        var _spec$spec_key, _spec$spec_key2, _spec$spec_key3;
        var value = "";
        if ((_spec$spec_key = spec.spec_key) !== null && _spec$spec_key !== void 0 && _spec$spec_key.title) {
          value = spec.spec_key.title;
        } else if ((_spec$spec_key2 = spec.spec_key) !== null && _spec$spec_key2 !== void 0 && _spec$spec_key2.name) {
          value = spec.spec_key.name;
        } else if ((_spec$spec_key3 = spec.spec_key) !== null && _spec$spec_key3 !== void 0 && _spec$spec_key3.spec_41) {
          value = spec.spec_key.spec_41;
        }
        data += "<div><strong>\n    ".concat(value, "\n    </strong></div>");
      }
      console.log("data", data);
      var container = document.querySelector("[data-spec-list]");
      container.innerHTML = data;
      return allSpecs;
    } catch (error) {
      console.error("Error fetching specs:", error);
    }
  });
  return _fetchSpecs.apply(this, arguments);
}
fetchSpecs();
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (getAllSpecs);

/***/ }

}]);