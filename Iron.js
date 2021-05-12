class Iron{
    constructor(x,y,width,height){
        var options={
            restitution:0.8,
            frition: 3,
            density: 30
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;

        this.body=Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        World.add(world, this.body)
    }
    display()
    {
        var ironpos=this.body.position;
        var ironang = this.body.angle;
        push()
        translate(ironpos.x,ironpos.y);
        rotate(ironang);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("black");
        fill("black");
        rect(0,0,this.width, this.height);
        pop();
    }
    
}