var squere_size = 20;
var rad = 30;
var kolonne = 30;

var snake_hodeX = 10 * squere_size;
var snake_hodeY = 10 * squere_size;

var snake_kropp = [];

var mat_X = 15 * squere_size;
var mat_Y = 15 * squere_size; 

window.onload = function() {
  board = document.getElementById("board");
  board.width = kolonne * squere_size;
  board.height = rad * squere_size;
  context = board.getContext("2d"); //for å tegne på canvas

  update();
}

function update() {
  context.fillStyle = "lime";
  context.fillRect(snake_hodeX, snake_hodeY, squere_size, squere_size)
}