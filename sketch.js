var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = false;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = false;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  mr= createSprite(400, 200, 50, 100); fr=createSprite(200, 200, 100, 50); o1 = createSprite(100,100,50,50); o2 = createSprite(200,100,50,50); o3 = createSprite(300,100,50,50); o4 = createSprite(400,100,50,50); o5 = createSprite(500,100,50,50); mr.shapeColor="yellow"; fr.shapeColor="yellow";
}

function draw() {
  background(0,0,0);
  
  bounceOff(movingRect,fixedRect);
  mr.x=mouseX; mr.y=mouseY; if(isTouching(o3,mr)) { mr.shapeColor="blue"; o3.shapeColor="blue"; } else { mr.shapeColor="yellow"; o3.shapeColor="yellow"; }
  drawSprites();
}

