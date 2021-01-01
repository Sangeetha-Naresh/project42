class Umbrella 
{
    constructor(x,y)
    {
        var options = 
        {
            isStatic: true
        }

        this.manimage=loadAnimation("Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png",
                                    "Walking Frame/walking_4.png","Walking Frame/walking_5.png","Walking Frame/walking_6.png",
                                    "Walking Frame/walking_7.png","Walking Frame/walking_8.png");
        this.umbrella = Bodies.circle(x,y-100,90,options);
        this.radius = 50;
        World.add(world, this.umbrella)
    }

    display()
    {
    
      var pos = this.umbrella.position;
      push();
      scale(0.5);
      animation(this.manimage,pos.x+150,pos.y+450);
      pop();
    
   
    }
}