// Inspired by a chalenge
  // I did this Code because I was very busy, and I wasn't able to do something difficult ;)
function setup() {
  createCanvas(600,600)
  angleMode(DEGREES) //I prefer dgrees to radians, so I changed it
}

function draw() {
  background(51)
  //This are all the variables I used
  var minDg = minute()*6;
  var sgDg = second()*6;
  var hrDg = hour()*15;
  var hr = hour()
  var min = minute()
  var sg = second()
  var yr = year()
  var dy = day()
  var mth = month()
  var mll = millis()
//This are the circles of hours, minutes and seconds
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
//The lines in the seconds' circle
  push()
  strokeWeight(4)
  translate(width/2,height/2)
  rotate(-90)
  for (var i=0;i<60;i++){
    if (sg >= i)  {
      stroke(102,153,255)
      line(190,0,200,0)
      rotate(6)
    }
  }
  pop()
//The lines in the minutes' circle
  push()
  strokeWeight(4)
  translate(width/2,height/2)
  rotate(-90)
  for (var i=0;i<60;i++){
    if (min >= i)  {
      stroke(51,102,204)
      line(165,0,175,0)
      rotate(6)
    }
  }
  pop()
//The lines in the hours' circle
  push()
  strokeWeight(4)
  translate(width/2,height/2)
  rotate(-90)
  for (var i=0;i<24;i++){
    if (hr >= i)  {
      stroke(51,51,153)
      line(140,0,150,0)
      rotate(15)
    }
  }
  pop()
//White rectangle
  rectMode(CENTER)
  fill(240)
  noStroke()
  rect(300,320,130,40)
//Dates and numbers in the screen
  fill(255)
  textAlign(LEFT)
  textSize(18)
  text("MILISECONDS:"+floor(mll),420,20)
  textAlign(CENTER)
  textSize(30)
  fill(30)
  text(hr+":"+min+":"+sg,300,330)
  textSize(40)
  textFont("Century Gothic")
  fill(100,250,200)
  text(dy+"/"+mth+"/"+yr,300,290)
}
  //By Rosi
