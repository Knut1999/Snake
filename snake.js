var squere_size = 20;
var rad = 30;
var kolonne = 30;

var snake_hodeX = 10 * squere_size;
var snake_hodeY = 10 * squere_size;

var snake_kropp = [];

var mat_X;
var mat_Y; 

var hastighetX = 1;
var hastighetY = 0;

var GameOver = false;
var endret_retning = false;

window.onload = function() {

  board = document.getElementById("board");
  board.width = kolonne * squere_size;
  board.height = rad * squere_size;
  context = board.getContext("2d"); //for å tegne på canvas
  random_mat();

  // sett retning
  document.addEventListener('keyup', retning);
  
  
  // retning satt
    setInterval(update, 100)
  
  
  //update();
}


function update() {
  endret_retning = false;
  if (GameOver) {
    return;
  }

  context.fillStyle = "black";
  context.fillRect(0, 0, board.width, board.height)

  if(snake_hodeX == mat_X && snake_hodeY == mat_Y){
    snake_kropp.push([mat_X, mat_Y])
    random_mat();
  }

  for (let i = snake_kropp.length-1; i > 0; i--){
    snake_kropp[i] = snake_kropp[i-1]
  }
  if (snake_kropp.length) {
    snake_kropp[0] = [snake_hodeX, snake_hodeY];
  }

  context.fillStyle = "red";
  context.fillRect(mat_X, mat_Y, squere_size, squere_size)
  
  context.fillStyle = "lime";
  snake_hodeX += hastighetX * squere_size;
  snake_hodeY += hastighetY * squere_size;
  context.fillRect(snake_hodeX, snake_hodeY, squere_size, squere_size);
  for (let i = 0; i < snake_kropp.length; i++){
    context.fillRect(snake_kropp[i][0], snake_kropp[i][1], squere_size, squere_size);
  }
  //game over
  for (let i = 0; i<snake_kropp.length; i++){
    if (snake_hodeX == snake_kropp[i][0] && snake_hodeY == snake_kropp[i][1]){
      GameOver = true;
      alert("Game ooooveeer")
    }
  }

  if (snake_hodeX < 0){
    snake_hodeX = (rad-1) * squere_size;
  }
  else if (snake_hodeX > ((rad-1) * squere_size)){
    snake_hodeX = 0 * squere_size;
  }
  else if (snake_hodeY < 0){
    snake_hodeY = (kolonne-1) * squere_size;
  }
  else if (snake_hodeY > ((kolonne-1) * squere_size)){
    snake_hodeY = 0 * squere_size;
  }
}

function random_mat() {
  mat_X = Math.floor(Math.random() * kolonne) * squere_size;
  mat_Y = Math.floor(Math.random() * rad) * squere_size;
}

function retning(e) {
    if (endret_retning == true){
    return;
  }
  if (e.code == "ArrowUp" && hastighetY != 1){
    hastighetX = 0;
    hastighetY = -1;
    endret_retning = true;
    return;
  }
  else if (e.code == "ArrowRight" && hastighetX != -1){
    hastighetX = 1;
    hastighetY = 0;
    endret_retning = true;
    return;
  }
  else if (e.code == "ArrowLeft" && hastighetX != 1){
    hastighetX = -1;
    hastighetY = 0;
    endret_retning = true;
    return;
  }
  else if (e.code == "ArrowDown" && hastighetY != -1){
    hastighetX = 0;
    hastighetY = 1;
    endret_retning = true;
    return;
  }
  
}

