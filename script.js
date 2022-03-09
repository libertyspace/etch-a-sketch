const body = document.querySelector("body");
const canvas = document.createElement("div");

let squaresPerGrid = 40;
let squareNumber = squaresPerGrid * squaresPerGrid;
let size = 100 / squaresPerGrid;

body.appendChild(canvas);
canvas.textContent = "";
canvas.id = "canvas";

function myFunc() {
  console.log("hello");
}

function colorToBlack(e) {
  let item = e.target;
  item.classList.add("squares-on-click");
}

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
const singleSquare = document.querySelectorAll(".squares");
singleSquare.forEach((square) => {
  square.addEventListener("mouseover", (e) => {
    colorToBlack(e);
  });
});
