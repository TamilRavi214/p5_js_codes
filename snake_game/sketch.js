let snak;
let scal = 20;
let food;

let check_back_x1 = false;
let check_back_y1 = false;
let check_back_x2 = false;
let check_back_y2 = false;

let check_game = false;
let get_input_flg = false;
let username = "";

// function start_game(){
//   console.log("Welcome " + input_name.value());
//   username = input_name.value();
//   input_name.remove();
//
//   get_input_flg = true;
// }

function setup(){
  createCanvas(800, 600);
  snak = new Snake();
  pickFoodLocation();
}

function draw(){
  background(51);
  push();
  fill(125, 255, 100);
  textSize(30);
  text("SCORE : " + snak.score, width - 220, 30);
  fill(255);
  line(0, 40, width, 40);
  line(width - 40, 0, width-40, height);
  line(0, height - 40, width, height - 40);
  line(40, 0, 40, height);
  pop();
  translate(40, 40);
  if(check_game == true){
    push();
    stroke(255, 0, 0);
    fill(255, 0, 0);
    textSize(64);
    text("Game Over !!!", (width/2) - (width/4), height/2 - 40);
    pop();
    push();
    textSize(30);
    fill(0, 255, 0);
    text("Press 'r' to strat again", (width/2) - (width/4) + 40, height/2);
    pop();
  }else{
    snak.death();
    snak.update();
    snak.show();
    frameRate(10);
    if(snak.eat(food)){
      pickFoodLocation();
    }
    fill(255,0, 0);
    ellipse((food.x + scal/2), (food.y + scal/2), scal, scal);
    }
  // fill(255, 0, 0);
  // rect(food.x, food.y, scal, scal);
}


function pickFoodLocation(){
  let cols = floor((width-80)/scal);
  let rows = floor((height-80)/scal);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scal);
}

function keyPressed(){
  if(key == '%' && check_back_x1 == false){
    snak.dir(-1, 0);
    check_back_x2 = true;
    check_back_y1 = false;
    check_back_x1 = false;
    check_back_y2 = false;
   //console.log("pressed left");
 }else if(key == '\'' && check_back_x2 == false){
   snak.dir(1, 0);
   check_back_x2 = false;
   check_back_y1 = false;
   check_back_x1 = true;
   check_back_y2 = false;
   //console.log("pressed right");
 }else if(key == '&' && check_back_y2 == false){
   snak.dir(0, -1);
   check_back_x2 = false;
   check_back_y1 = true;
   check_back_x1 = false;
   check_back_y2 = false;
   //console.log("pressed up");
 }else if(key == '(' && check_back_y1 == false){
   //console.log("pressed down");
   snak.dir(0, 1);
   check_back_x2 = false;
   check_back_y1 = false;
   check_back_x1 = false;
   check_back_y2 = true;
 }else if(key == 'R'){
   check_game = false;
 }
}
