
function destroyGrid(){
    const rows = document.querySelectorAll(".row");
    for(const row of rows){
        container.removeChild(row);
    }
}

function changeColor(grid){

    const currentColor = grid.style.backgroundColor;
    if(currentColor === ""){
        const hue = Math.floor(Math.random() * 360);
        grid.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
        grid.style.opacity = .1;
    }
    else{

        let opacity = parseFloat(grid.style.opacity);
        if(opacity < 1){
            grid.style.opacity = opacity +.1;
        }
    }
   


}

function createGrid(gridSize){
    destroyGrid();

    for(let rowCount = 0; rowCount < gridSize; rowCount++){
        const rowDiv = document.createElement("div");
        rowDiv.style.cssText =  "display: flex; flex: 1"
        rowDiv.classList.add("row")
        container.appendChild(rowDiv);
        for(let columnCount = 0; columnCount < gridSize; columnCount++){
            const grid = document.createElement("div");
            grid.style.cssText = "flex: 1 1 10px";
            grid.style.border = ".5px solid black";
            grid.addEventListener("mouseover", () => {
                changeColor(grid);
            })
            rowDiv.appendChild(grid);
        }
    }
}

const container = document.querySelector(".container")
container.style.cssText = "display: flex; flex-wrap: wrap; height: 100vh; flex-direction: column"

const button = document.querySelector("button");
button.addEventListener("click", () => {
    let gridSize = parseInt(prompt("grid size: "));
    if(gridSize > 100) {
        gridSize = 100;
        console.log(gridSize)
    }
    createGrid(gridSize);
})

createGrid(16);