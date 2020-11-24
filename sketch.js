var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box, box2, box3;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
	box = new Box(430,630,15,70);
	box3 = new Box(330,630,15,70);
	box2 = new Box(380,655,110,15);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  box2.display(); 
  box.display();
  box3.display();
 
  drawSprites();
 
}
function keyPressed() {
		if (keyCode === DOWN_ARROW){
	   
		   Matter.Body.setStatic(packageBody,false);
		}
		if(keyCode === RIGHT_ARROW){
helicopterSprite.x = helicopterSprite.x-1;

		}
		if(keyCode === LEFT_ARROW){
			helicopterSprite.x = helicopterSprite.x+1;
			
					}
	   }
	   
	  