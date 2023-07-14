// Create 16x16 grid
const gridContainer = document.querySelector('.grid-container');

function createGrid(number) {
    for (let i = 0; i < (number * number); i++) {
        gridContainer.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
        const div = document.createElement('div');
        div.classList.add('grid-square');
        gridContainer.appendChild(div);
    }
}

createGrid(16);

// Create slider that sets grid size
const slider = document.querySelector('#slider');
const gridSize = document.querySelector('#value');
const sliderVal = slider.value;

gridSize.textContent = `${sliderVal} x ${sliderVal}`;

slider.addEventListener("input", (event) => {
    let number = event.target.value;
    gridSize.textContent = `${number} x ${number}`;
});

slider.addEventListener("click", (event) => {
    let number = event.target.value;
    removeGrid();
    createGrid(number);
});

// Remove existing grid
function removeGrid() {
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
};

// Create fill effects for grid squares
const gridSquare = document.querySelectorAll('.grid-square');
let mouseIsDown = false;

gridSquare.forEach((square) => {
    square.addEventListener('mousedown', () => {
        mouseIsDown = true;
        square.classList.add('fill-square');
    });
    square.addEventListener('mouseup', () => { 
        mouseIsDown = false;
     });
    square.addEventListener('mouseover', () => {
        if (mouseIsDown) {
            square.classList.add('fill-square');
        }
    });
});