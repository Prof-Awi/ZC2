class Base{
    constructor(x,y,w,h,color,isStatic){
        var options = {
            isStatic:isStatic,
            }
        this.w = w
        this.h = h
        this.body = Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body)
        
    }
    display(){
        push()
        rectMode(CENTER)
        translate(this.body.position.x,this.body.position.y)
        rect(0,0,this.w,this.h)
        pop()

    }

}