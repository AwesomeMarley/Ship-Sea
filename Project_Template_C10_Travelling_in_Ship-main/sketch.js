
var sea1;
var ship;
var shipImg,SeaImg1;

function preload(){
ShipImg = loadAnimation("ship-1.png","ship-2.png");
SeaImg1 = loadImage("sea.png");
}


function setup(){
  createCanvas(400,400);
  

  
  sea1 = createSprite(200,200,400,400);
  sea1.velocityX = -1;
  sea1.scale = 0.25;
  sea1.addImage(SeaImg1);

  ship = createSprite(40,350,10,10);
  ship.addImage(ShipImg);
  

}

function draw() {
  background("black");
  
  if(sea1.x < 0){
    sea1.x = sea1.width/2;
  }


  drawSprites();
}