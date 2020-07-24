
let button = document.querySelector("input")
let container = document.querySelector("#container")
let startGrid = document.createElement('div')
let cell = document.createElement("div");
let atb =  cell.getAttribute('style')  

// // Start with 16 by 16
let onPageGrid = function(){
startGrid.setAttribute("style", "height:20px; width:20px; background:red;")
container.appendChild(startGrid)}


function makeRows(rows, cols) {
  
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);


// Creates a Grid with your choice of size. 
button.onclick = 

function createGrid () {
    let gridSize = prompt("How large do you want it?");
  
if(gridSize <= 0){
    alert("please choose a number greater than 0")
   createGrid()
}
else if (gridSize > 0) {

  container.style.setProperty('--grid-rows', gridSize);
    container.style.setProperty('--grid-cols', gridSize);
    for (i = 0; i < (gridSize * gridSize); i++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "your-grid";
    
    };
    let test = document.getElementsByClassName("grid-item");
    test.classList.remove("grid-item");
}
else{
    alert("please choose a number");
    createGrid();
}


}
document.getElementById("gridContainer").style.cssText = (`display: grid;
    grid-template-columns: repeat(` + grid + `,`+ cellHeight + `px);
    grid-template-rows: repeat(` + grid + `,` + cellHeight + `px);
    grid-gap: ` + padding + `px; width: ` + gridContainerHeight + `px;
    height: ` + gridContainerHeight + `px;`);
//   Need to create a way to delete the previous entry

// make it part of the style, that way you don't have to add remove divs.