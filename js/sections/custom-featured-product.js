const section = document.querySelector("#data-custom-pdp");
const selects = section.querySelectorAll("select");
const handle = section.dataset.productHandle;
const sectionId = section.dataset.sectionId;



selects.forEach(select => {
  select.addEventListener("change", () => {

    const optionValueIds = [...selects].map(select => {
  return select.selectedOptions[0].dataset.optionValueId;
});

const form = document.querySelector("#custom-product-form");

form.addEventListener("submit", async function(event) {
  event.preventDefault();

  const variantId = form.querySelector('input[name="id"]').value;

  console.log("Variant being added:", variantId);

  const response = await fetch(
    window.Shopify.routes.root + "cart/add.js",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        items: [
          {
            id: variantId,
            quantity: 1
          }
        ]
      })
    }
  );

  const data = await response.json();

  console.log("Cart response:", data);
});

const url =
  `/products/${handle}?section_id=${sectionId}&option_values=${optionValueIds.join(",")}`;

fetch(url)
  .then(response => response.text())
  .then(html => {

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const variantId = doc.querySelector('input[name="id"]').value;
    document.querySelector('#data-custom-pdp input[name="id"]').value
    const variantInput = document.querySelector(
      '#data-custom-pdp input[name="id"]'
    );

    variantInput.value = variantId;

    const newImage = doc.querySelector(".product-image");
    const currentImage = document.querySelector(
      "#data-custom-pdp .product-image"
    );
    
    currentImage.src = newImage.src;


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

