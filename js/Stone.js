class Stone{
    constructor(x,y,w,h){
        this.w = w
        this.h = h
        this.image = loadImage("assets/stone.png")
        var options = {
            restitution:0.8
        }
        this.body = Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body)
    }

    display(){
        push()
        imageMode(CENTER)
        translate(this.body.position.x,this.body.position.y)
        image(this.image,0,0,this.w,this.h)
        pop()
    }
}