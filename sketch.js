var bowimg,bgimg,redbimg,pinkbimg,bluebimg,yellowbimg,greenbimg,arrowimg;
var bow,bg,redb,pinkb,blueb,yellowb,greenb,arrowb;
var score=0;
var redBGroup,blueBGroup,greenBGroup,pinkBGroup,arrowGroup;



function preload(){
 //load your images here 
  arrowimg=loadImage("arrow0.png")
  bgimg=loadImage("background0.png")
  bluebimg=loadImage("blue_balloon0.png")
  greenbimg=loadImage("green_balloon0.png")
  redbimg=loadImage("red_balloon0.png")
  pinkbimg=loadImage("pink_balloon0.png")
  bowimg=loadImage("bow0.png")
  
}

function setup() {
  createCanvas(600, 600);
  bg=createSprite(0,0,600,600)
  bg.addImage(bgimg)
  bg.scale=3;
  bg.velocityX=-3
  bow=createSprite(500,50,10,10)
  bow.addImage(bowimg);
  redBGroup=createGroup();
  arrowGroup=createGroup();
  blueBGroup=createGroup();
  greenBGroup=createGroup();
  pinkBGroup=createGroup();
  purpleBGroup=createGroup();
}


  

function draw() {
  bow.y=World.mouseY
  //add code here
  if(bg.x<0){
    bg.x=300;
  }
  if(keyDown("Space")){
  createArrow();
  }
  var t=Math.round(random(1,4));
  if(frameCount%80===0){
    if(t===1){
      redBallon();
    }
    if(t===2){
      blueBallon();
    }
    if(t===3){
      greenBallon();
    }
    if(t===4){
      pinkBallon();
      
    }
  }
  if(redBGroup.isTouching(arrowGroup)){
    redBGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+5;
  }
   if(blueBGroup.isTouching(arrowGroup)){
    blueBGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+3;
  }
   if(greenBGroup.isTouching(arrowGroup)){
    greenBGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+2;
  }
   if(pinkBGroup.isTouching(arrowGroup)){
    pinkBGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }
  
  
  drawSprites();
  text("score:"+score,450,50);
}
function createArrow(){
  arrowb=createSprite(500,50,10,10)
  arrowb.y=World.mouseY
  arrowb.velocityX=-3
  arrowb.addImage(arrowimg);
  arrowb.scale=0.4
  arrowb.lifetime=150;
  arrowGroup.add(arrowb);


}


function redBallon(){
    redb=createSprite(50,10,10,10);
    redb.addImage(redbimg);
    redb.scale=0.1;
    redb.y=Math.round(random(20,370));
    redb.lifetime=150;
    redb.velocityX=4;
    redBGroup.add(redb);
}
function blueBallon(){
    blueb=createSprite(50,10,10,10);
    blueb.addImage(bluebimg)
    blueb.scale=0.1
    blueb.y=Math.round(random(20,370))
    blueb.lifetime=150
    blueb.velocityX=4
    blueBGroup.add(blueb);
    
}
function greenBallon(){
    greenb=createSprite(50,10,10,10);
    greenb.addImage(greenbimg)
    greenb.scale=0.1
    greenb.y=Math.round(random(20,370))
    greenb.lifetime=150
    greenb.velocityX=4
    greenBGroup.add(greenb);
}
function pinkBallon(){
    pinkb=createSprite(50,10,10,10);
    pinkb.addImage(pinkbimg)
    pinkb.scale=1.2
    pinkb.y=Math.round(random(20,370))
    pinkb.lifetime=150
    pinkb.velocityX=4
    pinkBGroup.add(pinkb);
    
}


