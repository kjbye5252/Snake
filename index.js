var snakeX = [0];
var snakeY = [0];
var foodX = Math.round(Math.random()*19);
var foodY = Math.round(Math.random()*19);
var direction = 1;

function setup() {
  createCanvas(600,600);
  frameRate(10);
}

function draw() {
  background(51);
  grid();
  food();
  snake(direction);
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
  for(i = 0; i < snakeX.length; i++){
    if(snakeX[0] == snakeX[i+1] && snakeY[0] == snakeY[i+1]){
      snakeX = [0];
      snakeY = [0];
    }
  }
  wrap();
  for(i = 0; i < snakeX.length; i++){
    rect((snakeX[i]*15)+1,(snakeY[i]*15)+1,13,13);
  }
  tail();
}

function grid() {
  stroke(0,255,0);
  for(var i=0;i<40;i++) {
    line(0,i*15,600,i*15);
  }
  for(var i=0;i<40;i++) {
    line(i*15,0,i*15,600);
  }
}

function wrap(){
  if(snakeX[0] > 39){
    snakeX[0] = 0;
  } else if(snakeX[0] < 0){
    snakeX[0] = 39;
  } else if(snakeY[0] > 39){
    snakeY[0] = 0;
  } else if(snakeY[0] < 0){
    snakeY[0] = 39;
  }
}

function tail(){
  for(i = 0;i < (snakeX.length)-1;i++){
    snakeX[snakeX.length-(i+1)] = snakeX[snakeX.length-(i+2)];
    snakeY[snakeY.length-(i+1)] = snakeY[snakeY.length-(i+2)];
  }
}

function food(){
  if(snakeX[0] == foodX && snakeY[0] == foodY){
    snakeX.push(snakeX[snakeX.length-1]);
    snakeY.push(snakeY[snakeY.length-1]);
    foodX = Math.round(Math.random()*39);
    foodY = Math.round(Math.random()*39);
  }
  stroke(255,0,0);
  fill(255,0,0);
  rect((foodX*15)+1,(foodY*15)+1,13,13);
}
