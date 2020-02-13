var fixedRect, movingRect;
var o1,o2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  o1 = createSprite(300,200,40,40);
  o1.shapeColor = "yellow";

  o2 = createSprite(500,400,30,30);
  o2.shapeColor = "yellow";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

o1.x = World.mouseX;
o1.y = World.mouseY;

if(isTouching(o1,o2)) {
  o1.shapeColor = "pink";
  o2.shapeColor = "pink"; 
}else{
  o1.shapeColor = "yellow";
  o2.shapeColor = "yellow"; 
}

bounceOff(movingRect,fixedRect);

   drawSprites();
}

