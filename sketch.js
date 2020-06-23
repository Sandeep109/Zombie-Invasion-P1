var form, game,player,bull,zombie1
var LG,ZG;
var gameState = 0
var B1,B2,B3,mage,bullet,zom;
var out,healthBar1,healthBar2,healthBar3,healthBar4,healthBar5;
var gunshot,reload,Zombi;
var score = 0
var lasers =[]
var laserVel = []

frameRate = 120

  

function preload() {
B1 = loadImage("B1.jpg");
B2 = loadImage("B2.jpg");
mage = loadImage("p.png");
bullet = loadImage("bul.png")
B3 = loadImage("bg.jpg")
zom = loadAnimation("z1.gif","z2.gif","z3.gif","z4.gif","z5.gif","z6.gif","z7.gif","z8.gif","z9.gif","z10.gif","z11.gif","z12.gif");
gunshot = loadSound("gun shot.mp3");
reload = loadSound("reload.mp3");
Zombi = loadSound("z.mp3")
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  game = new Game();
  game.reg()


  LG = new Group();
  ZG = new Group();

  lasers = createSprite(180,displayHeight/3*2,60,60)
  lasers.addImage(bullet);
  lasers.visible = false; 
  LG.add(lasers);


  zombie1 =  createSprite(displayWidth*2-displayWidth/2,displayHeight/4*3,250,292);
  zombie1.addAnimation("zom",zom)
  zombie1.visible = true
  zombie1.setCollider("rectangle");
  zombie1.debug = true
  ZG.add(zombie1);
  

  zombie2 =  createSprite(displayWidth*2-displayWidth/3,displayHeight/4*3,250,292);
  zombie2.addAnimation("zom",zom)
  zombie2.visible = true
  zombie2.setCollider("rectangle");
  zombie2.debug = true
  ZG.add(zombie2);

  
  
  zombie3 =  createSprite(displayWidth*2-displayWidth/4,displayHeight/4*3,250,292);
  zombie3.addAnimation("zom",zom)
  zombie3.visible = true
  zombie3.setCollider("rectangle");
  zombie3.debug = true
  ZG.add(zombie3);



  zombie4 =  createSprite(displayWidth*2-displayWidth/5,displayHeight/4*3,250,292);
  zombie4.addAnimation("zom",zom)
  zombie4.visible = true
  zombie4.setCollider("rectangle");
  zombie4.debug = true
  ZG.add(zombie4);



  zombie5 =  createSprite(displayWidth*2-displayWidth/6,displayHeight/4*3,250,292);
  zombie5.addAnimation("zom",zom)
  zombie5.visible = true
  zombie5.setCollider("rectangle");
  zombie5.debug = true
  ZG.add(zombie5);

}

function draw() {
  //trex.debug = true;
  background(255);





  
if(gameState === 0){
  background(B1)
}
else if (gameState === 1){
  background(B2)
}
else{

  background(B3)
  
  game.start();

if(frameCount%60===0){
  zombie1.play();
}
  
  
zombie1.velocityX = -8
zombie2.velocityX = -10
zombie3.velocityX = -12
zombie4.velocityX = -14
zombie5.velocityX = -16
 

  

if ( zombie1.isTouching(lasers) ) {
  reload.play();
 lasers.x = 180;
 lasers.y = displayHeight/3*1;
 lasers.velocityX = 0
 lasers.visible = false;
  zombie1.x = displayWidth*2-displayWidth/2;
  console.log("ZD1")
}
if ( zombie2.isTouching(lasers) ) {
  lasers.x = 180;
  reload.play();
  lasers.y = displayHeight/3*1;
  lasers.velocityX = 0
 lasers.visible = false;
  zombie2.x = displayWidth*2-displayWidth/3;
  console.log("ZD1")
}
if ( zombie3.isTouching(lasers) ) {
  lasers.x = 180;
  reload.play();
  lasers.y = displayHeight/3*1;
  lasers.velocityX = 0
 lasers.visible = false;
  zombie3.x = displayWidth*2-displayWidth/4;
  console.log("ZD1")
}
if ( zombie4.isTouching(lasers) ) {
  lasers.x = 180;
  reload.play();
  lasers.y = displayHeight/3*1;
  lasers.velocityX = 0
 lasers.visible = false;
  zombie4.x = displayWidth*2-displayWidth/5;
  console.log("ZD1")
}
if ( zombie5.isTouching(lasers) ) {
  lasers.x = 180;
  reload.play();
  lasers.y = displayHeight/3*1;
  lasers.velocityX = 0
 lasers.visible = false;
  zombie5.x = displayWidth*2-displayWidth/6;
  console.log("ZD1")
}





}
drawSprites()





}









function keyPressed() {
    //console.log (keyCode); 
    if (keyCode == 32) {
      gunshot.play()
      lasers.x = 180;
      lasers.y = displayHeight/3*2;
      lasers.velocityX = 40
      lasers.visible = true;
        


    }
}