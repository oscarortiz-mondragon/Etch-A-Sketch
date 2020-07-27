let container = document.querySelector("#container")
let divCount = container.getElementsByTagName("div")


container.style.cssText = "display:grid; margin: auto;height: 560px; width:500px;grid-gap:1px; grid-template-rows: repeat(16,1fr); grid-template-columns:repeat(16,1fr);"
  for(let i = 0; i < 256; i++)
      {
        let div = document.createElement('div')
        div.style.cssText = "background-color:green"
        div.id = "default-grid" 
        container.appendChild(div)
      }
      
// console.log(divCount.length)
let button = document.getElementById("Shake")

 button.onclick =function ()
  {   
 container.innerHTML = ""
    let yourChoice = prompt("how large do you want it?")

      if(yourChoice > 0)
           {
            container.style.cssText = `display:grid; margin: auto;height: 560px; width:500px;grid-gap:1px; grid-template-rows: repeat(${yourChoice},1fr); grid-template-columns:repeat(${yourChoice},1fr);` 
            for(let i = 0; i < (Math.pow(yourChoice,2)); i++)
              {
                let div = document.createElement('div')
                div.id = "default-grid"
                div.style.cssText = "background-color:green;"
                container.appendChild(div)
                div.addEventListener("mousenter",changeColor)
              }
            
          }
      else 
          {
            alert("please choose a number geater than 0")
          return button.onclick()
          }
          color = document.getElementById('default-grid')

          color.addEventListener("mouseenter", changeColor =>{

              for(let i = 0; i < 256; i++)
                {
                  let gridColor = document.getElementById("default-grid")
                  gridColor.style.cssText = `background-color: rgb(${red},${green},${blue});` 
                }
              }
            )
          
          
  }
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256)
  let blue = Math.floor(Math.random() * 256)
 
  color = document.getElementById('default-grid')

function changeColor() 
{
  {
      let gridColor = document.getElementById("default-grid")
      gridColor.style.cssText = `background-color: rgb(${red},${green},${blue});` 
  }
}
  

