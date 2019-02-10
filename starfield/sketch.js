
var stars = [];
let num_stars = 1000;

function setup(){
  let p5_canvas = createCanvas(640, 480);//window.innerWidth,window.innerHeight);  
  for(let i=0; i < num_stars; i++){
    stars[i] = new star();
  }
}

function draw(){
  translate(width/2, height/2)
  background(0);
  for(let i=0; i < num_stars; i++){
    stars[i].update();
    stars[i].show()
  }
}
