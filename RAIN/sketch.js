//This is based on this video of Daniel Shiffman:
  //https://www.youtube.com/watch?v=KkyIDI6rQJI&list=PLRqwX-V7Uu6ZiZxtDDRCi6uhfTH4FilpH&index=4
var rainDrop = []

function setup() {
  createCanvas(600, 600)
  for (i = 0; i < 600; i++) { //creates a rain drop object
    rainDrop[i] = new drop()
  }
}

function draw() {
  background(102, 178, 255)
  for (var i = 0; i < rainDrop.length; i++) { //runs the rain drops fuctions
    rainDrop[i].update()
    rainDrop[i].show()
  }
}
  //By Rosi
