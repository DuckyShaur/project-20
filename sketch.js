
function preload(){
  bg = loadImage("images/iss.png")
  bath = loadAnimation("images/bath1.png","images/bath2.png")
  brush = loadAnimation("images/brush.png")
  drink = loadAnimation("images/drink1.png","images/drink2.png")
  eat = loadAnimation("images/eat1.png","images/eat2.png")
  gym = loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png")
  move = loadAnimation("images/move.png","images/move1.png")
  sleep = loadAnimation("images/sleep.png")
}


function setup() {
  createCanvas(600,500);
  astronaut = createSprite(300, 230, 50, 50);
  astronaut.addAnimation("sleeping",sleep)
  astronaut.scale = 0.1
}

function draw() {
  background(bg);
  textSize(20)
  fill (255,255,255)
  text("Instructions: ",20,35)
  textSize(15) 
  text("Up arrow = Brush the teeth",20,55)
  text("down arrow = Go to the gym",20,70)
  text("left arrow = Eating",20,85)
  text("right arrow = bathing",20,100)
  text("M key = moving",20,115)
  text("d key = drinking",20,130)
edges = createEdgeSprites()
astronaut.bounceOff(edges)
if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing",brush)
  astronaut.changeAnimation("brushing")
  astronaut.y = 350
  astronaut.velocityX = 0
  astronaut.velocityY = 0
}
if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gyming",gym)
  astronaut.changeAnimation("gyming")
  astronaut.y = 350
  astronaut.velocityX = 0
  astronaut.velocityY = 0
}
if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("eating",eat)
  astronaut.changeAnimation("eating")
  astronaut.y = 350
  astronaut.x = 150
  astronaut.velocityX = 0.5
  astronaut.velocityY = 0.5
}
if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("bathing",bath)
  astronaut.changeAnimation("bathing")
  astronaut.x = 300
  astronaut.velocityX = 0
  astronaut.velocityY = 0
}
/*if(keyDown("M")){
  astronaut.addAnimation("moving",move)
  astronaut.changeAnimation("moving")
  astronaut.velocityX = 1
  astronaut.velocityY = 1
}*/
if(keyDown("D")){
  astronaut.addAnimation("drinking",drink)
  astronaut.changeAnimation("drinking")
  astronaut.y = 350
  astronaut.velocityX = 0
  astronaut.velocityY = 0
}
  drawSprites();
}