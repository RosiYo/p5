function Ship(){
  this.x = width/2

  this.pressed = function(){
    if(keyIsDown(LEFT_ARROW) && this.x>0){
      this.x = this.x - 2
    }else if(keyIsDown(RIGHT_ARROW) && this.x<width - 20){
      this.x = this.x + 2
    }
  }

  this.show = function(){
    fill(255)
    noStroke()
    image(SPimg,this.x,height-60,45,50)
  }
}
