const gridContainer = document.querySelector('.grid-container');
const containerWidth = gridContainer.clientWidth;
const containerHeight = gridContainer.clientHeight;

function createGrid(number) {
    for (let i = 0; i < (number*number); i++) {
        const div = document.createElement('div');
        div.style.width = ((containerWidth/number) - 2) + "px";
        div.style.height = ((containerHeight/number) - 2) + "px";
        div.classList.add('grid-square');
        gridContainer.appendChild(div);
    }
}

createGrid(16);
