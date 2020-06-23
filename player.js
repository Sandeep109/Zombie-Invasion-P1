class Player{
    constructor(){
        this.P = createSprite(100,displayHeight/4*3,100,100);
        this.image = loadImage("p.png");

    }   
    display(){
        this.P.addImage(this.image)
        
    }
}