let max_scal = 10;
let min_scal = 4
let scal = min_scal;
let hearts = [];
let beat_speed = 0.4;

function setup(){
  createCanvas(600, 600);
  for(let t = 0; t <= TWO_PI; t = t+0.05){
     x = -(16 * pow(sin(t), 3));
     y = -((13 * cos(t)) - (5 * cos(2*t)) - (2*cos(3*t)) - cos(4*t));
     hearts.push(createVector(x,y));
  }
}

function draw(){
  background(0);
  translate(width/2, height/2);
  beginShape();
  strokeWeight(8);
  stroke(240,128,128, 255-80);
  fill(255,0,0);
  for(let i=0; i < hearts.length; i++){
    vertex(scal * hearts[i].x, scal * hearts[i].y);
  }
  endShape();
  if ((scal > max_scal) || (scal < min_scal)){
    beat_speed *= -1
  }
  scal += beat_speed;
}
