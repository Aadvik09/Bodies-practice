 class Ground {


    constructor(x,y,w,h) {

        let options = {
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,w,h,options);
        //w/h
        this.w = w
        this.h = h

        World.add(world,this.body);



    }

    showBody () {
        push();
        rectMode(CENTER)
        fill("green");
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
        pop();
    }
    


 }



