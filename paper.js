class Paper{
        constructor(x, y,radius) {
            var options = {
                'restitution':0.8,
                'friction':1.0,
                'density':1.0
            }
            this.body = Bodies.circle(x,y,radius,options);
            this.radius = radius*2;
            this.paper=loadImage("paper.png");
            World.add(world, this.body);
          }
 
          display(){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            imageMode(CENTER);
            image(this.paper,0,0, this.radius,this.radius);
            pop();
          }
    }
