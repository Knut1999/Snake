var squere_size = 30;
var rad = 30;
var kolonne = 30;
var snake_hodeX = 10;
var snake_hodeY = 10;

var snake_kropp = [];

window.onload = function() {
  spill_brett = document.getElementById("board");
  spill_brett.height = rad * squere_size;
  spill_brett.length = kolonne * squere_size;
}