let count = 200;
let rad;
let table_value = 0.01;
let inc_val = 0.01;
let change_color = 0;
let inc_change_color = 1;

function get_value(index){
  let angle = map(index % count, 0, count, 0, TWO_PI);
  let cord = createVector(rad*cos(angle + PI/2), rad*sin(angle + PI/2));
  return cord;
}


function setup(){
  createCanvas(600,600);
  //createCanvas(window.innerWidth,window.innerHeight);
  rad = height/2 - 20
}

function draw(){
    background(0);
    translate(width/2, height/2);
    if(table_value > change_color && inc_change_color == 1){
       stroke(random(255), random(125), random(100));
       strokeWeight(2);
       change_color += inc_change_color;
    }else if (table_value < change_color && inc_change_color == -1){
      stroke(random(255), random(125), random(100));
      strokeWeight(2);
      change_color += inc_change_color;
    }
    noFill();
    ellipse(0, 0, rad*2)
    for(let i=0; i< count; i++){
      let cord = get_value(i);
      let cord_A = get_value(i);
      let cord_B = get_value(i*table_value);
      line(cord_A.x, cord_A.y, cord_B.x, cord_B.y);
    }
    table_value += inc_val;
    if (table_value > 2 || table_value < 0){
      inc_val *= -1;
      inc_change_color *= -1;
    }
}
