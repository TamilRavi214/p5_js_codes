//This java script will generate a saw tooth signal
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
  let radius = 0;
  for(i = 0; i < 5; i++){
      let n= i +1;
      let prevx = x;
      let prevy = y;
      if (n % 2 == 1){
        radius = 100 * (2 /(n * -PI));
      } else{
      //let n = (i*2)+1;
        radius = 50 * (2 /(n * PI));
      }
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
