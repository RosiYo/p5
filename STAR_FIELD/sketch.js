//Special thanks to The Coding Train because I use his code as my base code
  //Here is the link to his video https://www.youtube.com/watch?v=17WoOqgXsRM&t=217s

var star=[]
var speed= 1;

function keyPressed(){ //The direccion of the camera
  if (keyCode === UP_ARROW){
    speed++
  }else if (keyCode === DOWN_ARROW){
    speed--
  }else if (keyCode === ENTER){
    speed = 1
  }
}

function setup() {
  createCanvas(600,600)
  for(var i=0; i<1000; i++){
    star[i] = new Star() //Creates a new object called Star
  }
}

function draw() {
  background(51)
  translate(width/2,height/2) //It focus the point of view
  for(var i=0; i<800; i++){
    //this are the functions inside the Star object
    star[i].update()
    star[i].show()
  }
}
  //Made by Rosi
