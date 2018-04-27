let ship
let beams = []
let invaders = []
let invaders2 = []
let x = 20
let x2 = 20
let y = 20
let y2 = 140
let rInv = 10
let rInv2 = 10
let rBeam = 8
let order = 0
let dir = 0
let squares = 29
let inv2Amount = 5
let nShoots = 1
let level = 1
let invV = 0
let rColor = 0
let gColor = 255
let SPimg
let UFOimg
let UFO2img
let BEAMimg
let SPACEimg
let EXPsnd
let SHTsnd
let WINsnd
let LOSEsnd

function preload() {
  SPimg = loadImage("IMAGES/SP.png")
  UFOimg = loadImage("IMAGES/UFO.png")
  UFO2img = loadImage("IMAGES/UFO2.png")
  BEAMimg = loadImage("IMAGES/BEAM.png")
  SPACEimg = loadImage("IMAGES/SPACE.jpg")
  EXPsnd = loadSound("SOUNDS/IMPACT.wav")
  SHTsnd = loadSound("SOUNDS/BEAM.wav")
  WINsnd = loadSound("SOUNDS/PASS.wav")
  LOSEsnd = loadSound("SOUNDS/FAIL.wav")
}

function setup() {
  createCanvas(600, 600)
  ship = new Ship()
  for (let i = 0; i < squares; i++) {
    invaders[i] = new Invader(x, y, rInv, dir)
    x += 60
    colocation()
  }
}

function draw() {
  background(SPACEimg)
  frameRate(60)
  levelDisplay()
  nShootsDisplay()
  inv2Display()
  stroke(166, 166, 255, 100)
  strokeWeight(4)
  line(0, height - 80, width, height - 80)

  if(invV === 0){
    push()
    stroke(0)
    textSize(28)
    textAlign(CENTER)
    text("PRESS SPACEBAR TO START", 300, 300)
    pop()
  }

  if (invaders.length === 0) {
    levelPassed()
  } else if (nShoots <= 0) {
    gameOver()
  }

  ship.show()
  ship.pressed()

  for (let i = 0; i < invaders.length; i++) {
    invaders[i].show()
    invaders[i].move()

    if (invaders[i].y > height - 80) {
      gameOver()
    } else if (invaders[i].toDelete) {
      invaders.splice(i, 1)
    }
  }

  for (let i = 0; i < beams.length; i++) {
    beams[i].show()
    beams[i].move()

    if (beams[i].y < 0) {
      beams[i].Eliminate()
      nShoots--
    }

    for (let j = 0; j < invaders.length; j++) {
      if (beams[i].impact(invaders[j])) {
        //console.log("HIT")
        invaders[j].eliminate()
        beams[i].Eliminate()
        EXPsnd.play()
        nShoots++
        if (invV < 4) {
          invV += 0.1
        }
      }
    }
  }

  for (let i = 0; i < beams.length; i++) {
    if (beams[i].toDelete) {
      beams.splice(i, 1)
    }
  }
}




function colocation() {
  if (x > width - 20) {
    y += 40
    if (order === 0) {
      x = 50
      order++
    } else if (order === 1) {
      x = 20
      order--
    }
    dir++
    if (dir === 2) {
      dir = 0
    }
  }
}


function gameOver() {
  x = 20
  y = 20
  invV = 1
  nShoots = 1
  level = 1
  rColor = 0
  gColor = 255

  for (let i = 0; i < beams.length; i++) {
    beams.splice(i)
  }

  for (let i = 0; i < invaders.length; i++) {
    invaders.splice(i)
  }

  for (let i = 0; i < squares; i++) {
    invaders[i] = new Invader(x, y, rInv, dir)
    x += 60
    colocation()
  }

  push()
  stroke(0)
  fill(255, 30, 30)
  textSize(28)
  textAlign(CENTER)
  text("GAME OVER", width / 2, height / 2)
  frameRate(1)
  pop()

  LOSEsnd.play()
}


function levelDisplay() {
  push()
  fill(rColor, gColor, 0)
  textSize(12)
  textAlign(CENTER)
  text("LEVEL: " + level, width - 50, 15)
  pop()
}


function nShootsDisplay() {
  push()
  fill(247, 0, 110)
  textSize(12)
  text(nShoots, 145, 15)
  fill(0, 218, 218)
  text("NUMBER OF SHOOTS: ", 10, 15)
  pop()
}


function levelPassed() {
  y = 20
  x = 20
  level++
  nShoots = 1
  rColor += 50

  if (rColor >= 255) {
    rColor = 255
    gColor -= 50
  }

  for (let i = 0; i < beams.length; i++) {
    beams.splice(i)
  }

  for (let i = 0; i < squares; i++) {
    invaders[i] = new Invader(x, y, rInv, dir)
    x += 60
    colocation()
  }

  push()
  fill(130, 255, 30)
  stroke(0)
  textSize(28)
  textAlign(CENTER)
  text("LEVEL PASSED", width / 2, height / 2)
  frameRate(1)
  pop()

  WINsnd.play()
}


function keyPressed() {

  if (keyCode === ENTER && beams.length < 2) {
    let b = new Beam(ship.x, height - 60, rBeam)
    beams.push(b)
    if(WINsnd.isPlaying() || LOSEsnd.isPlaying()){
      SHTsnd.stop()
    }else{
      SHTsnd.play()
    }
  }

  if (keyCode === 32 && invV === 0){
    invV = 1
  }
}


function inv2Display(){
  if (level === 3){
    for (let i = 0; i<inv2Amount; i++){
      invaders2[i] = new Invader2(x2, y2, rInv2)
      x2 += 60
    }
  }
}
