//board
var blockSize = 25;
var rader = 20;
var kolonner = 20;
var board;
var context;

//snake head
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

velocityX = 0;
velocityY = 0;

//food
var foodX;
var foodY;

window.onload = function () {
  board = document.getElementById("board");
  board.height = rader * blockSize;
  board.width = kolonner * blockSize;
  context = board.getContext("2d"); //tegner brett

  placeFood();
  document.addEventListener("keyup", changeDirection);

  //update();
  setInterval(update, 100/10);
}

function update() {
  context.fillStyle = "black";
  context.fillRect(0, 0, board.width, board.height);

  context.fillStyle = "lime";
  context.fillRect(snakeX, snakeY, blockSize, blockSize);
  snakeX += velocityX;
  snakeY += velocityY;

  context.fillStyle = "red";
  context.fillRect(foodX, foodY, blockSize, blockSize);
}

function changeDirection(e) {
  if(e.code == "ArrowUp"){
    velocityX = 0;
    velocityY = -1;
  }
  else if (e.code == "ArrowDown"){
    velocityX = 0;
    velocityY = 1;
  }
  else if (e.code == "ArrowLeft"){
    velocityX = -1;
    velocityY = 0;
  }
  else if (e.code == "ArrowRight"){
    velocityX = 1;
    velocityY = 0;
  }

}

function placeFood() {
  foodX = Math.floor(Math.random() * kolonner) * blockSize;
  foodY = Math.floor(Math.random() * rader) * blockSize;
}