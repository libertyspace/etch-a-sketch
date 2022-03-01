const body = document.querySelector("body");
const canvas = document.createElement("div");
let squaresPerGrid = 16;
let squareNumber = squaresPerGrid * squaresPerGrid;
let size = 100 / squaresPerGrid;

body.appendChild(canvas);
canvas.textContent = "";
canvas.id = "canvas";

function populateCanvas(squareNumber) {
  for (let i = 0; i < squareNumber; i++) {
    const squares = document.createElement("div");
    squares.id = `square${i}`;
    squares.classList = "squares";
    squares.style.width = `${size}%`;
    squares.style.height = `${size}%`;
    canvas.appendChild(squares);
  }
}

populateCanvas(squareNumber);
