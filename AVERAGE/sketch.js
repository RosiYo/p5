let inputArr = []
let total = 0
let canvas
let slide

function setup() {
  canvas = createCanvas(600,600)
  canvas.position(40,0)
  let y = 150
  for(let i = 0; i<5; i++){
    inputArr[i] = createInput("num " + (i + 1))
    inputArr[i].position(20, y)
    y += 40
  }
}

function draw() {
  clear()
  fill(0)
  textAlign(CENTER)
  textSize(128)
  stroke(4)
  text(total / 5,width/2, height/2)
}

function keyPressed() {
  if (keyCode === ENTER) {
    total = 0
    for(let i = 0 ; i<5; i++){
      total = total + parseInt(inputArr[i].value())
    }
  }
}
