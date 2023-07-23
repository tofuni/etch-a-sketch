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

/* Base user controls */
// Create ability to select/deselect base control buttons
const baseControls = document.querySelectorAll('.base-controls > button');

baseControls.forEach((control) => {
    control.addEventListener('click', (event) => {
        baseControls.forEach((btn) => {
            if (btn !== event.target) {
                btn.classList.remove('active');
            };
        });
        event.target.classList.toggle('active');
    });
});

// Create eraser functionality
const eraser = document.getElementById('eraser');

eraser.addEventListener('click', () => {
    toggleEraser();
});

function toggleEraser() {
    if (!eraser.classList.contains('active')) {
        gridContainer.addEventListener('mousedown', (event) => {
            mouseIsDown = true;
            event.target.classList.add('fill-square');
        });
        gridContainer.addEventListener('mouseover', (event) => {
            if (mouseIsDown) {
                event.target.classList.add('fill-square');
            };
        });
    } else if (eraser.classList.contains('active')) {
        gridContainer.addEventListener('mousedown', (event) => {
            mouseIsDown = true;
            event.target.style.removeProperty('background-color');
            event.target.classList.remove('fill-square');
        });
        gridContainer.addEventListener('mouseover', (event) => {
            if (mouseIsDown) {
                event.target.style.removeProperty('background-color');
                event.target.classList.remove('fill-square');
            };
        });
    };
};

// Create rainbow mode functionality
const randomRgbColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

const rainbow = document.getElementById('rainbow');

rainbow.addEventListener('click', () => {
    toggleRainbow();
});

function toggleRainbow() {
    if (!rainbow.classList.contains('active')) {
        gridContainer.addEventListener('mousedown', (event) => {
            mouseIsDown = true;
            event.target.style.removeProperty('background-color');
        });
        gridContainer.addEventListener('mouseover', (event) => {
            if (mouseIsDown) {
                event.target.style.removeProperty('background-color');
            };
        });
    } else if (rainbow.classList.contains('active')) {
        gridContainer.addEventListener('mousedown', (event) => {
            mouseIsDown = true;
            event.target.classList.add('fill-square');
            event.target.style.backgroundColor = `${randomRgbColor()}`
        });
        gridContainer.addEventListener('mouseover', (event) => {
            if (mouseIsDown) {
                event.target.classList.add('fill-square');
                event.target.style.backgroundColor = `${randomRgbColor()}`
            };
        });
    };
};

/* Extra user controls */
const gridSquare = gridContainer.childNodes;

// Create clear functionality
const clear = document.getElementById('reset');

clear.addEventListener('click', () => {
    gridSquare.forEach((square) => {
        square.classList.remove('fill-square');
        square.removeAttribute('style');
    });
});

// Create toggle grid lines functionality
const gridLines = document.getElementById('grid-lines');

gridLines.addEventListener('click', () => {
    gridLines.classList.toggle('active');
    gridSquare.forEach((square) => {
        square.classList.toggle('no-grid-lines');
    });
});