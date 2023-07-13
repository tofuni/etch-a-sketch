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

createGrid(64);

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