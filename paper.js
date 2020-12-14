class paper {
constructor(x, y, radius) {
    var options={
        'isStatic':false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
    }
    this.x=x;
    this.y=y;
    this.r=radius;
    
    this.body=Matter.Bodies.circle(this.x,this.y,this.r/2,options)
   
    
    

World.add(world,Paper);

}

display(){
    var pos =this.body.position;
    push();
    fill('green')
    rectMode(CENTER);
    background(0);
    ellipse(pos.x, pos.y, r);
    pop();
}
}