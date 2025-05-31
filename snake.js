//board
var blockSize = 25;
var rader = 20;
var kolonner = 20;
var board;
var context;

//snake head
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

//food
var foodX;
var foodY;

window.onload = function () {
  board = document.getElementById("board");
  board.height = rader * blockSize;
  board.width = kolonner * blockSize;
  context = board.getContext("2d"); //tegner brett

  placeFood();
  update();
}

function update() {
  context.fillStyle = "black";
  context.fillRect(0, 0, board.width, board.height);

  context.fillStyle = "lime";
  context.fillRect(snakeX, snakeY, blockSize, blockSize);

  context.fillStyle = "red";
  context.fillRect(foodX, foodY, blockSize, blockSize);
}


function placeFood() {
  foodX = Math.floor(Math.random() * kolonner) * blockSize;
  foodY = Math.floor(Math.random() * rader) * blockSize;
}