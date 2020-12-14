var Paper,ground1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
Paper=new paper(200,600,40);
ground1=new ground(600,350,1200,20);

	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
 
  Engine.update(engine);
  
  Paper.display();
  ground1.display();
  drawSprites();
 
}



