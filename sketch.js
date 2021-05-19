var garden;
var mouse, cat;
var cat1, mouse1;
var mouse2, cat2;
var cat3;
function preload() {
    garden = loadImage("images/garden.png");
    cat1 = loadImage("images/cat1.png");
    mouse1 = loadImage("images/mouse1.png");
    mouse2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    cat2 = loadAnimation("images/cat2.png", "images/cat3.png");
    cat3 = loadImage("images/cat4.png");
}

function setup(){
    createCanvas(1000,800);
    mouse = createSprite(200,600,10,10);
    cat = createSprite(700,600,10,10);
    mouse.addImage("Mouse",mouse1);
    cat.addImage("Cat",cat1);
    mouse.scale = 0.2;
    cat.scale = 0.2;
}

function draw() {
    background(garden);
    if(mouse.isTouching(cat)){
        mouse.changeImage("Mouse",mouse1);
        cat.addImage("Cat3", cat3);
        cat.changeImage("Cat3",cat3);
        cat.velocityX = 0;
    }

    drawSprites();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW){
        mouse.addAnimation("Mouse1",mouse2);
        mouse.changeAnimation("Mouse1",mouse2);
        mouse.frameDelay = 15
        cat.addAnimation("Cat1",cat2);
        cat.changeAnimation("Cat1",cat2);
        cat.velocityX = -2;
    }


}
