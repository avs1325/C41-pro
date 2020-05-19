var carImg, BkImg, carsImg;
var car, cars = [], carsGroup;
var gameState = 0;
var index = 0;


function preload() {
  carImg = loadImage("car.png");
  carsImg = loadImage("cars.png");
  BkImg = loadImage("track.jpg");
}

function setup() {
  createCanvas(1500, 1000);
  car = createSprite(750, -100, 100, 100);
  car.addImage("car", carImg);
  carsGroup = createGroup();
}

function draw() {
  background(255);
  image(BkImg, 0 , - 29000, 1500, 30000);
  console.log(car.y)
  if (keyWentDown("space")){
    gameState = 1;
  }

  if (car. y === -27740){
    //car.velocityY = 0;
    gameState = 3;
  }


  if (gameState === 1){
    car.velocityY = -8;
    createCars();
  }

  if (gameState === 2){
    car.velocityY = 0;
    car.visible = false;
  }
  if (gameState === 3){
    car.velocityY = 0;
  }


  if (car.x > 305 && car.x < 1200){
    if (keyIsDown(RIGHT_ARROW)){
      car.x = car.x + 4
    }
    if (keyIsDown(LEFT_ARROW)){
      car.x = car.x - 4
    }
  }
  if (car.x < 305){
    car.x = 306;
  }

  if (car.x > 1200){
    car.x = 1199;
  }

  camera.position.x = 750; 
  camera.position.y = car.y;

  drawSprites();
}

function createCars(){
    if (frameCount % 15 === 0){
      cars[index] = createSprite(random(305, 1200), car.y - 850, 100, 100);
      cars[index].addImage("cars", carsImg);
      cars[index].velocityY = 6;
      carsGroup.add(cars[index]);
      index++
    }
    if(car.isTouching(carsGroup)){
      gameState = 2
    }
}
