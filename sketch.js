var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(800,800);
speed=random(60, 100);
weight=random(500, 1500);

car = createSprite(100, 400, 20, 20);
car.velocityX = speed;

wall = createSprite(700, 400, 30, height/2);
}

function draw() {
  background("blue");  
  if(wall.x - car.x < (car.width + wall.width)/2){
    car.velocityX = 0;
    deformation = 0.5 * weight * speed * speed / 22500;
    if(deformation>180){
      car.shapeColor("green");
    }
    if(deformation>180 && deformation > 100){
    car.shapeColor("yellow");
    }
    if(deformation<100){
      car.ShapeColor("red");
    }
  }
  drawSprites();
}