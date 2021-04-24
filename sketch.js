var starImg,fairyImg,bgImg;
var fairy,fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	fairyVoice = loadSound("sound/joyMusic.mp3");
}

function setup() {
	createCanvas(800, 600);


	fairy = createSprite(300,490,50,50);
	fairy.addAnimation("fairyFlying",fairyImg);
	fairy.scale = 0.2;


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
Engine.update(engine);

  background(bgImg);

  fairyVoice.play();
  
  fairy.velocityX=0;
  fairy.velocityY=0;

  if(keyDown("RIGHT_ARROW")) {
  fairy.velocityX=6;
  }else if(keyDown("LEFT_ARROW")){
  fairy.velocityX=-6;
  }else if(keyDown("DOWN_ARROW")){    
  star.velocityY=3;
  }

  star.x= starBody.position.x 
  star.y= starBody.position.y 

if(star.y > 470 && starBody.position.y > 470){
  Matter.Body.setStatic(starBody,true);
  star.velocityY=0;
}

   fairy.display();
   star.display();

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	
}
