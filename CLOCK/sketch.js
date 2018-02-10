
function setup() {
  createCanvas(600,600)
  angleMode(DEGREES)
}

function draw() {
  background(51)
  var minDg = minute()*6;
  var sgDg = second()*6;
  var hrDg = hour()*15;
  var yr = year()
  var dy = day()
  var mth = month()

  push()
  translate(width/2,height/2)
  rotate(-90)
  strokeWeight(4)
  noFill()
  stroke(102,153,255)
  arc(0,0,400,400,0,sgDg)
  stroke(51,102,204)
  arc(0,0,350,350,0,minDg)
  stroke(51,51,153)
  arc(0,0,300,300,0,hrDg)
  pop()

  push()
  strokeWeight(4)
  translate(width/2,height/2)
  rotate(-90)
  for (var i=0;i<60;i++){
    if (sgDg/6 >= i)  {
      stroke(102,153,255)
      line(190,0,200,0)
      rotate(6)
    }
  }
  pop()

  push()
  strokeWeight(4)
  translate(width/2,height/2)
  rotate(-90)
  for (var i=0;i<60;i++){
    if (minDg/6 >= i)  {
      stroke(51,102,204)
      line(165,0,175,0)
      rotate(6)
    }
  }
  pop()

  push()
  strokeWeight(4)
  translate(width/2,height/2)
  rotate(-90)
  for (var i=0;i<24;i++){
    if (hrDg/15 >= i)  {
      stroke(51,51,153)
      line(140,0,150,0)
      rotate(15)
    }
  }
  pop()

  textFont("Century Gothic")
  fill(100,250,200)
  textSize(40)
  textAlign(CENTER)
  text(dy+"/"+mth+"/"+yr,300,300)
}
