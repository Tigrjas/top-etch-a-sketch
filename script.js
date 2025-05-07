const DEFAULT_GRID_SIZE = 16;
const COLORS = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']

function createGrid(size = DEFAULT_GRID_SIZE) {
    const container = document.querySelector(".container");
    container.innerHTML = '';

    const squareSize = 960 / size;

    function createRow(size) {
        for (let i = 0; i < size; i++) {
            const square = document.createElement("div")
            square.classList.add("square");
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            square.style.boxSizing = 'border-box';
            square.style.border = '1px solid #ccc';
            square.style['background-color'] = randomChoice(COLORS);
            square.style['opacity'] = 0;

            square.addEventListener("mouseover", () => {
                let currentOpacity = parseFloat(square.style.opacity);
                if (currentOpacity < 1) {
                    square.style.opacity = (currentOpacity + 0.1);
                }
            });


            container.append(square);
        }
    }
    for (let i = 0; i < size; i++) {
        createRow(size)
    }
}

function handleNewGridClick() {
    const size = prompt("Number of squares per side of grid: ")
    if (size > 100) {
        alert("Sizes less than or equal to 100 only.")
    } else {
        createGrid(size);
    }
}

function randomChoice(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

const newGridButton = document.querySelector("#new-grid-button");
newGridButton.addEventListener('click', handleNewGridClick)


createGrid();