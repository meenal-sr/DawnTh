const section = document.querySelector("#data-custom-pdp");
const selects = section.querySelectorAll("select");
const handle = section.dataset.productHandle;
const sectionId = section.dataset.sectionId;



selects.forEach(select => {
  select.addEventListener("change", () => {

    const optionValueIds = [...selects].map(select => {
  return select.selectedOptions[0].dataset.optionValueId;
});

const url =
  `/products/${handle}?section_id=${sectionId}&option_values=${optionValueIds.join(",")}`;

fetch(url)
  .then(response => response.text())
  .then(html => {

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    const variantId = doc.querySelector('input[name="id"]').value;

    const newUrl = `${window.location.pathname}?variant=${variantId}`;
    console.log("New URL:", newUrl);
    window.history.replaceState({}, "", newUrl);
    const newPrice = doc.querySelector(".price");
    const currentPrice = document.querySelector(".price");
    

    currentPrice.innerHTML = newPrice.innerHTML;

        // Get the updated section from the returned HTML
        

      })
  

  });
});

