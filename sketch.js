const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var wall1,wall2,wall3,wall4;

var button1, button2


var ball;

let engine;
let world;


function setup() {


  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  //creates button
  button1 = createImg("push.png");
  button1.position(50,300);
  button1.size(40,40);

  //creates button 2
  button2 = createImg("ButtonStart.png");
  button2.position(110,300);
  button2.size(40,40);
  
  //adds force
  button1.mouseClicked(vforce);
  button2.mouseClicked(hforce);

  //wall definitions
  wall1 = new Ground(200,390,400,20);
  wall2 = new Ground(390,200,20,400);
  wall3 = new Ground(10,200,20,400);
  wall4 = new Ground(200,10,400,20);
  
  //defining options
  let ballOptions = {
    restitution : 0.5
  }

  //creating body
  ball = Bodies.circle(200,200,20,ballOptions);

  World.add(world,ball)
}

//vertical force
function vforce () {
  Matter.Body.applyForce(ball,{x : 0, y : 0 }, {x:0, y:-0.05})
}

//horizontal
function hforce () {
  Matter.Body.applyForce(ball,{x : 0, y : 0 }, {x:0.05, y:0})
}

function draw() 
{
  background(51);

  ellipse(ball.position.x,ball.position.y,20);


  //calling show body function found in Ground.js
  wall1.showBody();
  wall2.showBody();
  wall3.showBody();
  wall4.showBody();
  
  //updating engine
  Engine.update(engine);
}

