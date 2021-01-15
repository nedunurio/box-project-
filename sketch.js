const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var rect1,box;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var ball_options ={
        restitution: 1.0
    }

    var  rect1_options ={
        isStatic: true
    }

    rect1 = Bodies.rectangle(50,200,10,20,rect1_options);
    World.add(world,rect1);

    var ball_options ={
        restitution: 1.0
    }
    var  box_options ={
        isStatic: true
    }

    box = Bodies.rectangle(300,250,130,30,box_options);
    World.add(world,box);

    var ball_options ={
        restitution: 1.0
    }



    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    rectMode(CENTER);
    rect(rect1.position.x,rect1.position.y,100,10)
    rectMode(CENTER);
    rect(box.position.x,box.position.y,200,20)

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
}