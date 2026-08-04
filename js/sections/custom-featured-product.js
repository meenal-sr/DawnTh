const handle = "the-multi-location-snowboard";
const sectionId = "template--18522949714005__pdp_clone_cCQtR4";

const url = `/products/${handle}?section_id=${sectionId}`;
console.log(url);

fetch(url)
  .then(response => response.text())
  .then(html => {
    
  });

