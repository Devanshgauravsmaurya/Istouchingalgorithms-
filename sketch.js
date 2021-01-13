var fixedRect,movingRect,moveRect,slowRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  moveRect=createSprite(300,200,70,30);
  slowRect=createSprite(350,300,50,90);
  moveRect.shapeColor="blue";
  slowRect.shapeColor="yellow";
}

function draw() {
  background(255,255,255); 

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  
  

if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 &&
  fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 &&
  movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 &&
  fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 ){
    movingRect.shapeColor="red";
  fixedRect.shapeColor="red";

}else{
  movingRect.shapeColor="green";
fixedRect.shapeColor="green";

}
  drawSprites();
}
