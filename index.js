var grid = [[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9]];

function setup() {
  createCanvas(400,400);
  stroke(255);
}

function draw() {
  background(51);
  line(0,0,25,25);
  grid();
}

function grid() {
  for(i=0;i<10;i++){
    line(0,40,400,40);
  }
}
