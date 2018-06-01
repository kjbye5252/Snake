var snakeX = 0;
var snakeY = 0;
var direction = 1;

function setup() {
  createCanvas(600,600);
  frameRate(5);
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
    snakeY--;
  } else {
    snakeY++;
  }
  wrap();
  rect((snakeX*30)+1,(snakeY*30)+1,28,28);
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
  if(snakeX > 19){
    snakeX = 0;
  } else if(snakeX < 0){
    snakeX = 19;
  } else if(snakeY > 19){
    snakeY = 0;
  } else if(snakeY < 0){
    snakeY = 19;
  }
}
