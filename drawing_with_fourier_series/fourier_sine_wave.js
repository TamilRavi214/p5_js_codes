//This javascript is a drawing with the fourier series of sine wave as showed in the wikipedia fourier series explanation
//Tamil Ravi

let time = 0;
let wave = [];

function setup() {
  createCanvas(800,600)
}

function draw() {
  background(0);
  translate(200,200);
  let x = 0;
  let y = 0;
  for(i = 0; i < 100; i++){
      let prevx = x;
      let prevy = y;
    
      let n = (i*2)+1;
      let radius = 50 * (4 /(n * PI));
      x += radius * cos(n * time);
      y += radius * sin(n * time);
  
      stroke(255);
      strokeWeight(2);
      noFill();
      ellipse(prevx,prevy, radius*2);
      
      stroke(255, 255, 0);
      line(prevx,prevy,x,y);
      
      fill(255, 0, 0);
      ellipse(x, y, 8);
  }
  
  wave.unshift(y);
  
  translate(200,0)
  stroke(255,0,0)
  line(x - 200, y, 0, wave[0]);
  
  beginShape();
  noFill();
  for(i=0; i< wave.length; i++){
    vertex(i, wave[i]);
  }
  endShape();
  
  if( wave.length > 250){
     wave.pop();
  }
    
  time += 0.05;  
}
