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
const buttonRandomColor = document.createElement("button");
const buttonShadeBlack = document.createElement("button");

let squaresPerGrid = 10;

body.appendChild(headline);
body.appendChild(containerContent1);
headline.appendChild(headlineH1);
containerContent1.appendChild(containerButtons);
containerContent1.appendChild(canvas);
containerButtons.appendChild(buttonClear);
containerButtons.appendChild(buttonGrid1);
containerButtons.appendChild(buttonGrid2);
containerButtons.appendChild(buttonGrid3);
containerButtons.appendChild(buttonRandomColor);
containerButtons.appendChild(buttonShadeBlack);

buttonClear.textContent = "Clear Canvas";
buttonGrid1.textContent = "8x8";
buttonGrid2.textContent = "16x16";
buttonGrid3.textContent = "24x24";
buttonRandomColor.textContent = "Rainbow";
buttonShadeBlack.textContent = "Darken";

headlineH1.textContent = "Etch-a-Sketch!";
headline.id = "headline";
containerButtons.id = "buttons-container";
containerContent1.id = "container1";

buttonClear.id = "";
buttonGrid1.id = "button-grid1";
buttonGrid2.id = "button-grid2";
buttonGrid3.id = "button-grid3";

canvas.textContent = "";
canvas.id = "canvas";

function clearCanvas() {
  const item = document.querySelectorAll(`[id ^= "square"]`);
  for (let i = 0; i < item.length; i++) {
    item[i].parentElement.removeChild(item[i]);
  }
}

// function clearCanvas() {
//   while (canvas.firstChild) {
//     canvas.removeChild(canvas.firstChild);
//   }
// }

function colorToBlack(e) {
  let item = e.target;
  item.classList.add("color-to-black");
}

function populateCanvas(squaresPerGrid) {
  let squareNumber = squaresPerGrid * squaresPerGrid;
  let size = 100 / squaresPerGrid;
  for (let i = 0; i < squareNumber; i++) {
    const squares = document.createElement("div");
    squares.id = `square${i}`;
    squares.classList = "squares";
    squares.style.width = `${size}%`;
    squares.style.height = `${size}%`;
    canvas.appendChild(squares);
    listenToMouse();
  }
}

function generateRandomNumber(min, max) {
  // min = Math.ceil(min);
  // max = Match.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function generateRandomColor() {
  let red = generateRandomNumber(0, 256);
  let green = generateRandomNumber(0, 256);
  let blue = generateRandomNumber(0, 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

function listenToMouse() {
  const singleSquare = document.querySelectorAll(".squares");

  singleSquare.forEach((square) => {
    square.addEventListener("mouseover", (e) => {
      colorToBlack(e);
    });
  });
}

populateCanvas(squaresPerGrid);

buttonClear.addEventListener("click", () => {
  clearCanvas();
  populateCanvas(squaresPerGrid);
});

buttonGrid1.addEventListener("click", () => {
  squaresPerGrid = 8;
  clearCanvas();
  populateCanvas(squaresPerGrid);
  return squaresPerGrid;
});

buttonGrid2.addEventListener("click", () => {
  squaresPerGrid = 16;
  clearCanvas();
  populateCanvas(squaresPerGrid);
  return squaresPerGrid;
});

buttonGrid3.addEventListener("click", () => {
  squaresPerGrid = 24;
  clearCanvas();
  populateCanvas(squaresPerGrid);
  return squaresPerGrid;
});

buttonShadeBlack.addEventListener("click", () => {
  let color = generateRandomColor();
  console.log(color);
});
