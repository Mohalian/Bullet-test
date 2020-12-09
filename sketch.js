var bullet, wall, thickness;
var speed, weight;
function setup() {
  createCanvas(1600,800);
  createSprite(400, 200, 50, 50);
thickness = random(22,83);
wall = createSprite(1200, 200, thickness, 400);
weight = random(30, 52);
speed = random(223, 321);
}

function draw() {
  background(255,255,255);
    bullet.velocityX = speed;
    function hasCollided(bullet, wall) {
      if (bullet.x - wall.x < wall.width/2 + bullet.width/2
        && wall.x - bullet.x < wall.width/2 + bullet.width/2) {
          bullet.velocityX = bullet.velocityX * (0);
          wall.velocityX = wall.velocityX * (0);
    }
    if (bullet.y - wall.y < wall.height/2 + bullet.height/2
      && wall.y - bullet.y < wall.height/2 + bullet.height/2){
      bullet.velocityY = bullet.velocityY * (0);
      wall.velocityY = wall.velocityY * (0);
    }
    }
    if(hasCollided(bullet, wall)){
var damage = 0.5 *weight*speed*speed/(thickness*thickness*thickness);
if(damage > 10){
  wall.shapeColor =color(255,0,0); 
}
if(damage<10){
  wall.shapeColor=color(0,255,0);
}
    }
  drawSprites();
}