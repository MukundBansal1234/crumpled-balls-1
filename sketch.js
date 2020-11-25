
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperball1;
var ground;
var dustbin1,dustbin2,dustbin3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paperball1 = new Paper(100,615,0.5);
    dustbin1 = new Dustbin(600,635,200,10);
    ground = new Ground(400,650,800,20)
    dustbin2 = new Dustbin(700,590,10,100);
    dustbin3 = new Dustbin(500,590,10,100);
	Engine.run(engine);
 
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperball1.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paperball1.body,paperball1.body.position,{x:600,y:635});
  
  }
}


