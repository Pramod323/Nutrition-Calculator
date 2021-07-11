var canvas;
var lemonImg, orangeImg, amlaImg, green_chilliImg, tomatoImg, guavaImg, papayaImg;
var b1, b2, b3, b4, b5, b6, b7;

function preload() {
    lemonImg = loadImage("vitamin images/lemon.png");
    orangeImg = loadImage("vitamin images/orange.png");
    amlaImg = loadImage("vitamin images/amla.jfif");
    green_chilliImg = loadImage("vitamin images/green-chilli.jfif");
    tomatoImg = loadImage("vitamin images/tomato.png");
    guavaImg = loadImage("vitamin images/guava.png");
    papayaImg = loadImage("vitamin images/papaya.png");
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

    image(lemonImg, windowWidth/2- windowWidth/2.2, windowHeight/2 - windowHeight/5, windowWidth/10, windowWidth/10);
    image(orangeImg, windowWidth/2- windowWidth/3.2, windowHeight/2 - windowHeight/5, windowWidth/10, windowWidth/10);
    image(amlaImg, windowWidth/2- windowWidth/6, windowHeight/2 - windowHeight/5, windowWidth/10, windowWidth/10);
    image(green_chilliImg, windowWidth/2.1, windowHeight/2 - windowHeight/5, windowWidth/10, windowWidth/10);
    image(tomatoImg, windowWidth/1.63, windowHeight/2 - windowHeight/5, windowWidth/10, windowWidth/10);
    image(guavaImg, windowWidth/2- windowWidth/2.2, windowHeight/1.5 , windowWidth/10, windowWidth/10);
    image(papayaImg, windowWidth/2- windowWidth/3.2, windowHeight/1.5, windowWidth/10, windowWidth/10);

    b1 = createButton('Lemon');
    b1.position(windowWidth/2- windowWidth/2.2, windowHeight/2 - windowHeight/5+190);
    b1.mousePressed(()=>{
        tvi += 53;
    });

    b2 = createButton('Orange');
    b2.position(windowWidth/2- windowWidth/3.2, windowHeight/2 - windowHeight/5+190);
    b2.mousePressed(()=>{
        tvi += 53.2;
    });

    b3 = createButton('Amla');
    b3.position(windowWidth/2- windowWidth/6, windowHeight/2 - windowHeight/5+190);
    b3.mousePressed(()=>{
        tvi += 650; //per fruit
    });

    b4 = createButton('Green Chilli');
    b4.position(windowWidth/2.1, windowHeight/2 - windowHeight/5+190);
    b4.mousePressed(()=>{
        tvi += 242.5;
    });

    b5 = createButton('Tomato');
    b5.position( windowWidth/1.63, windowHeight/2 - windowHeight/5+190);
    b5.mousePressed(()=>{
        tvi += 13.7;
    });

    b6 = createButton('Guava');
    b6.position( windowWidth/2- windowWidth/2.2, windowHeight/1.5+190);
    b6.mousePressed(()=>{
        tvi += 228.3;
    });

    b7 = createButton('Papaya');
    b7.position( windowWidth/2- windowWidth/3.2, windowHeight/1.5+190);
    b7.mousePressed(()=>{
        tvi +=60.9;
    });


    stroke(1);
    strokeWeight(1);
    textSize(24);
    text("Total Vitamin-C Intake: ", windowWidth/2, windowHeight/3, windowWidth/2 + windowWidth/4);
    text(tvi+" :micrograms(μg)", windowWidth/2, windowHeight/2.5, windowWidth/2 + windowWidth/4);
    textSize(16);
    text("(click as many times as you)", windowWidth/2, windowHeight/1.8, windowWidth/2 + windowWidth/4);
    text("have took it today..)", windowWidth/2, windowHeight/1.7, windowWidth/2 + windowWidth/4);

    text("Click amla once if",windowWidth/2, windowHeight/1.5, windowWidth/2 + windowWidth/4);
    text("you have took 1 fruit of it..",windowWidth/2, windowHeight/1.45, windowWidth/2 + windowWidth/4);
    text("Click Lemon, orange, green chilli,",windowWidth/2.01, windowHeight/1.35, windowWidth/2 + windowWidth/4);
    text("tomato, guava and papaya once if",windowWidth/1.71, windowHeight/1.3, windowWidth/3 + windowWidth/4);
    text("you have took100 grams of it..",windowWidth/2, windowHeight/1.25, windowWidth/2 + windowWidth/4);
}



//Pramod Prasad Singh
//WHJR Mars Hackathon