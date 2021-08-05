var spaceship;
var astronaut;
var bath,drink,eat,gym,gym2,move,sleep,brush;


function preload(){

  bath=loadAnimation("bath1.png","bath2.png","bath1.png");
  drink=loadAnimation("drink1.png","drink2.png","drink1.png");
  eat=loadAnimation("eat1.png","eat2.png","eat1.png");
  gym1=loadAnimation("gym1.png","gym2.png","gym1.png");
  gym2=loadAnimation("gym11.png","gym12.png","gym11.png");
  move=loadAnimation("move.png","move1.png","move.png");
  spaceship=loadImage("iss.png");
  sleep=loadImage("sleep.png");  
  brush=loadImage("brush.png");

}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  createEdgeSprites();

  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;

}

function draw() {
  background(255,255,255);
  background(spaceship);
  
if (keyDown("UP_ARROW")){
  astronaut.addImage("brushing",brush);
  astronaut.changeImage("brushing");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;

}

if (keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gymming1",gym1);
  astronaut.changeAnimation("gymming1");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;

}

if (keyDown("space")){
  astronaut.addAnimation("gymming2",gym2);
  astronaut.changeAnimation("gymming2");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;

}


if (keyDown("LEFT_ARROW")){
  astronaut.addAnimation("eating",eat);
  astronaut.changeAnimation("eating");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;

}

if (keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("bathing",bath);
  astronaut.changeAnimation("bathing");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;

}


if (keyDown("d")){
  astronaut.addAnimation("drinking",drink);
  astronaut.changeAnimation("drinking");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;

}

if (keyDown("m")){
  astronaut.addAnimation("moving",move);
  astronaut.changeAnimation("moving");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;

}

  drawSprites();
}