class Snow{
    constructor(x,y,width,height){
        var options = {
            'density' : 1.0,
            'friction' : 0.8
        }
        this.image = loadImage("snow4.webp");
        this.body = Bodies.rectange(x,y,width,height,options);
        this.velocityY = 3;
        World.add(world,this.body);
    }
    display(){
        var snowpos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(snowpos.x,snowpos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}