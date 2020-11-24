

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var particle;
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
var gameState="play",points=0;



function setup() {
	createCanvas(1360, 630);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	grou1= new Ground(700,615,10000,20)
	grou2=new Ground(0,10,20,10000)
	grou3=new Ground(1340,10,20,10000)

	for (var i = 0; i <= width; i += 150) {
		divisions.push(new Divisions(i, 510, 10, 180));
	  }


	  for (var j = 40; j <=1300; j=j+60) {
		plinkos.push(new Plinko(j,75));
	 }

	 for (var j = 55; j <=1300; j=j+60) {
		plinkos.push(new Plinko(j,175));
	 }

	 
	 for (var j = 40; j <=1600; j=j+60) {
		plinkos.push(new Plinko(j,275));
	 }

	 for (var j = 45; j <=1600; j=j+60) {
		plinkos.push(new Plinko(j,375));
	 }


	

	Engine.run(engine);
  
}

function draw() {
	rectMode(CENTER);
	
	background("black");
	textSize(30)
	stroke (color(random (0,255),random(0,255),random(0,255)))
	fill (color(random (0,255),random(0,255),random(0,255)))
	text("Score: "+score,70,50)

	 if(gameState=="end"){
		//divisions.visible="false"
		stroke (color(random (0,255),random(0,255),random(0,255)))
		fill (color(random (0,255),random(0,255),random(0,255)))
		textSize(40)
		text("GAME OVER -Press f5 to play again",300,250)
	}
	
	grou2.display()
	grou3.display()
	grou1.display()
   
  for ( var i=1;i<10;i++) {
	  divisions[i].display();
   }
  
  
   for (var i = 0; i < plinkos.length; i++) {
	  plinkos[i].display();  
   }
  if(particle!=null)
  {
	 particle.display();
	  
	  if (particle.body.position.y>560)
	  {
			if (particle.body.position.x<450) 
			{
				score=score+500;      
				particle=null;
				if ( points>= 5) gameState ="end";                          
			}
			else if (particle.body.position.x >450 && particle.body.position.x <961 ) 
			{
				  score = score + 100;
				  particle=null;
				  if ( points>= 5) gameState ="end";

			}
			else if (particle.body.position.x < 1900 && particle.body.position.x > 601 )
			{
				  score = score + 200;
				  particle=null;
				 if ( points>= 5)  gameState ="end";

			}  } }
			//drawSprites();
			textSize(30)
			stroke (color(random (0,255),random(0,255),random(0,255)))
			fill (color(random (0,255),random(0,255),random(0,255)))
			
			text ("500",20,450)
			text ("500",160,450)
			text ("500",310,450)
			text ("100",460,450)
			text ("100",610,450)
			text ("100",760,450)
			text ("200",910,450)
			text ("200",1060,450)
			text ("200",1208,450)
			
		
			}
			
 function mousePressed()
{
 if(gameState!=="end")
 {
	 points++;
	particle=new Particles(mouseX, 10, 10, 10); 
 }  
 
 
}

