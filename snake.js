var squere_size = 30;
var rad = 30;
var kolonne = 30;
var snake_hodeX = 10;
var snake_hodeY = 10;

var snake_kropp = [];

window.onload = function() {
  board = document.getElementById("board");
  board.width = kolonne * squere_size;
  board.height = rad * squere_size;
}