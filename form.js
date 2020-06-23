class Form{
    constructor(){
        this.input  = createInput("Name : ");
        this.title = createElement("h2");
        this.PlayB = createButton("Play");
        this.startB = createButton("Start Match");
        this.name = createElement("h3")

    
    }
    display(){
        this.title.position(200,100)
        this.startB.position(100,100)
        this.PlayB.position(400,400);
        this.input.position(300,300)
        this.title.html("ZOMBIE INVASION")
        this.name.position(displayWidth-250,100);

        this.name.hide();
        this.startB.hide();
        
        this.PlayB.mousePressed(()=>{
            var name = this.input.value()
            this.startB.show();
            this.name.show();
            this.name.html(name);
            this.input.hide();
            this.title.hide();
            this.PlayB.hide();

            gameState = 1

        })
        this.startB.mousePressed(()=>{
            this.startB.hide();
            gameState = 2;
        })
    }
}