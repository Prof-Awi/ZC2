const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var jointPoint
var jointLink
stones = []

function preload(){
  zombie1 = loadImage("./assets/zombie.png");
  zombie2 = loadImage("./assets/zombie.png");
  zombie3 = loadImage("./assets/zombie.png");
  zombie4 = loadImage("./assets/zombie.png");
  backgroundImage = loadImage("./assets/background.png") ;



}
function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  zombie = createSprite(width/2, height - 110) ;
  zombie.addAnimation ("lefttoright", zombie1, zombie2, zombie1);
  zombie.addAnimation("righttoleft", zombie3, zombie4, zombie3);
  zombie.scale = 0.1;
  zombie.velocityX=10;
  breakButton = createButton("");
  breakButton.position(width - 200, height / 2 - 50);
  breakButton.class("breakbutton");
  breakButton.mousePressed(handleButtonPress);

  leftWall = new Base(300,height/2+50,600,100,"pink",true)
  rightWall = new Base(width-300,height/2+50,600,100,"orange",true)
  ground = new Base(0,height-10,width*2,20,"red",true)
  jointPoint = new Base(width-600,height/2,50,20,"blue",true)


  bridge = new Bridge(15,{x:width/2-400,y:height/2})
  
  Matter.Composite.add(bridge.body, jointPoint);
  jointLink = new Link(bridge, jointPoint);
  for (var i=0; i <= 8; i++) {
    var x = random (width / 2 - 200, width / 2 + 300);
    var y = random (- 10, 140);
    var stone = new Stone(x, y, 80, 80);
    stones.push(stone);
  }
  

}

function draw() {
  background(51);
  drawSprites()
  Engine.update(engine);

  for(var stone of stones){
    stone.display()
  }
  ground.display()
  bridge.show()
  leftWall.display()
  rightWall.display()
  if(zombie.position.x >= width-300){
    zombie.velocityX = -10
    zombie.changeAnimation("righttoleft")
  }
  if(zombie.position.x <= 30){
    zombie.velocityX = 10
    zombie.changeAnimation("lefttoright")
  }
}

function handleButtonPress(){
  jointLink.detach();
    setTimeout(() => {
    bridge.break();
    }, 1500);
}
