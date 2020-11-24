class Plinko{
    constructor(x,y){
      var options = {
         isStatic: true
      }
      this.body = Bodies.circle(x,y,20,options);
      this.radius = this.body.circleRadius;
      this.color=color(random (0,255),random(0,255),random(0,255))
      World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill (this.color)
        ellipseMode(CENTER)
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}