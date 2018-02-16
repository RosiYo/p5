function drop() {
  this.x = random(-100, width)
  this.y = random(0, -900)
  this.z = random(0, 20)
  this.yspeed = map(this.z, 0, 20, 5, 8)
  this.wind = map(this.z, 0, 20, 1, 2)

  this.update = function() { //set the movement of the drop
    this.y = this.y + this.yspeed
    this.grav = map(this.z, 0, 20, 0, 0.2) //sets the gravity
    this.yspeed = this.yspeed + this.grav //makes the drop to go faster every time
    if (this.y > height) { //resets the drop
      this.y = random(0, -900)
      this.yspeed = map(this.z, 0, 20, 5, 10)
      this.x = random(-100, width)
    }
    this.x = this.x + this.wind //gives to the drop a wind effect
  }

  this.show = function() { //it's the apperence of the drop
    stroke(51,51,255)
    line(this.x, this.y, this.x + 3, this.y + 10)
  }
}
