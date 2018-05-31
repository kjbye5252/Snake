// var location = [[0],[0]];
var direction = right;

function setup() {
  createCanvas(400,400);
}

function draw() {
  background(51);
  grid();
  snake();
}

function snake() {
  stroke(255);
  if(keyCode === RIGHT_ARROW && direction != right) {
    direction = right;
  } else if(keyCode === LEFT_ARROW && direction != left){
    direction = left;        
  }
  rect(1,1,35,35);
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
