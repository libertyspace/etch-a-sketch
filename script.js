const body = document.querySelector("body");
const canvas = document.createElement("div");
const headline = document.createElement("div");
const containerContent1 = document.createElement("div");
const containerButtons = document.createElement("div");
const headlineH1 = document.createElement("h1");
const buttonClear = document.createElement("button");
const buttonGrid1 = document.createElement("button");
const buttonGrid2 = document.createElement("button");
const buttonGrid3 = document.createElement("button");
const buttonCustom = document.createElement("button");
const buttonRandomColor = document.createElement("button");
const buttonShadeBlack = document.createElement("button");
const colorPicker = document.createElement("input");
const paraPick = document.createElement("p");
const signature = document.createElement("p");

let squaresPerRow = 10;
let colorMode = "colorPick";
let currentColor = "#000000";
let squareNumber;
let size;

body.appendChild(headline);
body.appendChild(containerContent1);
body.appendChild(signature);
headline.appendChild(headlineH1);
containerContent1.appendChild(containerButtons);
containerContent1.appendChild(canvas);
containerButtons.appendChild(buttonClear);
containerButtons.appendChild(buttonCustom);
containerButtons.appendChild(buttonGrid1);
containerButtons.appendChild(buttonGrid2);
containerButtons.appendChild(buttonGrid3);
containerButtons.appendChild(buttonRandomColor);
containerButtons.appendChild(buttonShadeBlack);
containerButtons.appendChild(paraPick);
containerButtons.appendChild(colorPicker);

colorPicker.setAttribute("type", "color");
colorPicker.setAttribute("value", "#000000");
colorPicker.id = "color-picker";
buttonClear.textContent = "Clear Canvas";
buttonCustom.textContent = "Custom Grid";
buttonGrid1.textContent = "8x8";
buttonGrid2.textContent = "16x16";
buttonGrid3.textContent = "100x100";
buttonRandomColor.textContent = "Rainbow";
buttonShadeBlack.textContent = "Darker";
paraPick.textContent = "Pick a Color:";
signature.textContent = "Created by LibertySpace";

headlineH1.textContent = "Etch-a-Sketch!";
headline.id = "headline";
containerButtons.id = "buttons-container";
containerContent1.id = "container1";
paraPick.id = "paraPick";
signature.id = "signature";

buttonClear.id = "";
buttonGrid1.id = "button-grid1";
buttonGrid2.id = "button-grid2";
buttonGrid3.id = "button-grid3";
buttonRandomColor.id = "rainbow";

canvas.textContent = "";
canvas.id = "canvas";

function clearCanvas() {
  const item = document.querySelectorAll(`[id ^= "square"]`);
  for (let i = 0; i < item.length; i++) {
    item[i].parentElement.removeChild(item[i]);
  }
}

function calculateSquares() {
  squareNumber = squaresPerRow * squaresPerRow;
  size = 100 / squaresPerRow;
}

function populateCanvas() {
  calculateSquares();
  for (let i = 0; i < squareNumber; i++) {
    const squares = document.createElement("div");
    squares.id = `square${i}`;
    squares.classList = "squares";
    squares.style.width = `${size}%`;
    squares.style.height = `${size}%`;
    canvas.appendChild(squares);
  }
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateRandomColor() {
  let red = generateRandomNumber(0, 256);
  let green = generateRandomNumber(0, 256);
  let blue = generateRandomNumber(0, 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

function colorTheSquare(e) {
  let item = e.target;
  if (colorMode === "colorPick") {
    item.style.backgroundColor = `${currentColor}`;
  } else if (colorMode === "rainbow") {
    let farbe = generateRandomColor();
    item.style.backgroundColor = `${farbe}`;
  } else if (colorMode === "darken") {
    generateDarkerColor(item);
  }
}

function generateDarkerColor(item) {
  let rgb = item.style.backgroundColor;
  let rgbArr = rgb
    .substring(4, rgb.length - 1)
    .replace(/ /g, "")
    .split(",");
  let red = parseInt(rgbArr[0]);
  let green = parseInt(rgbArr[1]);
  let blue = parseInt(rgbArr[2]);
  red = red - red * 0.1;
  green = green - green * 0.1;
  blue = blue - blue * 0.1;
  item.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function listenToMouse() {
  const singleSquare = document.querySelectorAll(".squares");

  singleSquare.forEach((square) => {
    square.addEventListener("mouseover", (e) => {
      colorTheSquare(e);
    });
  });
}

populateCanvas();
listenToMouse();

buttonClear.addEventListener("click", () => {
  clearCanvas();
  populateCanvas();
  listenToMouse();
});

buttonGrid1.addEventListener("click", () => {
  squaresPerRow = 8;
  clearCanvas();
  populateCanvas();
  listenToMouse();
});

buttonGrid2.addEventListener("click", () => {
  squaresPerRow = 16;
  clearCanvas();
  populateCanvas();
  listenToMouse();
});

buttonGrid3.addEventListener("click", () => {
  squaresPerRow = 100;
  clearCanvas();
  populateCanvas();
  listenToMouse();
});

buttonShadeBlack.addEventListener("click", () => {
  colorMode = "darken";
});

buttonRandomColor.addEventListener("click", () => {
  colorMode = "rainbow";
});

colorPicker.addEventListener("change", (e) => {
  currentColor = e.target.value;
});

colorPicker.addEventListener("click", () => {
  colorMode = "colorPick";
});

buttonCustom.addEventListener("click", () => {
  clearCanvas();
  squaresPerRow = prompt("Enter the Number of squares per row (max. 100):");
  if (squaresPerRow <= 100) {
    populateCanvas();
    listenToMouse();
  } else {
    alert("Please enter a number equal or below 100!");
  }
});
