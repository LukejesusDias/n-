var city
var city1

function preload(){
city=loadImage("city picture.png");

}

function setup() {
 createCanvas(2000,300)

 city1=createSprite(1000,300)
 city1.addImage(city)
 city1.velocityX=-1
 
}

function draw() 
{
 background(255);
if(city1.x<0){
city1.x=300
}


drawSprites();
}




