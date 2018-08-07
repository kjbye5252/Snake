var snakeX = [0];
var snakeY = [0];
var foodX;
var foodY;
var direction = 1;
var frame = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  snakeX = [Math.round(Math.random()*Math.floor(width/30)-1)];
  snakeY = [Math.round(Math.random()*Math.floor(height/30)-1)];
  foodX = Math.round(Math.random()*Math.floor(width/30)-1);
  foodY = Math.round(Math.random()*Math.floor(height/30)-1);
  frameRate(60);
}

function draw() {
  frame++;
  if(frame > 3){
    frame = 0;
  }
  if(frame == 3){
    createCanvas(windowWidth,windowHeight);
    background(51);
    // grid();
    food();
    snake(direction);
  }

}

function snake(direct) {
  stroke(0,254,0);
  fill(0,254,0);
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
      reset();
    }
  }
  wrap();
  for(i = 0; i < snakeX.length; i++){
    rect((snakeX[i]*30)+1,(snakeY[i]*30)+1,28,28);
  }
  tail();
}

function grid() {
  stroke(0,255,0);
  for(var i=0;i<height/30;i++) {
    line(0,i*30,Math.floor(width/30)*30,i*30);
  }
  for(var i=0;i<width/30;i++) {
    line(i*30,0,i*30,Math.floor(height/30)*30);
  }
}

function wrap(){
  if(snakeX[0] > Math.floor(width/30)-1){
    snakeX[0] = 0;
  } else if(snakeX[0] < 0){
    snakeX[0] = Math.floor(width/30)-1;
  } else if(snakeY[0] > Math.floor(height/30)-1){
    snakeY[0] = 0;
  } else if(snakeY[0] < 0){
    snakeY[0] = Math.floor(height/30)-1;
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
    for(i = 0; i < 5;i++){
      snakeX.push(snakeX[snakeX.length-1]);
      snakeY.push(snakeY[snakeY.length-1]);
    }
    foodX = Math.round(Math.random()*Math.floor(width/30)-1);
    foodY = Math.round(Math.random()*Math.floor(height/30)-1);
  }
  stroke(255,0,0);
  fill(255,0,0);
  rect((foodX*30)+1,(foodY*30)+1,28,28);
}

function reset(){
  snakeX = [Math.round(Math.random()*39)];
  snakeY = [Math.round(Math.random()*39)];
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW) {
    direction = 1;
  } else if(keyCode === LEFT_ARROW){
    direction = 2;
  } else if(keyCode === UP_ARROW){
    direction = 3;
  } else if(keyCode === DOWN_ARROW){
    direction = 4;
  }
}
