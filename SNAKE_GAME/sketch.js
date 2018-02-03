//Special thanks to The Coding Train because I use his code as my base code
  //Here is the link to his video https://www.youtube.com/watch?v=AaGK-fj-BAM&list=PLRqwX-V7Uu6aRpfixWba8ZF6tJnZy5Mfw&index=1

var s;
var scl = 20;
var food;
var r=255;
var g;
var b=100;
var rate=8;

function setup() {
  createCanvas(600,600);
  s = new Snake(); //This creates the initial object called Snake
  pickLocation(); //Runs the pickLocation function
}

function pickLocation (){ //Pick the food location
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function draw() {
  background(51,51,51,200);
  frameRate(rate);
  //All this are functions inside the snake object
  s.ls();
  s.death();
  s.update();
  s.show();
  s.tx();

  if(s.eat(food)) { //This accions will ocurr if the snake eats a piece of food
    pickLocation();
    r=random(255);
    g=random(255);
    b=random(255);
    frameRate(rate++);
  }

  //the food cualities
  noStroke();
  fill(r,g,b);
  ellipseMode(CORNER);
  ellipse(food.x, food.y, scl, scl);
  //GUIDE FOR THE FOOD COLOR
  rect(480,10, 30, 30, 125);
  textSize(16);
  textAlign(CENTER);
  text("IS OF THIS COLOR", 450, 50, 100, 200);
}

function keyPressed(){ //Set de directions of the snake
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
  //Made by Rosi
