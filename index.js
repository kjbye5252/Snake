var snakeX = 1;
var snakeY = 1;
var direction = 1;

function setup() {
  createCanvas(400,400);
  frameRate(10);
}

function draw() {
  background(51);
  grid();
  snake(direction);
}

function snake(direct) {
  stroke(255);
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
    snakeX++;
  } else if(direct === 2) {
    snakeX--;
  } else if(direct === 3) {
    snakeY++;
  } else {
    snakeY--;
  }
  rect(snakeX,snakeY,38,38);
}

function grid() {
  stroke(0,255,0);
  for(var i=0;i<10;i++) {
    line(0,i*40,400,i*40);
  }
  for(var i=0;i<10;i++) {
    line(i*40,0,i*40,400);
  }
}
