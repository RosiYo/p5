let nbs = []
let scl = 60
let bl = 20
let rd = 45
let rate = 1;

function setup() {
  createCanvas(600,600)
  cursor(CROSS)
  let cols = width/scl
  let rows = height/scl

  for(let i=0; i < rate; i++){
    nbs[i] = new Bs(cols,rows)
  }
}

function draw() {
  background(0)

  for(let i=0; i < nbs.length; i++){
    nbs[i].show()
    nbs[i].total()
  }
}

function mousePressed(){
  for(let i=0; i < nbs.length; i++){
    nbs[i].clck()
  }
}
