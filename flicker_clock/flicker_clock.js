//This the flicker_clock..which will flicker for each second and it will show our current computer  time.
//Tamil Ravi

function setup() {
  createCanvas(800, 600);
  angleMode(DEGREES);  
}

function draw() {
  background(0);
  translate(400, 300);
  rotate(-90)
  
  let hr = hour();
  let mn = minute();
  let sc = second();
  
  strokeWeight(8);
  //stroke(255, 100,150);
  stroke(255,random(255), random(255));
  noFill();
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 480, 480, 0, secondAngle);
  
  strokeWeight(8);
  //stroke(150, 100,255);
  stroke(random(255),random(255), 255);
  noFill();
  let minAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 370, 370, 0, minAngle);
  
  strokeWeight(8);
  //stroke(150, 255 ,100);
  stroke(random(255),255,random(255));
  noFill();
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 270, 270, 0, hourAngle);
  
  push();
  rotate(secondAngle);
  strokeWeight(10);
  //stroke(255,100,150);
  stroke(255,random(255), random(255));
  line(0,0,220,0);
  fill(255);
  ellipse(225,0, 10);
  strokeWeight(3);
  textSize(30);
  text(sc, 245, 25);
  pop();
  
  push();
  rotate(minAngle);
  //stroke(150,100, 255);
  stroke(random(255),random(255), 255);
  strokeWeight(15);
  line(0,0,165,0);
  fill(255);
  ellipse(165,0, 15);
  strokeWeight(3);
  textSize(30);
  text(mn, 190, 25);
  pop();  
  
  push();
  rotate(hourAngle);
  //stroke(150,255,100);
  stroke(random(255),255,random(255));
  strokeWeight(20);
  line(0,0,110,0);
  fill(255);
  ellipse(110,0, 20);
  strokeWeight(3);
  textSize(30);
  text(hr, 140, 25);
  pop();
  
  
  rotate(90);
  fill(255);
  stroke(255, 255 ,255);
  ellipse(0,0, 8);
  
}
