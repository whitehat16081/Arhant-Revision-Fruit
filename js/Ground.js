class Ground{

    constructor(){
        //Debug this code
        var ground_options={
            isStatic : false
          }
        
          //Debug this code
          this.ground = Bodies.rect(450,390,900,20,ground_options)
          World.add(world,this.ground);
    }
    display(){
        noStroke();
        fill(188,67,67);
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,900,20);
    }
}