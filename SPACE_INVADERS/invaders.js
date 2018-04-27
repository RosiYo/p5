function Invader(x, y, r, dir) {
  this.x = x
  this.y = y
  this.r = r
  this.toDelete = false
  this.dir = dir

  this.show = function() {
    fill(255)
    image(UFOimg,this.x, this.y, this.r * 2+6, this.r * 2)
  }

  this.eliminate = function(){
    this.toDelete = true
  }

  this.move = function(){
    if (this.dir === 0){
      this.x = this.x + invV
    }else if (this.dir === 1){
      this.x = this.x - invV
    }
    if (this.x > width - 20 || this.x < 0) {
      this.y = this.y + 40
      if (this.dir === 0){
        this.dir++
      }else if (this.dir === 1){
        this.dir--
      }
    }
  }
}
