class Zombie{
    constructor(){
        this.body = createSprite(displayWidth*2-displayWidth/2,displayHeight/4*3);
        this.body.velocityX = -5
        this.image = loadAnimation("z1.gif","z2.gif","z3.gif","z4.gif","z5.gif","z6.gif","z7.gif","z8.gif","z9.gif","z10.gif","z11.gif","z12.gif");

    }
    display(){
        this.body.addAnimation("zom",this.image)
    }
}