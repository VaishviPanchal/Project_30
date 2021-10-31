const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var ballImg;

function preload(){
  ballImg=loadImage("polygon.png");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  
  var options = {
    restitution : 0.4,
    mass : 1,
    friction : 0.1
  }
  ball =Bodies.circle(100,200,15,options);
  
  World.add(world,ball);
  
  launcher = new Launcher(ball,{x:100,y:200})
  
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
  stand3 = new Stand(540,100,150,10);

  //level one
  block1 = new Block(300,275,30,40);
  //console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  block17 = new Block(640,175,30,40);
  block18 = new Block(670,175,30,40);
  block19 = new Block(700,175,30,40);
  block20 = new Block(730,175,30,40);
  block21 = new Block(760,175,30,40);

  block22 =new Block(670,135,30,40);
  block23 =new Block(700,135,30,40);
  block24 =new Block(730,135,30,40);

  block25 =new Block(700,95,30,40);

  block26 = new Block(510,75,30,40);
  block27 = new Block(540,75,30,40);
  block28 = new Block(570,75,30,40);
  block29 = new Block(540,35,30,40);
}

function draw() {
  
  background(194,209,222);
  Engine.update(engine) 
 
  textSize(20);
  fill("lightyellow");

  ground.display();
  stand1.display();
  stand2.display();
  stand3.display();
 
  push();
  strokeWeight(1.7);
  stroke(15);
  
  fill(131,125,183);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill(157,130,186);
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  fill(183,137,185);
  block13.display();
  block14.display();
  block15.display();
  block22.display();
  block23.display();
  block24.display();
  block26.display();
  block27.display();
  block28.display();

  fill(236,147,152);
  block16.display();
  block25.display();
  block29.display();
  pop();
  launcher.display();

  imageMode(CENTER);
  image(ballImg, ball.position.x, ball.position.y, 30, 30);
  
}

function mouseDragged(){
Matter.Body.setPosition(ball,{x:mouseX,y:mouseY})
    
}
function mouseReleased(){
    launcher.fly();
    Matter.Body.applyForce(ball,{x:10,y:-20})
}
function keyPressed(){
  if (keyCode===32){
    Matter.Body.setPosition(ball,{x:100,y:200})
    launcher.attach(ball);
  }
}