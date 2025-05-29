//board
var blockSize = 25;
var rader = 20;
var kolonner = 20;
var board;
var context;

var snakeX = blockSize * 5;
var snakeY = blockSize * 5;


window.onload = function () {
  board = document.getElementById("board");
  board.height = rader * blockSize;
  board.width = kolonner * blockSize;
  context = board.getContext("2d");

  update();
}

function update() {
  context.fillStyle = "black";
  context.fillRect(0, 0, board.width, board.height);

  context.fillStyle = "lime";
  context.fillRect(snakeX, snakeY, blockSize, blockSize);
}