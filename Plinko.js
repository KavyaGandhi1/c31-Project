class Plinko{
    constructor(x,y){
    var options={
        isStatic: true
    }
        this.body = Bodies.circle(x,y,10,options);
        this.r = 10;
        World.add(world,this.body);
    }
    display(){
         ellipseMode(RADIUS);
         fill("powderblue");
         ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
    }
}