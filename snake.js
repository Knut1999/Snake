var squere_size = 20;
var rad = 30;
var kolonne = 30;

var snake_hodeX = 10 * squere_size;
var snake_hodeY = 10 * squere_size;

var snake_kropp = [];

var mat_X;
var mat_Y; 

var hastighetX = 1 * squere_size;
var hastighetY = 0 * squere_size;

window.onload = function() {
  board = document.getElementById("board");
  board.width = kolonne * squere_size;
  board.height = rad * squere_size;
  context = board.getContext("2d"); //for å tegne på canvas
  random_mat();

  // sett retning
  document.addEventListener('keyup', retning)
  // retning satt

  setInterval(update, 1000/10)
  //update();
}

function update() {
  context.fillStyle = "black";
  context.fillRect(0, 0, board.width, board.height)

  context.fillStyle = "lime";
  snake_hodeX += hastighetX;
  snake_hodeY += hastighetY;
  context.fillRect(snake_hodeX, snake_hodeY, squere_size, squere_size)
  
  context.fillStyle = "red";
  context.fillRect(mat_X, mat_Y, squere_size, squere_size)
}

function random_mat() {
  mat_X = Math.random() * kolonne * squere_size;
  mat_Y = Math.random() * rad * squere_size;
}

function retning(e) {
  if ("ArrowUp"){
    hastighetX = 0;
    hastighetY = -1;
  }
}
