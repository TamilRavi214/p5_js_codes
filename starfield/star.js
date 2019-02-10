function star() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(0,width);
    this.sx = 0;
    this.sy = 0;
    let r = 0;
    this.speed = 0;
    this.pz = this.z;

   this.update = function(){
     this.z = this.z - this.speed;//map(mouseX, 0, width, 0, 50); //this.speed;
     if (this.z < 1){
       this.z = width;
       this.x = random(-width, width);
       this.y = random(-height, height);
       this.pz = this.z;
     }
     if(this.speed > 40){
       this.speed = 40;
     }else{
       this.speed += 0.1;
     }
   }
   this.show = function (){
       fill(255, random(200, 255));
       noStroke();
       this.sx = map(this.x/this.z, 0, 1, 0, width);;
       this.sy = map(this.y/this.z, 0, 1, 0, height);
       r = map(this.z, 0, width, 16, 0);

       ellipse(this.sx, this.sy , r, r);

       let px = map(this.x/ this.pz, 0, 1, 0, width);
       let py = map(this.y/ this.pz, 0, 1, 0, height);

       this.pz = this.z;

       stroke(255);
       line(px, py, this.sx, this.sy);
   }

}
