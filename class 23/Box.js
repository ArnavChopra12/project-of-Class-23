class Box {
  constructor(x, y, width, height) { //200,300,50,50
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;//50
    this.height = height;//50
    
    World.add(world, this.body);
  }
 
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
  
    push();
    translate(pos.x, pos.y);
    rotate(angle)
    rectMode(CENTER);
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();
  }
};
