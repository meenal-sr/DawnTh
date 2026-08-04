const headerButton = () =>{

const refreshButton = document.getElementById("refresh-header")
refreshButton.addEventListener('click' , async() =>{
    
    const response = await fetch(`${window.location.pathname}?sections=header`);

    
    const data = await response.json();
    const headerHtml = data.header
    console.log(headerHtml)

   
    const currentHeader = document.getElementById("empty-div");

    
    currentHeader.outerHTML = headerHtml
  
  
})

}
export default headerButton