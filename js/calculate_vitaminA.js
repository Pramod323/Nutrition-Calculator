var canvas;
var carrotImg, mangoImg, papayaImg, milkImg, eggImg, spinachImg, cheeseImg; 
var b1, b2, b3, b4, b5, b6, b7, b8, b9;
var tvi = 0;

function preload() {
    carrotImg = loadImage("vitamin images/carrot.jpg");
    mangoImg = loadImage("vitamin images/mango.png");
    papayaImg = loadImage("vitamin images/papaya.png");
    milkImg = loadImage("protein images/milk.jpg");
    eggImg = loadImage("protein images/egg.png");
    spinachImg = loadImage("protein images/palak.png");
    cheeseImg = loadImage("vitamin images/cheese.png");
}


function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
        
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

    image(carrotImg, windowWidth/2- windowWidth/2.2, windowHeight/2 - windowHeight/5, windowWidth/10, windowWidth/10);
    image(mangoImg, windowWidth/2- windowWidth/3.2, windowHeight/2 - windowHeight/5, windowWidth/10, windowWidth/10);
    image(eggImg, windowWidth/2- windowWidth/6, windowHeight/2 - windowHeight/5, windowWidth/10, windowWidth/10);
    image(cheeseImg, windowWidth/2.1, windowHeight/2 - windowHeight/5, windowWidth/10, windowWidth/10);
    image(papayaImg, windowWidth/1.63, windowHeight/2 - windowHeight/5, windowWidth/10, windowWidth/10);
    image(spinachImg, windowWidth/2- windowWidth/2.2, windowHeight/1.5 , windowWidth/10, windowWidth/10);
    image(milkImg, windowWidth/2- windowWidth/3.2, windowHeight/1.5, windowWidth/10, windowWidth/10);
    image(milkImg, windowWidth/2- windowWidth/6, windowHeight/1.5, windowWidth/10, windowWidth/10);
    image(milkImg, windowWidth/2.1, windowHeight/1.5, windowWidth/10, windowWidth/10);

    b1 = createButton('Carrot');
    b1.position(windowWidth/2- windowWidth/2.2, windowHeight/2 - windowHeight/5+190);
    b1.mousePressed(()=>{
        tvi += 872;
    });

    b2 = createButton('Mango');
    b2.position(windowWidth/2- windowWidth/3.2, windowHeight/2 - windowHeight/5+190);
    b2.mousePressed(()=>{
        tvi += 54;
    });

    b3 = createButton('Egg');
    b3.position(windowWidth/2- windowWidth/6, windowHeight/2 - windowHeight/5+190);
    b3.mousePressed(()=>{
        tvi += 12.7;
    });

    b4 = createButton('Chesse');
    b4.position(windowWidth/2.1, windowHeight/2 - windowHeight/5+190);
    b4.mousePressed(()=>{
        tvi += 125;
    });

    b5 = createButton('Papaya');
    b5.position( windowWidth/1.63, windowHeight/2 - windowHeight/5+190);
    b5.mousePressed(()=>{
        tvi += 152;
    });

    b6 = createButton('Spinach');
    b6.position( windowWidth/2- windowWidth/2.2, windowHeight/1.5+190);
    b6.mousePressed(()=>{
        tvi +=573;
    });

    b7 = createButton('Whole Milk');
    b7.position( windowWidth/2- windowWidth/3.2, windowHeight/1.5+190);
    b7.mousePressed(()=>{
        tvi +=34;
    });

    b8 = createButton('Reduced Milk');
    b8.position(windowWidth/2- windowWidth/6, windowHeight/1.5+190);
    b8.mousePressed(()=>{
        tvi +=67;
    });

    b9 = createButton('Lowfat Milk');
    b9.position(windowWidth/2.1, windowHeight/1.5+190);
    b9.mousePressed(()=>{
        tvi +=71;
    });

    stroke(1);
    strokeWeight(1);
    textSize(24);
    text("Total Vitamin-A Intake: ", windowWidth/2, windowHeight/3, windowWidth/2 + windowWidth/4);
    text(tvi+" :micrograms(μg)", windowWidth/2, windowHeight/2.5, windowWidth/2 + windowWidth/4);
    textSize(16);
    text("(click as many times as you)", windowWidth/2, windowHeight/1.8, windowWidth/2 + windowWidth/4);
    text("have took it today..)", windowWidth/2, windowHeight/1.7, windowWidth/2 + windowWidth/4);

    text("Click spinach and milk once if",windowWidth/2, windowHeight/1.5, windowWidth/2 + windowWidth/4);
    text("you have took 1/2 cup of it",windowWidth/2, windowHeight/1.45, windowWidth/2 + windowWidth/4);
    text("Click Carrot, manago, egg, cheese,",windowWidth/2.01, windowHeight/1.35, windowWidth/2 + windowWidth/4);
    text("papaya once if you have took",windowWidth/1.71, windowHeight/1.3, windowWidth/3 + windowWidth/4);
    text("100 grams of it.",windowWidth/2, windowHeight/1.25, windowWidth/2 + windowWidth/4);
}



//Pramod Prasad Singh
//WHJR Mars Hackathon