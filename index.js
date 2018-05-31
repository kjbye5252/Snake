var snakeX = 1;
var snakeY = 1;
var direction = right;

function setup() {
  createCanvas(400,400);
  frameRate(10);
}

function draw() {
  background(51);
  grid();
  snake();
}

function snake() {
  stroke(255);
//   if(keyCode === RIGHT_ARROW) {
//     direction = right;
//   } else if(keyCode === LEFT_ARROW){
//     direction = left;        
//   } else if(keyCode === UP_ARROW){
//     direction = up;        
//   } else if(keyCode === DOWN_ARROW){
//     direction = down;        
//   }
  if(direction === right) {
    snakeX+=0.02;
  }
//   } else if(direction === left) {
//     snakeX--;
//   } else if(direction === up) {
//     snakeY++;
//   } else {
//     snakeY--;
//   }
  rect((snakeX*40)+1,(snakeY*40)+1,38,38);
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
