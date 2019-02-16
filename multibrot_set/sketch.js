let min_val = -1.5;
let max_val =  1.5;
let max_iter = 100;

let z_power = 10;

function setup(){
  createCanvas(600,600);
  background(0);

}

function draw(){
  pixelDensity(1);
  loadPixels();
  for(var x=0; x < width; x++){
    for(var y=0; y < height; y++){
        var a = map(x , 0, width , min_val, max_val);
        var b = map(y , 0, height, min_val, max_val);

        var ca = a;
        var cb = b;
        var n = 0;

        while (n < max_iter){
          let power_val = pow(pow(a,2)+pow(b,2),z_power/2);
          let aa = power_val * cos(z_power * atan2(b,a));
          let bb = power_val * sin(z_power * atan2(b,a));
          a = aa + ca;
          b = bb + cb;
          if (abs(a + b) > 16){
            break;
          }
          n += 1;
        }
         var bri_val = map(n,0,max_iter, 0, 1);
         var bright1 = 0;
         var bright2 = 0;
         var bright3 = map(bri_val, 0, 1, 10, 255);;
        if (n === max_iter){
           bright1 = 0;
           bright2 = 0;
           bright3 = 0;
        }
        var pix = (x + y * width) * 4;
        pixels[pix + 0] = bright1;
        pixels[pix + 1] = bright2;
        pixels[pix + 2] = bright3;
        pixels[pix + 3] = 255;
    }
  }
  updatePixels();
}
