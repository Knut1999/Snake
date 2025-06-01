var squere_size = 20;
var rad = 30;
var kolonne = 30;

var snake_hodeX = 10;
var snake_hodeY = 10;

var snake_kropp = [];

var mat_X = 15;
var mat_Y = 15;

window.onload = function() {
  board = document.getElementById("board");
  board.width = kolonne * squere_size;
  board.height = rad * squere_size;
  context = board.getContext("2s"); //for å tegne på canvas

  context.fillStyle = "lime";
  context.fillRect(snake_hodeX, snake_hodeY, squere_size, squere_size)
}