var PLAY = 1;
var END = 0;
var gameState = PLAY;
var jetman,jetmanImg;
var sky,skyImg;
var Spaceship,SpaceshipImg,SpaceshipGroup;
var gameState
var gameOver,gameOverImg;
var restart,restartImg;
var score;




function preload(){
skyImg=loadImage("sky.jpg");
jetmanImg=loadImage("jetman.jpg");
SpaceshipImg=loadImage("spaceship.jpg");
gameOverImg=loadImage("gameOver.jpg");
restartImg=loadImage("restart.jpg");



 



}

function setup() {
//creating sky
sky=createSprite(250,220,10,10);
sky.addImage("moving",skyImg);
sky.scale=2;


//creating jetman
jetman=createSprite(150,300,10,10);
jetman.addImage("flying",jetmanImg);
jetman.scale=0.1;



// creating gameOver
gameOver=createSprite(204,200,10,10);
gameOver.addImage("visible",gameOverImg);
gameOver.scale=1;

// creating restart
restart=createSprite(204,350,10,10)
restart.addImage("visible",restartImg)
restart.scale=0.1;

Spaceship=createGroup();
var rand =  Math.round(random(10,150))
  
 
score= 0;
 
}



function draw() {
  background("white");
  
   if(gameState === PLAY){

    gameOver.visible = false;
    restart.visible = false;
    sky.velocityY=5;
   if (sky.y > 400) {
     sky.y=height/2
   }
    
   score = score + Math.round(getFrameRate()/60);
    
    
    
    jetman.x=World.mouseX
    
    
    
  
    spawnSpaceship()
  if(SpaceshipGroup.isTouching(jetman)){
        
        gameState = END;
       
    }
    
  }
   else if (gameState === END) {
      gameOver.visible = true;
      restart.visible = true;
     
    
     
     
      sky.velocityY = 0;
  
      
     
     
    SpaceshipGroup.setLifetimeEach(-1);
    
     
     SpaceshipGroup.setVelocityYEach(0);
      
   }
  

 
 drawSprites();
 textSize(20);
  stroke(3);
  fill("white");
 text("Score: "+ score, 15,40);
textSize(15);
fill("white");
stroke(3)
text("PlayerControl=Move your mouse to left and right",15,70);
 }
  


   

   
function spawnSpaceship(){
if (frameCount % 60===0) {
  Spaceship=createSprite(600,100,40,10);
 Spaceship.addImage("moving",SpaceshipImg);
 Spaceship.x=Math.round(random(200,550))
 Spaceship.scale=0.2;
Spaceship.velocityY=4;
 Spaceship.lifetime = 65;

}
 

 
}
 
 
 


 


 
 
  

    
      

   


      

    

  