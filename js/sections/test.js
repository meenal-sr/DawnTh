

async function getAllSpecs(url) {
    
  let nextUrl = url;
  let allSpecs = [];
 
  //console.log('started')

  while (nextUrl) {
    //console.log("Fetching:", nextUrl);
    const response = await fetch(nextUrl);
    const json = await response.json();

    allSpecs = allSpecs.concat(json.item_key);
    nextUrl = json.next_url;
    
  }

  return allSpecs;
}

async function fetchSpecs() {
  const urls = [
    "/products/the-multi-managed-snowboard?view=specs-frst",
    "/products/the-multi-managed-snowboard?view=specs-secnd",
    "/products/the-multi-managed-snowboard?view=specs-third"
  ];
  let data=  ""
  

  try {
    const results = await Promise.all(
      urls.map(url => getAllSpecs(url))
    );

    // Merge all arrays into one
    const allSpecs = results.flat();
  
    for (let spec of allSpecs) {
        
        
        let value = "";

  if (spec.spec_key?.title) {
    value = spec.spec_key.title;
  } else if (spec.spec_key?.name) {
    value = spec.spec_key.name;
  } else if (spec.spec_key?.spec_41) {
    value = spec.spec_key.spec_41;
  }
  data += `<div><strong>
    ${value}
    </strong></div>`
          
    
    }
    

    console.log("data", data)

    
 
 const container = document.querySelector("[data-spec-list]");
 container.innerHTML = data; 

    return allSpecs;
  } catch (error) {
    console.error("Error fetching specs:", error);
  }
}

fetchSpecs();


export default  getAllSpecs;