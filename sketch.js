const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var fruit;

function preload(){

  //Debug this code
 backgroundImg = load("background.png");
 
 fruit=loadImage("melon.png");
 basket=loadImage("basket.png")
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  //Debug this code
  ground = Ground();
  
 
  //Debug this code
  ball = Bodies.circle(50,200);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:100});

}
function draw() {
  background(backgroundImg); 
 
  Engine.update(engine);
  text(mouseX + ',' + mouseY, 10, 15);
  
  ground.display();
  basket.scale=.025;


  imageMode(CENTER)
  image(fruit ,ball.position.x,ball.position.y,40,40);

  //Debug this code
  image(basketimage,450,270)

  slingShot.display();
}
function mouseDragged(){
  //Debug this code
  Matter.Body.set(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();

}
