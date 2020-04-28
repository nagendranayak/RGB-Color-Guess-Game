var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  setUpModeButtons();
  setUpSquares();
  reset();
}

function setUpModeButtons() {
//modeButtons EventListeners
for (i = 0; i < modeButtons.length; i++) {
  modeButtons[i].addEventListener("click", function() {
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent === " Easy " ? numSquares = 3 : numSquares = 6; // this = modeButtons
    reset();
  });
}
}

function setUpSquares(){
for (var i = 0; i < squares.length; i++) {
  //add click listeners
  squares[i].addEventListener("click", function() {
    //grab the color of clicked square
    var clickedColor = this.style.backgroundColor;
    //campare color to pickedColor
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again?";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}
}


function reset() {
  // generate all new color
  colors = generateRandomColors(numSquares);
  // pick a new random color from array
  pickedColor = pickColor();
  // change colorDisplay to pickedColor
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "NEW COLOR";
  messageDisplay.textContent = "";
  // change the color of the square
  for (i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function() {
  reset();
});


function changeColors(color) {
  // loop throught all squares
  for (i = 0; i < squares.length; i++) {
    // change each color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  var arr = [];
  //  repeat num times
  for (i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  // return that array
  return arr;
}


function randomColor() {
  // pick color a "red" color from 0 to 255
  var r = Math.floor(Math.random() * 256);
  // pick color a "green" color from 0 to 255
  var g = Math.floor(Math.random() * 256);
  // pick color a "blue" color from 0 to 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
