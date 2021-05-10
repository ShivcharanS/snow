var snow,snowBackImg;
function preload() {
  snowBackImg = loadImage("snow1.jpg");
}

function setup() {
  createCanvas(800,400);
  snow = new Snow(random(10,790),10,10,10);
  snow.velocityY = 3;
}

function draw() {
  background(snowBackImg);  
  if(frameCount%60 === 0){
    snow.display();
  }
  drawSprites();
}

  