let container = document.querySelector("#container")

container.style.cssText = "display:grid; margin: auto;height: 560px; width:500px;grid-gap:10px; grid-template-rows: repeat(16,1fr); grid-template-columns:repeat(16,1fr);"
  for(let i = 0; i < 256; i++)
      {
        let div = document.createElement('div')
        div.style.cssText = "background-color:red"
        div.id = "default-grid" 
        container.appendChild(div)
      }
      
      
let button = document.getElementById("Shake")

 button.onclick =function ()
  {
    let yourChoice = prompt("how large do you want it?")
      if(yourChoice > 0)
           {
            container.style.cssText = "display:grid; margin: auto;height: 560px; width:500px;grid-gap:10px; grid-template-rows: repeat(" +yourChoice+ ",1fr); grid-template-columns:repeat(" +yourChoice+",1fr);" 
            for(let i = 0; i < (yourChoice * yourChoice); i++)
              {
                let div = document.createElement('div')
                div.id = "default-grid"
                div.style.cssText = "background-color:green;"
                container.appendChild(div)
              }
          }
      else 
          {
            alert("please choose a number geater than 0")
          return button.onclick()
          }
          for(let i = 0; i < 256; i++)
          {
            let div = document.getElementById("default-grid")
            container.removeChild(div)
          }
  }

