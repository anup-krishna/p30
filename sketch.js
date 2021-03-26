const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var B1,B2,B3,B4,B5,B6,B7,B8,B9,B10,B11,B12,B13,B14,B15,B16;
var b1,b2,b3,b4,b5,b6,b7,b8,b9;
var g1,g2,g3;

var polygon,slingS;
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    g1 = new Ground(600,590,width,20);
    g2 = new Ground(550,500,400,20);
    g3 = new Ground(950, 300, 300, 20);

    b1 = new Box(850,250,50,70);
    b2 = new Box(900,250,50,70);
    b3 = new Box(950,250,50,70);
    b4 = new Box(1000,250,50,70);
    b5 = new Box(1050,250,50,70);

    b6 = new Box(950,180,50,70);
    b7 = new Box(900,180,50,70);
    b8 = new Box(1000,180,50,70);

    b9 = new Box(950,110,50,70);

    B1 = new Box(400,450,50,70);
    B2 = new Box(450,450,50,70);
    B3 = new Box(500,450,50,70);
    B4 = new Box(550,450,50,70);
    B5 = new Box(600,450,50,70);
    B6 = new Box(650,450,50,70);
    B7 = new Box(700,450,50,70);

    B8 = new Box(450,380,50,70);
    B9 = new Box(500,380,50,70);
    B10= new Box(550,380,50,70);
    B11= new Box(600,380,50,70);
    B12= new Box(650,380,50,70);

    B13= new Box(500,310,50,70);
    B14= new Box(550,310,50,70);
    B15= new Box(600,310,50,70);

    B16= new Box(550,240,50,70);

    polygon = new Polygon(200,200,20);
    slingS = new SlingShot(polygon.body,{x:200,y:200});

    }
function draw(){
    background(57, 46, 44);
    Engine.update(engine);
    drawSprites();
    g1.display();
    g2.display();
    g3.display();

    fill(129, 203, 236);
    strokeWeight(4);
    stroke(0);
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    B1.display();
    B2.display();
    B3.display();
    B4.display();
    B5.display();
    B6.display();
    B7.display();
    fill(50, 208, 207);
    strokeWeight(4);
    stroke(0);
    b6.display();
    b7.display();
    b8.display();
    B13.display();    
    B14.display();
    B15.display();

    fill(129, 129, 129);
    strokeWeight(4);
    stroke(0);
    B16.display();

    fill(255, 201, 206);
    strokeWeight(4);
    stroke(0);
    b9.display();
    B8.display();
    B9.display();
    B10.display();
    B11.display();
    B12.display();

    stroke(46, 210, 214)
    slingS.display();
    polygon.display();
    strokeWeight(1);
    stroke(0);
    fill(255);
    textSize(28);
    text("Drag the polygon to destroy the blocks",320,40);
    textSize(15);
    strokeWeight(0);
    text("Press Space to get a second Chance to Play!!",820,550);
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});    
}

function mouseReleased(){
    slingS.fly();
   }

   function keyPressed(){
    if(keyCode === 32){
       Matter.Body.setPosition(polygon.body,{x:250,y:250});
       slingS.attach(polygon.body);
    }
}