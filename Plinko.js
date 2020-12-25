class Plinko {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,10,options);
      World.add(world, this.body);
    }
    display(){
      push()
      var pos =this.body.position;
      rectMode(CENTER);
      noStroke();
      fill(255);
      ellipse(pos.x, pos.y, 10);
      pop()
    }
  };
