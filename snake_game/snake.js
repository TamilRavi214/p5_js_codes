function Snake(){
  this.x = width/2;
  this.y = height/2;
  this.xspeed = 0;
  this.yspeed = 0;
  this.score = 0;
  this.tail = [];

  this.dir = function(x, y){
     this.xspeed = x;
     this.yspeed = y;
  }

  this.eat = function(pos){
    let d = dist(this.x, this.y, pos.x, pos.y);
    if(d < 1){
      this.score += 1;
      console.log("snake food score " + this.score);
      return true;
    }else{
      return false;
    }
  }

  this.death = function(){
    for(let i=0; i < this.tail.length; i++){
      let pos_x = this.tail[i];
      let d = dist(this.x, this.y, pos_x.x, pos_x.y);
      if(d < 1){
        this.score = 0;
        this.tail = [];
        this.x = width/2;
        this.y = height/2;
        this.xspeed = 0;
        this.yspeed = 0;
        check_game = true;
      }
    }
  }

  this.update = function(){
    if(this.score === this.tail.length){
      for(let i=0; i < this.score - 1; i++){
        this.tail[i] = this.tail[i+1];
      }
    }
    this.tail[this.score-1] = createVector(this.x, this.y);

    this.x = this.x + this.xspeed*scal;
    this.y = this.y + this.yspeed*scal;

    this.x = constrain(this.x, 0, width-scal-80);
    this.y = constrain(this.y, 0, height-scal-80);
  }

  this.show = function (){
    fill(255);
    for(let i=0; i < this.score; i++){
        rect(this.tail[i].x, this.tail[i].y, scal, scal);
    }
    rect(this.x, this.y, scal, scal);
  }

}
