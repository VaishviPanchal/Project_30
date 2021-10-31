class Ground{

    constructor(){
        var ground_options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(450,390,900,20,ground_options)
          World.add(world,this.ground);
    }
    display(){
        strokeWeight(1.7);
        stroke(15);
        fill(128,142,196);
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,898,18);
    }
}