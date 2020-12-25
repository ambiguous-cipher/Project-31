const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

var engine, world;

function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

   ground1 = new Ground(240, 790, 480, 10)

  for (var k = 0; k <= width; k = k + 80){
    divisions.push(new Division(k, height - divisionHeight/2, 10, divisionHeight))
  }

  for (var h = 0; h <= width; h = h + 40){
    plinkos.push(new Plinko(h, 75))
  }

  for (var i = 0; i <= width; i = i + 40){
    plinkos.push(new Plinko(i, 175))
  }

  for (var h = 0; h <= width; h = h + 40){
    plinkos.push(new Plinko(h, 275))
  }

  for (var i = 0; i <= width; i = i + 40){
    plinkos.push(new Plinko(i, 375))
  }

  //for(var j = 0, )
  if(frameCount % 1 === 0){
    particles.push(new Particle(random(200, 400), 10, 10));
  }

}

function draw() {
  background(0);
  Engine.update(engine);

  

  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  for(var h = 0; h < plinkos.length; h++){
    plinkos[h].display();
  }

  for(var i = 0; i < plinkos.length; i++){
    plinkos[i].display();
  }

  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  for(var l = 0; l < plinkos.length; l++){
    plinkos[l].display();
  }

  for(var m = 0; m < particles.length; m++){
    particles[m].display();
  }

  ground1.display();

  //display();
  drawSprites();
}