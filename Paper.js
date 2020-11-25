class Paper {
    constructor(x,y,r) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
           'isStatic':false
      }
      this.x = x;
      this.y= y;
      this.radius=r;
      this.body = Bodies.circle(this.x, this.y, this.radius/2, options);

      
      World.add(world, this.body);
    }
    display(){
      push();
      translate(this.body.position.x,this.body.position.y);
      strokeWeight(3);
      fill("pink");
      ellipse(0,0,this.r,this.r);
      pop();
    }
  };