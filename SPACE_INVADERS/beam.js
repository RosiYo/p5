function Beam(x, y, r) {
  this.x = x
  this.y = y
  this.r = r
  this.toDelete = false

  this.show = function() {
    image(BEAMimg,this.x+15, this.y-10, this.r * 2, this.r * 2)
  }

  this.move = function() {
    this.y = this.y - 10
  }

  this.impact = function(invader) {
    let d = dist(this.x, this.y, invader.x, invader.y)
    if (d < this.r + invader.r) {
      return true
    } else {
      return false
    }
  }

  this.Eliminate = function(){
    this.toDelete = true
  }
}
