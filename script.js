
let button = document.querySelector("input")
let container = document.querySelector("#container")
container.setAttribute("style","display:flex")
button.onclick = function createGrid(){
let gridSize = prompt("How large do you want it?");
let mathGrid = gridSize*gridSize;
if(gridSize <= 0){
    alert("please choose a number greater than 0")
   createGrid()
}
else if (gridSize > 0) {
    let div = document.createElement('div')
    div.setAttribute("style","height:20px; width:20px; background-color:red;")
container.appendChild(div)
}
else{
    alert("please choose a number");
    createGrid();
}
}



