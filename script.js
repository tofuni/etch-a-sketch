// Create 16x16 grid
const gridContainer = document.querySelector('.grid-container');

function createGrid(number) {
    for (let i = 0; i < (number*number); i++) {
        gridContainer.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
        const div = document.createElement('div');
        div.classList.add('grid-square');
        gridContainer.appendChild(div);
    }
}

createGrid(16);
