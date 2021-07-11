var canvas;
var cheeseImg, eggsImg, milkImg, meatImg, rotiImg, riceImg, spinachImg;  
var b1, b2, b3, b4, b5, b6, b7;
var tvi = 0;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    tvi = 0;
}

function preload() {
    cheeseImg = loadImage("vitamin images/cheese.png");
    eggsImg = loadImage("protein images/egg.png");
    milkImg = loadImage("protein images/milk.jpg");
    meatImg = loadImage("vitamin images/meat.png");
    rotiImg = loadImage("protein images/roti.jfif");
    riceImg = loadImage("vitamin images/rice.png");
    spinachImg = loadImage("protein images/palak.png");
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

    image(cheeseImg, windowWidth/2- windowWidth/2.2, windowHeight/2 - windowHeight/5, windowWidth/10, windowWidth/10);
    image(eggsImg, windowWidth/2- windowWidth/3.2, windowHeight/2 - windowHeight/5, windowWidth/10, windowWidth/10);
    image(milkImg, windowWidth/2- windowWidth/6, windowHeight/2 - windowHeight/5, windowWidth/10, windowWidth/10);
    image(meatImg, windowWidth/2.1, windowHeight/2 - windowHeight/5, windowWidth/10, windowWidth/10);
    image(rotiImg, windowWidth/1.63, windowHeight/2 - windowHeight/5, windowWidth/10, windowWidth/10);
    image(riceImg, windowWidth/2- windowWidth/2.2, windowHeight/1.5 , windowWidth/10, windowWidth/10);
    image(spinachImg, windowWidth/2- windowWidth/3.2, windowHeight/1.5, windowWidth/10, windowWidth/10)

    b1 = createButton('Cheese');
    b1.position(windowWidth/2- windowWidth/2.2, windowHeight/2 - windowHeight/5+190);
    b1.mousePressed(()=>{
        tvi += 0.8;
    });

    b2 = createButton('Egg');
    b2.position(windowWidth/2- windowWidth/3.2, windowHeight/2 - windowHeight/5+190);
    b2.mousePressed(()=>{
        tvi += 1.1;
    });

    b3 = createButton('Low Fat Milk');
    b3.position(windowWidth/2- windowWidth/6, windowHeight/2 - windowHeight/5+190);
    b3.mousePressed(()=>{
        tvi += 0.5;
    });

    b4 = createButton('Meat');
    b4.position(windowWidth/2.1, windowHeight/2 - windowHeight/5+190);
    b4.mousePressed(()=>{
        tvi += 0.6;
    });

    b5 = createButton('Chapati (no vitamin B-12)');
    b5.position( windowWidth/1.63, windowHeight/2 - windowHeight/5+190);

    b6 = createButton('Rice (no vitamin B-12)');
    b6.position( windowWidth/2- windowWidth/2.2, windowHeight/1.5+190); 

    b7 = createButton('Spinach');
    b7.position( windowWidth/2- windowWidth/3.2, windowHeight/1.5+190);
    b7.mousePressed(()=>{
        tvi += 0.195;
    });

    stroke(1);
    strokeWeight(1);
    textSize(24);
    text("Total Vitamin B-12 Intake: ", windowWidth/2, windowHeight/3, windowWidth/2 + windowWidth/4);
    text(tvi+" :micrograms(μg)", windowWidth/2, windowHeight/2.5, windowWidth/2 + windowWidth/4);
    textSize(16);
    text("(click as many times as you)", windowWidth/2, windowHeight/1.8, windowWidth/2 + windowWidth/4);
    text("have took it today..)", windowWidth/2, windowHeight/1.7, windowWidth/2 + windowWidth/4);

    text("Click Carrot, manago, egg, cheese,",windowWidth/2, windowHeight/1.5, windowWidth/2 + windowWidth/4);
    text("papaya once if you have took",windowWidth/2, windowHeight/1.45, windowWidth/2 + windowWidth/4);
    text("100 grams of it.",windowWidth/2.01, windowHeight/1.35, windowWidth/2 + windowWidth/4);
}
  



//Pramod Prasad Singh
//WHJR Mars Hackathon