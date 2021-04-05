class Ground {
    constructor(x, y, width, height) { //200,300,50,50
      var options = {
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;//50
      this.height = height;//50
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //pos = pos.x,pos.y
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };