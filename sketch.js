//create variables.
var background_img;
var boy, boy_img;
var diamond, diamond_img, diamondGroup;
var bluediamond;
var purplediamond;
var violetdiamond;
var diamond2;
var invisiblegr;
var bomb, bomb_img;
var ground;
var bombGroup;
var bg;
var thief, thief_img;
function preload() {
  //load images.
  bluediamond = loadImage("images/blue_diamond.png");
  purplediamond = loadImage("images/purple_diamond.png");
  violetdiamond = loadImage("images/violetdiamond.png");
  boy_img = loadAnimation("images/kid1.png", "images/kid2.png", "images/kid3.png");
  diamond2 = loadImage("images/diamond.png");
  background_img = loadImage("images/forest background.jpg");
  bomb_img = loadImage("images/bomb.png");
 
  thief_img = loadImage("images/theif.png");
}


function setup() {
  createCanvas(displayWidth * 10, displayHeight - 200);
  //create boy sprite.
  boy = createSprite(160, 300, 50, 50);
  boy.addAnimation("car", boy_img);
  boy.scale = 0.5;
  //create invisible ground.
  invisiblegr = createSprite(displayWidth * 4, 420, displayWidth * 11, 20);
  invisiblegr.visible = false;
  //create theif.
  thief = createSprite(displayWidth * 10 - 200, displayHeight - 450, 50, 50);
  thief.addImage("the", thief_img);
  thief.scale = 0.5;
  bombGroup = new Group();
  diamondGroup = new Group();
  //spawn Diamonds & Bombs.
  spawnDiamonds();
  spawnBombs();

}

function draw() {
  background(background_img);

  
 
   
    
    //use right arrow to move the boy
    if (keyIsDown(RIGHT_ARROW)) {
      boy.x = boy.x + 20;
    }
    //use up arrow to move the boy
    if (keyIsDown(UP_ARROW)) {
      boy.velocityY = -10;

    }
    boy.velocityY = boy.velocityY + 0.3;


    //when boy collide with diamonds increase score and score as well
    for (var i = 0; i < diamondGroup.length; i++) {
      if (diamondGroup.get(i).isTouching(boy)) {
        diamondGroup.get(i).destroy();
        score = score + 1;
      }
    }
    //when boy collide withbomb decrease lives andlives as well
    bombGroup.collide(boy, decLife);
    boy.collide(invisiblegr);
   
  

    drawSprites();
 
}
//create spawndiamonds function.
function spawnDiamonds() {
  for (var i = 500; i < displayWidth * 10; i = i + 700) {
    diamond = createSprite(i, random(50, 400), 50, 40);
    diamond.scale = 0.2;
    var rand = Math.round(random(1, 4));
    switch (rand) {
      case 1: diamond.addImage("diamond", diamond2);
        diamond.scale = 0.2;
        break;
      case 2: diamond.addImage("diamond", bluediamond);
        diamond.scale = 0.1;
        break;
      case 3: diamond.addImage("diamond", purplediamond);
        diamond.scale = 0.2;
        break;
      case 4: diamond.addImage("diamond", violetdiamond);
        diamond.scale = 0.2;
        break;
    }
    diamondGroup.add(diamond);
  }
}
//create spawnbombs function.
function spawnBombs() {
  for (var i = 700; i < displayWidth * 10; i = i + 1000) {
    bomb = createSprite(i, random(100, 500), 50, 50);
    bomb.addImage("bomb", bomb_img);
    bomb.scale = 0.2;
    bombGroup.add(bomb);
  }
}
