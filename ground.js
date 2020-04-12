class Ground{
    constructor(){
        var options = {
            isStatic:true
        }
        this.body=Bodies.rectangle(200,390,400,20,options);
        World.add(world,this.body);
    this.w=400;
    this.h=20;
    }
    display(){
        var pos = this.body.position;
        fill (0,255,255);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h);
    }
}