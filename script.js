/* Create 16x16 grid */
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

/* Create slider that sets grid size */
const slider = document.querySelector('#slider');
const gridSize = document.querySelector('#value');
const sliderVal = slider.value;

// Update grid size value under slider
gridSize.textContent = `${sliderVal} x ${sliderVal}`;

slider.addEventListener("input", (event) => {
    let number = event.target.value;
    gridSize.textContent = `${number} x ${number}`;
});

// Update grid with selected slider value
slider.addEventListener("click", (event) => {
    let number = event.target.value;
    removeGrid();
    createGrid(number);
});

function removeGrid() {
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
};

/* Create fill effects for grid squares */
let mouseIsDown = false;

gridContainer.addEventListener('mousedown', (event) => {
    mouseIsDown = true;
    event.target.classList.add('fill-square');
});

gridContainer.addEventListener('mouseup', () => {
    mouseIsDown = false;
});

gridContainer.addEventListener('mouseover', (event) => {
    if (mouseIsDown) {
        event.target.classList.add('fill-square');
    }
});

gridContainer.addEventListener('mouseleave', () => {
    mouseIsDown = false;
});
