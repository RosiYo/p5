function Star (){
  //Sets a random location for an star from -600 to 600 (in the "x" and "y" axes)
    //This is because the translate that we do before it focus in the upper left corner
  this.x = random(-width,width)
  this.y = random(-height,height)
  this.z = random(-width,width) //Actually this is NOT the "z" axis because it is like in perspective

  this.sx
  this.sy
  this.r
  this.px
  this.py
  this.pz

  this.update=function(){
    this.z = this.z-speed //this is where the velocity goes every time
    //What happen if you are going straight
    if(this.z<1){
      this.z = width
      this.x = random(-width,width)
      this.y = random(-height,height)
      this.pz = this.z
    }
    //What happens if you go backwards
    if(this.z>width){
      this.z = random(width)
      this.x = random(-width,width)
      this.y = random(-height,height)
      this.pz = this.z
    }
  }

  this.show=function(){ //The display of the star and a line
    fill(255)
    noStroke()

    //The star position
    this.sx=map(this.x/this.z,0,1,0,width)
    this.sy=map(this.y/this.z,0,1,0,height)

    this.r=map(this.z,-width,width,12,0)
    ellipse(this.sx,this.sy,this.r,this.r) //It draws the star

    //Set the line position
    this.px=map(this.x/this.pz,0,1,0,width)
    this.py=map(this.y/this.pz,0,1,0,height)

    this.pz = this.z 

    stroke(255)
    strokeWeight(3)
    line(this.sx,this.sy,this.px,this.py) //A line that seems to give more speed sensation
  }
}
  //Made by Rosi
