function Ball(){
  this.loc = createVector(width/2, height/2);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);

  this.display = new function(){
    fill(255);
    ellipse(this.loc.x, this.loc.y, 40, 40);
  }
}
