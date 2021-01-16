const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var divisionHeight = 300;
var engine,world;
var ground1;
var division = [];
var plinko = [];
var particle = [];


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,790,480,20);

  for(var k = 0;k <= width;k = k+80){
  division.push(new Division(k,height-150,10,divisionHeight));
}  
  for(var p = 20;p<=width;p=p+40){
plinko.push(new Plinko(p,150));
  }

  for(var p = 10;p<=width;p=p+50){
    plinko.push(new Plinko(p,200));
      }

    for(var p = 30;p<=width;p=p+40){
     plinko.push(new Plinko(p,250));
    }

    for(var p = 25;p<=width;p=p+70){
      plinko.push(new Plinko(p,300));
     }


Engine.run(engine);
}

function draw() {
  background(0); 
  ground.display(); 
  for (var k = 0; k < division.length; k++) {
     
    division[k].display();
    }

    for(var p = 0;p<plinko.length;p++){
      plinko[p].display();
    }

    if(frameCount%60 === 0){
      particle.push(new Particle(random(100,300),10,10));
    }
    for(var p=0;p<particle.length;p++){
      particle[p].display();
    }
}