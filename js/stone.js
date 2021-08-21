class Stone {
    constructor(x,y,w,h){
        var options = {
            restitution:0.8
            //friction:9.0,
            //density:1.0,
           // isStatic:true
        }

        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        this.image = loadImage("stone.png");

        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER);
       //fill("green");
       //noStroke();
        image(this.image,0,0,this.w,this.h);
        pop();
    }   
}