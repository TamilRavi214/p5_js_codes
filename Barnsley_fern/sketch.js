let x = 0;
let y = 0;

function setup(){
  var p5_canvas = createCanvas(600, 600);
  background(0);
}

function next_point(){
  let r_prob = random(1);
  let next_x;
  let next_y;
  if(r_prob < 0.01){
    next_x = 0;
    next_y = 0.16 * y;
  }else if(r_prob < 0.86){
    next_x =  0.85 * x + 0.04 * y ;
    next_y = -0.04 * x + 0.85 * y + 1.6;
  }else if(r_prob < 0.93){
    next_x =  0.2 * x - 0.26 * y;
    next_y = 0.23 * x + 0.22 * y + 1.6;
  }else{
    next_x = -0.15 * x + 0.28 * y;
    next_y =  0.26 * x + 0.24 * y + 0.44;
  }
  x = next_x;
  y = next_y;
}

function draw_point(width_draw_1, width_draw_2, height_1, height_2){
  strokeWeight(2);
  //−2.1820 < x < 2.6558 and 0 ≤ y < 9.9983.
  let px = map(x, -2.1820, 2.6558, width_draw_1, width_draw_2);
  let py = map(y, 0, 9.9983, height_1, height_2);
  //stroke(34, 139, 34);
  if(py < 120){
    stroke(255, 100, 100, 50);
  }else if(py < 240){
    stroke(252, 8 , 236, 50);
  }else if(py < 360){
    stroke(57, 8 , 252, 50);
  }else if(py < 480){
    stroke(8 , 252, 236, 50);
  } else{
    stroke(125, 255,100,50);
  }
  point(px, py);

  //ellipse(px, py, 8, 8);
}

function draw(){
  let width_draw_1 = width;
  let width_draw_2 = 0;
  let height_1 = height;
  let height_2 = 0;
  for(let i=0; i < 500; i++){
    draw_point(width_draw_1, width_draw_2, height_1, height_2);
    next_point();
  }
}
