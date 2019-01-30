//This is the drawing machine with DFT. We can draw any object. It will read and repeat drawing the same object.
//Tamil Ravi;
const USER = 0;
const FOURIER = 1;

let y = [];
let x = [];
let fourierY;
let fourierX;
let drawing = [];
let state = -1;//FOURIER;


let time=0;
let path = [];

function dft(x){
  let X = [];
  let N = x.length;
  for(let k = 0; k < N; k++){
    let re = 0;
    let imag = 0;
    for(let n = 0; n < N; n++){
      const eps = (TWO_PI * k * n)/N;
      re +=  x[n] * cos(eps);
      imag -= x[n] * sin(eps);
    }
    re = re/N;
    imag = imag/N;
    
    let freq = k;
    let amp = sqrt(re * re + imag*imag );
    let phase = atan2(imag, re) ;
    
    X[k] = {re, imag, freq, amp, phase};
  }
  return X;
}

function setup() {
  createCanvas(800,600)
    const skip = 0;
  for(let i = 0; i < drawing.length; i += skip){
    x.push(drawing[i].x)
    y.push(drawing[i].y)
    
  }
  fourierY = dft(y);
  fourierX = dft(x);
  
  fourierX.sort((a,b) => b.amp - a.amp);
  fourierY.sort((a,b) => b.amp - a.amp);
}

function epiCycles(x,y, rotation, fourier){
  for(j=0; j < fourier.length; j++){
   let prevx = x;
   let prevy = y;
   
   let freq = fourier[j].freq;
   let radius = fourier[j].amp;
   let phase = fourier[j].phase;
   //let n = j+1;//(j * 2)+ 1;
   //let radius = 0;
   //if (n%2 == 0){
   //let radius = 100 * (4 /(n * PI));
  //  radius = 100 * (2 /(n * PI));
   //}
   //else{
  //   radius = 100 * (2 /(-n * PI));
   //}
   x += radius * cos(freq * time + phase + rotation);
   y += radius * sin(freq * time + phase + rotation);
 
   stroke(255);
   strokeWeight(5);
   noFill();
   ellipse(prevx,prevy,radius*2);
 
 
  fill(255);
  stroke(125, 125, 200)
  line(prevx,prevy,x,y);
  stroke(0, 255, 0);
  strokeWeight(7);
  ellipse(x,y,8);
 }
 
 return createVector(x,y);
  
}


function mousePressed(){
  state = USER;
  drawing = [];
  x = [];
  y = [];
}


function mouseReleased(){
  state = FOURIER;
  const skip = 1;
  for(let i = 0; i < drawing.length; i += skip){
    x.push(drawing[i].x);
    y.push(drawing[i].y);
  }
  fourierY = dft(y);
  fourierX = dft(x);
  
  fourierX.sort((a,b) => b.amp - a.amp);
  fourierY.sort((a,b) => b.amp - a.amp);
}


function draw() {
 background(125);
 
 if (state == USER){
     let point = createVector(mouseX - width/2, mouseY - height/2);
     drawing.push(point)
     stroke(255);
     noFill();
     beginShape();
     for(let v of drawing){
       vertex(v.x + width/2, v.y +height/2);
     }
     endShape();
 
 }else if(state == FOURIER)
 {
 let vx = epiCycles(width/2, 100, 0, fourierX);
 let vy = epiCycles(100, height/2, HALF_PI, fourierY);
 let v = createVector(vx.x, vy.y);
 
 path.unshift(v)
 
 
 stroke(0);
 strokeWeight(2);
 line(vx.x, vx.y, v.x, v.y);
 line(vy.x, vy.y, v.x, v.y);
 
 stroke(255,0,0)
 strokeWeight(2);
 beginShape();
 noFill();
 for(i =0; i< path.length; i++){
   vertex(path[i].x, path[i].y);
 }
 endShape();
 
 //if(wave.length > 500){
//   wave.pop();
 //}
 
 const dt =  TWO_PI / fourierY.length;
 time += dt ;
 
 if (time > TWO_PI){
   time = 0;
   path = [];
 }
 }
}