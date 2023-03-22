let villainX;
let villainY;
let heroX;
let heroY;
let gameOver;
let counter;
let collided;
let heroSize;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
  angleMode(DEGREES);

  heroX = 30;
  heroY = 30;
  heroSize = 1;

  villainX = random(30, width - 30);
  villainY = random(30, height - 30);
  
  gameOver = false;
  collided = false;
  
  counter = 0;
}

function draw() {
  background(220);

  gameFunctionality();
  drawHero(heroX, heroY, 1);
  drawVillain(villainX, villainY, 1);
}

function drawHero(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  push();
  noStroke();
  fill("blue");
  
  ellipse(30, 30, 50 + counter, 50);

  fill("yellow");
  stroke("red");
  strokeWeight(3);
  ellipse(30, 30, 35, 35);

  textSize(40);
  fill("red");
  text("S", 30, 44.5);
  pop();
  pop();
}
function drawVillain(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  push();
  fill('yellow');
  stroke('gold');
  strokeWeight(5);
  ellipse(30, 30, 30, 30);
  pop();
  pop();
}
function gameFunctionality() {
  if (keyCode == DOWN_ARROW) {
    //Move sprite down
    heroY += 2;
  }
  if (keyCode == UP_ARROW) {
    //Move sprite up
    heroY -= 2;
  }
  if (keyCode == LEFT_ARROW) {
    //Move sprite left
    heroX -= 2;
  }
  if (keyCode == RIGHT_ARROW) {
    //Move sprite right
    heroX += 2;
  }
  //Detects if Hero hits boundaries
  if (
    heroX >= width - 30 ||
    heroX <= -15 ||
    heroY >= height||
    heroY <= -30
  ) {
    gameOver = true;
  }
  //Triggers end of game screen
  if (gameOver) {
    heroX = 30;
    heroY = 30;
    
    background('red');
  }
  //Restarts Game
  if (mouseIsPressed){
    gameOver = false;
  }
  
  if (heroX >= villainX - 20 && heroY >= villainY - 20){
    counter += 1;
    collided = true;
    villainX = random(30, width - 30);
    villainY = random(30, height - 30);
  } 
}
