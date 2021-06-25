var bgImg,catImg1,mouseImg1,catImg2,mouseImg2;
var cat,mouse;
function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");   
    mouseImg1 = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(800,700,20,20);
    cat.addAnimation("catsilint",catImg1);
    cat.scale = 0.2;

    mouse = createSprite(200,700,20,20);
    mouse.addAnimation("mousesilint",mouseImg1);
    mouse.scale = 0.2;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x > 200&&cat.x < 300){
        cat.addAnimation("catreached",catImg3);
        cat.changeAnimation("catreached");
        cat.velocityX = 0;

        mouse.addAnimation("mousehappy",mouseImg3);
        mouse.changeAnimation("mousehappy");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseteasing",mouseImg2);
      mouse.changeAnimation("mouseteasing");
      mouse.frameDelay = 25;
  }

  if(keyCode === RIGHT_ARROW){
      cat.addAnimation("catmoving",catImg2);
      cat.changeAnimation("catmoving");
      cat.velocityX = -4;
  }

}
