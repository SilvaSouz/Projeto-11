var runner,runner_running

var path,pathImage,invisiblepath1,invisiblepath2

function preload(){
  //imagens pré-carregadas
  runner_running = loadAnimation("Runner-1.png","Runner-2.png")

  pathImage = loadImage("path.png")

}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui

  path = createSprite(200,400,)
  path.addImage("path",pathImage);
  path.y = path.width /2;
  path.velocityY = -4;

  runner = createSprite(100,310,20,50)
  runner.addAnimation("running", runner_running);
  runner.scale = 0.07

  invisiblepath1 = createSprite(30,200,10,400)
  invisiblepath2 = createSprite(370,200,10,400)
  invisiblepath1.visible = false
  invisiblepath2.visible = false

}

function draw() {
  background(0);

  if (keyDown("right")) {
    runner.velocityX = 10;
  }

  if (keyDown("left")) {
    runner.velocityX = -10;
  }
  

  if (path.y < 0) {
    path.y = path.width / 2;
  }

  runner.collide(invisiblepath1);
  runner.collide(invisiblepath2);

  drawSprites();
}
