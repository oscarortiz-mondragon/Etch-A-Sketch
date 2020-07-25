let container = document.querySelector("#container")
let button = document.querySelector("input")
// 16 by 16 start off
container.style.cssText = ("display: grid; --grid-rows: 16; --grid-cols: 16; row-gap: 1px; column-gap: 1px; width: 569.6px; height: 569.6px; margin: auto;")
for(let i = 0; i < (16 * 16); i++){
  let div = document.createElement('div')
  div.setAttribute('style',"background-color:black;")
  container.appendChild(div).id = "original"
}  

document.getElementById( 
  "original").addEventListener( 
  "mouseover", over); 

document.getElementById( 
  "original").addEventListener( 
  "mouseout", out); 

  function over() { 
    document.getElementById( 
      "original").style["background-color"] = "green"; 
  } 
  function out() { 
    document.getElementById( 
      "original").style["background-color"] = "white"; 
  } 
  