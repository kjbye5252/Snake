var location = [[0],[0]];

function setup() {
  createCanvas(400,400);
}

function draw() {
  background(51);
  grid();
//   snake();
}

function snake() {
  stroke(255);
  rect(location[0][0],location[1][0],location[0][0]+40,location[1][0]+40);
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
