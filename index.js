var grid = [[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9]]

function setup() {
  createCanvas(400,400);
}

function draw() {
  background(51);
  grid();
}

function grid() {
  for(i=0;i>10;i++){
    line(0,i*40,400,i*40);
  }
}
