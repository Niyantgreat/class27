var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,bob,bob2,bob3,bob4,bob5,roof,rope;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);

	 bob=new Bob (400,400,30)
	 bob2=new Bob (430,400,30)
	 bob3=new Bob (460,400,30)
	 bob4=new Bob (490,400,30)
	 bob5=new Bob (520,400,30)
	 roof =new Roof (455,250,150,20)
	 rope=new Rope(bob.body,roof.body);
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
bob.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
roof.display();
rope.display();
//rope.display();
  drawSprites();

}



