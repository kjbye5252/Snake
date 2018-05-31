var weight = 0.5;
var slider;
var slider2;
var slider3;

function setup() {
  createCanvas(windowWidth,windowHeight);
  slider = createSlider(1,230,5,1);
  slider.position((width/2)-65,0);
  slider2 = createSlider(0.01,0.75,0.5,0.01);
  slider2.position((width/2)-65,25);
  slider3 = createSlider(1,250,200,1);
  slider3.position((width/2)-65,50);
  angleMode(DEGREES);
}

function draw() {
  background(51);
  translate(width/2,height/2);
  stroke(255);
  strokeWeight(weight);
  cross(slider3.value(),slider.value());
  for (i = 0; i < 3; i++) {
    translate(slider3.value(),0);
    rotate(90);
    cross(slider3.value(),slider.value());
  }
}

function cross(length,iterations) {
  line(0,0,-length,0);
  translate(-length,0);
  if (length > iterations) {
    push();
    rotate(90);
    cross(length * slider2.value(),iterations);
    pop();
    push();
    rotate(0);
    cross(length * slider2.value(),iterations);
    pop();
    push();
    rotate(-90);
    cross(length * slider2.value(),iterations);
    pop();
  }
}
