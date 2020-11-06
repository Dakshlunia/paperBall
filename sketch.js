
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;
var log1,log2,log3;




function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,680,800,20);
	paper = new Paper(50,610,15);
    log1 = new Ground(700, 660,150,20);
	log2 = new Ground(615, 595,20,150);
	log3 = new Ground(785, 595,20,150);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
 log1.display();
 log2.display();
 log3.display();
}
function keyPresseed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85})
	}
}


