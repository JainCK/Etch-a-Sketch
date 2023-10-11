const gridSizeInput = document.getElementById("grid-size");
const container = document.getElementById("container");
const clearButton = document.getElementById("clear-button");
const eraserButton = document.getElementById("eraser-button");
const colorToggle = document.getElementById("color-toggle");
const containerWidth = 500;
const containerHeight = 500;

let isRainbow = false;

function createGrid(size) {
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.width = `${containerWidth}px`;
    container.style.height = `${containerHeight}px`;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        container.appendChild(square);
    }

    const squares = document.querySelectorAll(".grid-square");
    squares.forEach(square => {
        square.addEventListener("mouseenter", () => {
            if (isRainbow) {
                square.style.backgroundColor = getRandomColor();
            } else {
                square.style.backgroundColor = "black";
            }
        });
    });
}

gridSizeInput.addEventListener("input", () => {
    createGrid(gridSizeInput.value);
});

clearButton.addEventListener("click", () => {
    const squares = document.querySelectorAll(".grid-square");
    squares.forEach(square => {
        square.style.backgroundColor = "white";
    });
});

eraserButton.addEventListener("click", () => {
    isRainbow = false;
});

colorToggle.addEventListener("click", () => {
    isRainbow = !isRainbow;
});

// Initial grid size
createGrid(16);

function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}
