function Rain(){
  this.x = random(0, width);
  this.y = random(-500, -50);
  this.z = random(0, 20);
  this.speed = map(this.z, 0, 20, 5, 10);
  this.len = map(this.z, 0, 20, 10, 20);

  this.fall = function(){
    this.grav = map(this.z, 0, 20, 0, 0.5);
    if(this.y > height){
      this.y = random(-500, -50);
      this.speed = random(4, 10);
    }else{
      this.y = this.y + this.speed;
      this.speed += this.grav;
    }
  }

  this.show = function(){
    let thickness = map(this.z, 0, 20, 1, 3);
    fill(138, 43, 226);
    strokeWeight(thickness);
    line(this.x, this.y, this.x, this.y+this.len);
  }
}
