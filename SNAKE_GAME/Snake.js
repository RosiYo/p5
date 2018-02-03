function Snake() {
  this.x = 20;
  this.y = 20;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];
  this.last=0;
  this.print=0;

  this.eat = function(pos) { //function of what apens if the snake eat food
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total++;
      return true;
    } else {
      return false;
    }
  }

  this.dir = function(x, y) { //It's where the directios are recived
    this.xspeed = x;
    this.yspeed = y;
  }

  this.death = function() { //What happen if the snake die
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        fill(255);
        this.last=this.total;
        this.total = 0;
        this.tail = [];
        rate=8;
        this.x=20;
        this.y=20;
        this.xspeed = 1;
        this.yspeed = 0;
        fill(255,0,100);
        textAlign(CENTER);
        textSize(32);
        text("YOU HAVE DIED",240,260,200,200);
        frameRate(1/2);
      }
    }
  }

  this.update = function() { //This function updates the position of the snake
    for (var i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }
    if (this.total >= 1) {
      this.tail[this.total - 1] = createVector(this.x, this.y);
    }

    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;

    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  }

  this.show = function() { //This is the display of the snake
    fill(255,232,15);
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl);
  }

  this.tx = function() { //Is the score at the upper left corner
    textAlign(LEFT);
    fill(255);
    textSize(18);
    text("SCORE", 10, 10, 50, 20);
    text(this.total, 35, 30, 60, 20);
    fill(255,0,100);
  }

  this.ls = function(){ //And this is the text of the bottom of the canvas
    if(this.print<this.last){ //The best score
      textAlign(LEFT);
      fill(100,230,40);
      text("BEST SCORE: "+ this.last, 450,550,200,200);
      // console.log("last") //testing
      this.print=this.last;
    }else{
      textAlign(LEFT);
      fill(100,230,40);
      text("BEST SCORE: "+ this.print, 450,550,200,200);
      // console.log("print") //testing
    }

    textAlign(LEFT); //the last score
    fill(65,180,225);
    text("LAST SCORE: " + this.last,10,550,200,200);
  }
}
  //Made by Rosi
