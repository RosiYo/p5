//Special thanks to The Coding Train because I use his code as my base code

var s;
var scl = 20;
var food;
var r=255;
var g;
var b=100;
var rate=8;

function setup() {
  createCanvas(600,600);
  s = new Snake();
  pickLocation();
}

function pickLocation (){
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function draw() {
  background(51,51,51,200);
  frameRate(rate);
  s.ls();
  s.death();
  s.update();
  s.show();
  s.tx();

  if(s.eat(food)) {
    pickLocation();
    r=random(255);
    g=random(255);
    b=random(255);
    frameRate(rate++);
  }

  noStroke();
  fill(r,g,b);
  ellipseMode(CORNER);
  ellipse(food.x, food.y, scl, scl);
  rect(480,10, 30, 30, 125); //GUIDE FOR THE FOOD COLOR
  textSize(16);
  textAlign(CENTER);
  text("IS OF THIS COLOR", 450, 50, 100, 200);
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    s.dir(0, -1);
  }else if (keyCode === DOWN_ARROW){
    s.dir(0, 1);
  }else if (keyCode === LEFT_ARROW){
    s.dir(-1, 0);
  }else if (keyCode === RIGHT_ARROW){
    s.dir(1, 0);
  }
}
