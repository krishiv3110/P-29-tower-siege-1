const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var ground1,ground2,ground3;

var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12;
var block13,block14,block15,block16;

var block_1,block_2,block_3,block_4,block_5,block_6,block_7,block_8,block_9;

var polygon,polygon_image;

function preload() {
    polygon_image = loadImage("polygon.png");
}

function setup(){

    var canvas = createCanvas(1200,600);

    engine = Engine.create();
	world = engine.world;

    ground1 = new Ground(600,580,1200,20);
    ground2 = new Ground(440,480,320,20);
    ground3 = new Ground(840,320,250,20);

    // pyramid 1

    block1 = new Block(320,445,40,50);
    block2 = new Block(360,445,40,50);
    block3 = new Block(400,445,40,50);
    block4 = new Block(440,445,40,50);
    block5 = new Block(480,445,40,50);
    block6 = new Block(520,445,40,50);
    block7 = new Block(560,445,40,50);
    block8 = new Block(360,395,40,50);
    block9 = new Block(400,395,40,50);
    block10 = new Block(440,395,40,50);
    block11 = new Block(480,395,40,50);
    block12 = new Block(520,395,40,50);
    block13 = new Block(400,345,40,50);
    block14 = new Block(440,345,40,50);
    block15 = new Block(480,345,40,50);
    block16 = new Block(440,295,40,50);

    // pyramid 2

    block_1 = new Block(760,285,40,50);
    block_2 = new Block(800,285,40,50);
    block_3 = new Block(840,285,40,50);
    block_4 = new Block(880,285,40,50);
    block_5 = new Block(920,285,40,50);
    block_6 = new Block(800,235,40,50);
    block_7 = new Block(840,235,40,50);
    block_8 = new Block(880,235,40,50);
    block_9 = new Block(840,185,40,50);



    polygon=Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingshot = new Slingshot(this.polygon,{x : 100 , y : 200});


    


    Engine.run(engine);
}


function draw(){

    background("black");

     rectMode(CENTER)
    textSize(20);
    fill("lightyellow");
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",300,30);
  
    ground1.display();
    ground2.display();
    ground3.display();

    // pyramid 1
    
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    // pyramid 2

    block_1.display();
    block_2.display();
    block_3.display();
    block_4.display();
    block_5.display();
    block_6.display();
    block_7.display();
    block_8.display();
    block_9.display();

    imageMode(CENTER)
    image(polygon_image,polygon.position.x,polygon.position.y,40,40);


    slingshot.display();



   



    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.fly();

}