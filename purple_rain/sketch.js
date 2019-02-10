let purp_rain = [];
let num_rain = 800;

function setup(){
  var p5_canvas = createCanvas(window.innerWidth, window.innerHeight);
  for(let i=0; i < num_rain; i++){
     purp_rain.push(new Rain());
   }

}

function draw(){
  background(230, 230, 250);
  for(let i=0; i < num_rain; i++){
    purp_rain[i].show();
    purp_rain[i].fall();
  }
}
