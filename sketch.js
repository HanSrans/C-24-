const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4;
var pig1,pig2;
var bird,log1,log2,log3,log4;
 var ground;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(500,320,70,70);
    box2 = new Box(720,320,70,70);
    pig1 = new Pig(610,350);
    log1 = new Log(610,260,300,PI/2);
    
    box3 = new Box(500,240,70,70);
    box4 = new Box(720,240,70,70);
    pig2 = new Pig(610,220);
    log2 = new Log(610,180,300,PI/2);
    
    box5 = new Box(610,160,70,70);
    log3 = new Log(560,120,150,PI/7);
    log4 = new Log(670,120,150,-PI/5);

    bird = new Bird(100,100);
    ground = new Ground(500,height,800,20)
    

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();

    bird.display();

    ground.display();

}