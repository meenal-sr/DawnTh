/******/ (() => { // webpackBootstrap
/*!************************************************!*\
  !*** ./js/sections/custom-featured-product.js ***!
  \************************************************/
var section = document.querySelector("#data-custom-pdp");
var selects = section.querySelectorAll("select");
var handle = section.dataset.productHandle;
var sectionId = section.dataset.sectionId;
selects.forEach(select => {
  select.addEventListener("change", () => {
    var optionValueIds = [...selects].map(select => {
      return select.selectedOptions[0].dataset.optionValueId;
    });
    var url = "/products/".concat(handle, "?section_id=").concat(sectionId, "&option_values=").concat(optionValueIds.join(","));
    fetch(url).then(response => response.text()).then(html => {
      var parser = new DOMParser();
      var doc = parser.parseFromString(html, "text/html");
      var variantId = doc.querySelector('input[name="id"]').value;
      var newUrl = "".concat(window.location.pathname, "?variant=").concat(variantId);
      console.log("New URL:", newUrl);
      window.history.replaceState({}, "", newUrl);
      var newPrice = doc.querySelector(".price");
      var currentPrice = document.querySelector(".price");
      currentPrice.innerHTML = newPrice.innerHTML;

      // Get the updated section from the returned HTML
    });
  });
});
/******/ })()
;