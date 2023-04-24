var navio,naviomg
var mar,marmg

function preload(){
naviomg=loadAnimation("./ship-1.png","./ship-2.png","./ship-3.png","./ship-4.png")
marmg=loadImage("./sea.png")
}

function setup(){
  createCanvas(400,400);
  mar=createSprite(200,200)
  mar.addImage(marmg)
  mar.scale=0.3
  mar.velocityX=-3

  
  navio=createSprite(200,200)
  navio.addAnimation("navio",naviomg)
  navio.scale=0.3
  
}

function draw() {
  background("blue");
  if (mar.x<0){
    mar.x=mar.width/8
    
  }
    drawSprites();
}
