var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,paper
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinImage=loadImage("dustbin.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    box1=new Dustbin(width/2,height-60,120,20);
	box2=new Dustbin(width/2-60,height-160,20,220);
	box3=new Dustbin(width/2+60,height-160,20,220);
	ground=new Ground(width/2,height-50,width,15);
	paper=new Paper(100,height-85,50)

	Engine.run(engine);
  
}


function draw() {
  background(250);
  box1.display();
  box2.display();
  box3.display();
  image(dustbinImage,width/2-70,height/2+80,140,220);
  ground.display();
  paper.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-320});
	}
}


