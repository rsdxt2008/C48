var backgroundImg;
var rectangle;
var box;
var sprite1, sprite2, sprite3, sprite4, sprite5, sprite6, sprite7,sprite8,sprite9,sprite10,sprite11,sprite12,sprite13,sprite14,sprite15,sprite16;
var cheetahheadImg, cheetahbodyImg, cheetahlegsImg, cheetahtailImg, dogbodyImg,doglegsImg,dogheadImg, giraffebodyImg, giraffeheadImg,giraffelegs;
var lionlegsImg, lionbodyImg,liontail, lionheadImg, peacockheadImg, elephanttailImg;
var answer1, answer2, answer3, answer4;
var score = 0;
var limit = 45;
var current;
var gameState = "Play";

function preload() {
    backgroundImg = loadImage("sprites/crumpled bg.jpg");
    cheetahheadImg = loadImage("sprites/cheetah head.PNG");
    cheetahbodyImg = loadImage("sprites/cheetahbody.PNG");
    cheetahlegsImg= loadImage("sprites/cheetahlegs.PNG");
    cheetahtailImg= loadImage("sprites/cheetahtail.PNG");
    dogbodyImg = loadImage("sprites/dogbody.PNG");
    dogheadImg = loadImage("sprites/doghead.PNG");
    doglegsImg = loadImage("sprites/doglegs.PNG");
    giraffebodyImg = loadImage("sprites/giraffebody.jpg");
    giraffeheadImg = loadImage("sprites/giraffehead.jpg");
    giraffelegsImg = loadImage("sprites/giraffelegs.jpg");
    lionbodyImg = loadImage("sprites/lionbody.PNG");
    lionheadImg = loadImage("sprites/lionhead.PNG");
    lionlegsImg = loadImage("sprites/lionlegs.PNG");
    liontailImg = loadImage("sprites/liontail.PNG");
    peacockheadImg = loadImage("sprites/peacockhead.PNG");
    elephanttailImg = loadImage("sprites/elephanttail.PNG");
}
function setup(){
    var canvas = createCanvas(1200, 600);
    current = World.seconds;
    //top left corner of rectangle is at 110, 205.
    rectangle = createSprite(400, 400, 580, 370);
    //top left corner of box is at 820, 20.
    box = createSprite(1000, 180, 360, 320);
    answer1 = createSprite(182.5, 390, 145, 370);
    answer1.shapeColor = "green";
    answer2 = createSprite(400, 297.5, 290, 185);
    answer2.shapeColor = "blue";
    answer3 = createSprite(400, 482.5,290, 185);
    answer3.shapeColor = "pink";
    //add 145 and 290 and add 145/2
    answer4 = createSprite(617.5, 390,145, 370);
    answer4.shapeColor = "orange";
    //width of 2 sprites is 145 and center ones are 290
    sprite1 = createSprite(865, 60, 90, 80);
    sprite1.shapeColor = "blue";
    sprite1.addImage(cheetahheadImg);
    sprite1.scale = 0.74;
    sprite2 = createSprite(955, 60, 90 , 80);
    sprite2.shapeColor = "purple";
    sprite2.addImage(lionbodyImg);
    sprite2.scale = 0.45;
    sprite3 = createSprite(1045, 60, 90, 80);
    sprite3.shapeColor = "green";
    sprite3.addImage(peacockheadImg);
    sprite3.scale = 0.5;
    sprite4 = createSprite(1135, 60, 90, 80);
    sprite4.shapeColor = "pink";
    sprite4.addImage(doglegsImg);
    sprite4.scale = 0.4;
    sprite5 = createSprite(865, 140, 90, 80);
    sprite5.shapeColor = "pink";
    sprite5.addImage(giraffeheadImg);
    sprite5.scale = 0.33;
    sprite6 = createSprite(955, 140, 90, 80);
    sprite6.shapeColor = "green";
    sprite6.addImage(liontailImg);
    sprite6.scale = 0.5;
    sprite7 = createSprite(1045, 140, 90 , 80);
    sprite7.shapeColor = "blue";
    sprite7.addImage(dogheadImg);
    sprite7.scale = 0.9;
    sprite8 = createSprite(1135, 140, 90, 80);
    sprite8.shapeColor = "purple";
    sprite8.addImage(cheetahbodyImg);
    sprite8.scale = 0.38;
    sprite9 = createSprite(865, 220, 90, 80);
    sprite9.shapeColor = "blue";
    sprite9.addImage(giraffelegsImg);
    sprite9.scale = 0.75;
    sprite10 = createSprite(955, 220, 90 , 80);
    sprite10.shapeColor = "purple";
    sprite10.addImage(dogbodyImg);
    sprite10.scale = 0.4;
    sprite11 = createSprite(1045, 220, 90, 80);
    sprite11.shapeColor = "green";
    sprite11.addImage(lionbodyImg);
    sprite11.scale = 0.45;
    sprite12 = createSprite(1135, 220, 90, 80);
    sprite12.shapeColor = "pink";
    sprite12.addImage(elephanttailImg);
    sprite12.scale = 0.4;
    sprite13 = createSprite(865, 300, 90, 80);
    sprite13.shapeColor = "pink";
    sprite13.addImage(cheetahlegsImg);
    sprite13.scale = 0.35;
    sprite14 = createSprite(955, 300, 90, 80);
    sprite14.shapeColor = "green";
    sprite14.addImage(lionheadImg);
    sprite14.scale = 0.45;
    sprite15 = createSprite(1045, 300, 90 , 80);
    sprite15.shapeColor = "blue";
    sprite15.addImage(giraffebodyImg);
    sprite15.scale = 0.7;
    sprite16 = createSprite(1135, 300, 90, 80);
    sprite16.shapeColor = "purple";
    sprite16.addImage(lionlegsImg);
    sprite16.scale = 0.3;
    
}
function draw(){
    background(backgroundImg);
    textSize(15);
    fill("black");
    text("Arrange an animal by using the lion's head, giraffe's body, and the cheetah's legs, and the elephant's tail. ", 110, 80);
    text("You have 45 seconds to complete this, and your time starts now!", 170, 100);
    
    if(gameState === "Play"){

    
    limit = 45 - World.seconds;
    if(limit<=0){
        limit = 0;
    }
    text("Time left: " +limit+" seconds!", 110, 140);
    if(mousePressedOver(sprite1)){
        sprite1.x = mouseX;
        sprite1.y = mouseY;
    }
    if(mousePressedOver(sprite2)){
        sprite2.x = mouseX;
        sprite2.y = mouseY;
    }
    if(mousePressedOver(sprite3)){
        sprite3.x = mouseX;
        sprite3.y = mouseY;
    }
    if(mousePressedOver(sprite4)){
        sprite4.x = mouseX;
        sprite4.y = mouseY;
    }
    if(mousePressedOver(sprite5)){
        sprite5.x = mouseX;
        sprite5.y = mouseY;
    }
    if(mousePressedOver(sprite6)){
        sprite6.x = mouseX;
        sprite6.y = mouseY;
    }
    if(mousePressedOver(sprite7)){
        sprite7.x = mouseX;
        sprite7.y = mouseY;
    }
    if(mousePressedOver(sprite8)){
        sprite8.x = mouseX;
        sprite8.y = mouseY;
    }
    if(mousePressedOver(sprite9)){
        sprite9.x = mouseX;
        sprite9.y = mouseY;
    }
    if(mousePressedOver(sprite10)){
        sprite10.x = mouseX;
        sprite10.y = mouseY;
    }
    if(mousePressedOver(sprite11)){
        sprite11.x = mouseX;
        sprite11.y = mouseY;
    }
    if(mousePressedOver(sprite12)){
        sprite12.x = mouseX;
        sprite12.y = mouseY;
    }
    if(mousePressedOver(sprite13)){
        sprite13.x = mouseX;
        sprite13.y = mouseY;
    }
    if(mousePressedOver(sprite14)){
        sprite14.x = mouseX;
        sprite14.y = mouseY;
    }
    if(mousePressedOver(sprite15)){
        sprite15.x = mouseX;
        sprite15.y = mouseY;
    }
    if(mousePressedOver(sprite16)){
        sprite16.x = mouseX;
        sprite16.y = mouseY;
    }
    
    console.log(gameState);
    if(sprite14.x>= 110 && sprite14.x<= 690 && sprite15.x>= 110 && sprite15.x< 690 && sprite13.x>= 110 && sprite13.x<= 690 && sprite12.x>= 110 && sprite12.x<= 690
        && sprite14.y>= 205 && sprite14.y<= 575 && sprite15.y>= 205 && sprite15.y<= 575&& sprite13.y>= 205 && sprite13.y<= 575& sprite12.y>= 205 && sprite12.y<= 575){
        if (World.seconds < 45){
           gameState = "Level 2";
        }
        
    }
     if(limit<=0){
        gameState = "End";
    }
}
    if(gameState === "Level 2"){
        score = score+1;
        textSize(25);
        text("You won this level, you wil move to the next level!", 110, 130);
    }
    if(gameState === "End"){
        textSize(25);
            text("You loose", 110, 130);
    }


    
    drawSprites();
}
