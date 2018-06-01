var snakeX = [1,0];
var snakeY = [0,0];
var foodX = Math.round(Math.random()*19);
var foodY = Math.round(Math.random()*19);
var direction = 1;

function setup() {
  createCanvas(600,600);
  frameRate(5);
}

function draw() {
  background(51);
  grid();
  snake(direction);
  food();
}

function snake(direct) {
  stroke(255);
  fill(255);
  if(keyCode === RIGHT_ARROW) {
    direction = 1;
  } else if(keyCode === LEFT_ARROW){
    direction = 2;        
  } else if(keyCode === UP_ARROW){
    direction = 3;        
  } else if(keyCode === DOWN_ARROW){
    direction = 4;        
  }
  if(direct === 1) {
    snakeX[0]++
  } else if(direct === 2) {
    snakeX[0]--
  } else if(direct === 3) {
    snakeY[0]--
  } else {
    snakeY[0]++
  }
  wrap();
  for(i = 0; i < snakeX.length; i++){
    rect((snakeX[i]*30)+1,(snakeY[i]*30)+1,28,28);
  }
  tail();
}

function grid() {
  stroke(0,255,0);
  for(var i=0;i<20;i++) {
    line(0,i*30,600,i*30);
  }
  for(var i=0;i<20;i++) {
    line(i*30,0,i*30,600);
  }
}

function wrap(){
  if(snakeX[0] > 19){
    snakeX[0] = 0;
  } else if(snakeX[0] < 0){
    snakeX[0] = 19;
  } else if(snakeY[0] > 19){
    snakeY[0] = 0;
  } else if(snakeY[0] < 0){
    snakeY[0] = 19;
  }
}

function tail(){
  for(i = 0;i < (snakeX.length)-1;i++){
    snakeX[i+1] = snakeX[i];
    snakeY[i+1] = snakeY[i];
  }
}

function food(){
  if(snakeX[0] == foodX && snakeY[0] == foodY){
    snakeX.pop(snakeX[snakeX.length-1]);
    snakeY.pop(snakeY[snakeY.length-1]);
    foodX = Math.round(Math.random()*19);
    foodY = Math.round(Math.random()*19);
  }
  stroke(255,0,0);
  fill(255,0,0);
  rect((foodX*30)+1,(foodY*30)+1,28,28);
}
