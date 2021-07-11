var canvas;
var milkImg, butterImg, fishImg, eggImg, sunlightImg, mushroomImg;
var b1, b2, b3, b4, b5, b6;

function preload() {
    sunlightImg = loadImage("vitamin images/sun.jpg");
    eggImg = loadImage("protein images/egg.png");
    milkImg = loadImage("protein images/milk.jpg");
    fishImg = loadImage("vitamin images/fish.png");
    butterImg = loadImage("vitamin images/butter.jfif");
    mushroomImg = loadImage("vitamin images/mushroom.png");
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    tvi = 0;
}

function draw() {
    background("#00FFFF");
    textAlign(CENTER);
    textSize(30);
    fill(0)
    stroke(6);
    text("Which of the following do you eat today?", windowWidth/2, windowHeight/10);
    strokeWeight(3);
    line(windowWidth/2 + windowWidth/4, windowHeight/6, windowWidth/2 + windowWidth/4, windowHeight/2+windowHeight/2.5);

    image(sunlightImg, windowWidth/2- windowWidth/2.2, windowHeight/2 - windowHeight/5, windowWidth/10, windowWidth/10);
    image(eggImg, windowWidth/2- windowWidth/3.2, windowHeight/2 - windowHeight/5, windowWidth/10, windowWidth/10);
    image(milkImg, windowWidth/2- windowWidth/6, windowHeight/2 - windowHeight/5, windowWidth/10, windowWidth/10);
    image(fishImg, windowWidth/2.1, windowHeight/2 - windowHeight/5, windowWidth/10, windowWidth/10);
    image(butterImg, windowWidth/1.63, windowHeight/2 - windowHeight/5, windowWidth/10, windowWidth/10);
    image(mushroomImg, windowWidth/2- windowWidth/2.2, windowHeight/1.5 , windowWidth/10, windowWidth/10);

    b2 = createButton('Egg');
    b2.position(windowWidth/2- windowWidth/3.2, windowHeight/2 - windowHeight/5+190);
    b2.mousePressed(()=>{
        tvi += 1.1; //per piece
    });

    b3 = createButton('Whole Milk');
    b3.position(windowWidth/2- windowWidth/6, windowHeight/2 - windowHeight/5+190);
    b3.mousePressed(()=>{
        tvi += 1.4;
    });

    b4 = createButton('Salmon Fish');
    b4.position(windowWidth/2.1, windowHeight/2 - windowHeight/5+190);
    b4.mousePressed(()=>{
        tvi += 15;
    });

    b5 = createButton('Butter');
    b5.position( windowWidth/1.63, windowHeight/2 - windowHeight/5+190);
    b5.mousePressed(()=>{
        tvi += 18;
    });

    b6 = createButton('Mushroom');
    b6.position( windowWidth/2- windowWidth/2.2, windowHeight/1.5+190);
    b6.mousePressed(()=>{
        tvi +=0.1;
    });

    stroke(1);
    strokeWeight(1);
    textSize(24);
    text("Total Vitamin-D Intake: ", windowWidth/2, windowHeight/3, windowWidth/2 + windowWidth/4);
    text(tvi+" :micrograms(μg)", windowWidth/2, windowHeight/2.5, windowWidth/2 + windowWidth/4);
    textSize(16);
    text("(click as many times as you)", windowWidth/2, windowHeight/1.8, windowWidth/2 + windowWidth/4);
    text("have took it today..)", windowWidth/2, windowHeight/1.7, windowWidth/2 + windowWidth/4);

    text("Click mushroom and egg once if",windowWidth/2, windowHeight/1.5, windowWidth/2 + windowWidth/4);
    text("you have took 1/2 cup of it",windowWidth/2, windowHeight/1.45, windowWidth/2 + windowWidth/4);
    text("Click butter, fish, milk & cheese",windowWidth/2.01, windowHeight/1.35, windowWidth/2 + windowWidth/4);
    text("once if you have took 100 grams of it.",windowWidth/1.71, windowHeight/1.3, windowWidth/3 + windowWidth/4);
    stroke(1);
    text("10-30 minuites of sunlight per day is necessary",  windowWidth/2- windowWidth/2.2, windowHeight/2 - windowHeight/5 + 30, windowWidth/10, windowWidth/10)
}

    

//Pramod Prasad Singh
//WHJR Mars Hackathon