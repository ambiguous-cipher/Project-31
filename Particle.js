class Particle {
    constructor(x,y,r) {
        var options = {
            isStatic: false
        }
        this.r = r;

        this.body = Bodies.circle(x,y,this.r,options);
        
        this.colour = color(random(0,255), random(0,255), random(0,255));

        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        ellipseMode(RADIUS);
        fill(this.colour);
        ellipse(pos.x, pos.y,this.r, this.r);
        pop();
    }
  };
