let b;

function setup() {
  createCanvas(600, 600);
  b = new Ball();
}

function draw() {
  background(0);
  b.display();
}
