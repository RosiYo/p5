function Bs(cols,rows){
  this.pos = createVector(floor(random(1,cols)), floor(random(1,rows)));
  this.pos.mult(scl);

  this.score = 0
  this.nextlv = 0
  this.real_score = 0

  this.show = function(){
    ellipseMode(CENTER)
    fill(255,250)
    ellipse(this.pos.x,this.pos.y,scl,scl)
    fill(50,50,250,200)
    ellipse(this.pos.x,this.pos.y,scl-bl,scl-bl)
    fill(250,50,50,200)
    ellipse(this.pos.x,this.pos.y,scl-rd,scl-rd)
  }

  this.clck = function (){
    let d = dist(mouseX,mouseY,this.pos.x,this.pos.y)
    if(d<scl/2){
      if(d<scl/2-bl/2){
        this.score= this.score +100
      }
      if(d<scl/2-rd/2){
        this.score = this.score+200
      }
      this.pos = createVector(floor(random(1,cols)), floor(random(1,rows)));
      this.pos.mult(scl);

      this.score = this.score + 50
      this.nextlv=this.score+this.nextlv
      }
      this.real_score= this.real_score + this.score
      console.log(this.real_score)
    }

  this.total = function(){
    if (this.score>500){
      append(nbs,new Bs(cols,rows))
      this.score=0
    }
  }

}
