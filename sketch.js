const Engine = Matter.Engine
const World = Matter.World;
const Bodies = Matter.Bodies;

var myworld , myengine;
var ground, ball;

function setup() {
  createCanvas(400,400);
  myengine = Engine.create();
  myworld = myengine.world;

  var groundoption ={

    isStatic : true,
  }

  ground = Bodies.rectangle(200,380,400,10,groundoption);
  World.add(myworld, ground);

  console.log(ground)

  var balloption ={
    restitution : 1.0,
  }

  ball = Bodies.circle(200,200,25,balloption)
  World.add(myworld, ball);
  
}

function draw() {
  background(0);  
  Engine.update(myengine);
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,10);
  //rect(200,200,50,50)

  ellipseMode(CENTER)

  ellipse(ball.position.x,ball.position.y,25,25)
  drawSprites();
}