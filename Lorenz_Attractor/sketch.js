let x = 0.1;
let y = 0;
let z = 0;

let a = 10;
let b = 50;
let c = 8/6;

let points = [];

function setup() {
  createCanvas(600, 600);
  background(0);
}

function draw() {
  translate(width/2,height/2)
  scale(5)
  let dt = 0.01;

  let dx = dt * (a * (y - x));
  let dy = dt * (x * (b - z) - y);
  let dz = dt * (x * y - c * z);

  x = x + dx;
  y = y + dy;
  z = z + dz;

  for (var i = 0; i < 1; i++) {
    points[i] = createVector(x+dx/1.001,y+dy/1.001)
    points[i-1]= createVector(x,y,z)
    stroke(255)
    strokeWeight(1)
    noFill()
    line(points[i].x,points[i].y,points[i-1].x,points[i-1].y)

    console.log(points[i].x,points[i].y);
  }
}
