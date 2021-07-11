function calculateCalories() {
    createCanvas(windowWidth, windowHeight+windowHeight/4)
    clear();
    background("#00FFFF");
    textAlign(CENTER);
    textSize(30);
    fill(0)
    stroke(6);
    text("Which of the following do you eat today?", windowWidth/2, windowHeight/10);
    strokeWeight(3);
    line(windowWidth/2 + windowWidth/4, windowHeight/6, windowWidth/2 + windowWidth/4, windowHeight + windowHeight/5);

    image(rotiImg, windowWidth/2- windowWidth/2.4, windowHeight/2 - windowHeight/5, windowWidth/10, windowWidth/10);
    image(riceImg, windowWidth/2- windowWidth/3.7, windowHeight/2 - windowHeight/5, windowWidth/10, windowWidth/10);
    image(eggImg, windowWidth/2- windowWidth/7.8, windowHeight/2 - windowHeight/5, windowWidth/10, windowWidth/10);
    image(idliImg, windowWidth/1.95, windowHeight/2 - windowHeight/5, windowWidth/10, windowWidth/10);
    image(potatoImg, windowWidth/1.52, windowHeight/2 - windowHeight/5, windowWidth/10, windowWidth/10);
    image(mushroomImg, windowWidth/2- windowWidth/2.4, windowHeight/1.8 , windowWidth/10, windowWidth/10);
    image(fishImg, windowWidth/1.95, windowHeight/1.237, windowWidth/10, windowWidth/10);
    image(okraImg, windowWidth/2- windowWidth/7.8, windowHeight/1.8, windowWidth/10, windowWidth/10);
    image(palakImg, windowWidth/1.95, windowHeight/1.8, windowWidth/10, windowWidth/10);
    image(breadImg, windowWidth/1.52, windowHeight/1.8, windowWidth/10, windowWidth/10);
    image(cheeseImg, windowWidth/2- windowWidth/2.4, windowHeight/1.237, windowWidth/10, windowWidth/10);
    image(butterImg, windowWidth/2- windowWidth/3.7, windowHeight/1.237, windowWidth/10, windowWidth/10);
    image(meatImg, windowWidth/2- windowWidth/7.8, windowHeight/1.237, windowWidth/10, windowWidth/10);
    image(beansImg, windowWidth/2- windowWidth/3.7, windowHeight/1.8, windowWidth/10, windowWidth/10);
    image(milkImg, windowWidth/1.52, windowHeight/1.237, windowWidth/10, windowWidth/10);
    image(milkImg, windowWidth/2- windowWidth/2.4, windowHeight+windowHeight/13.2, windowWidth/10, windowWidth/10);
    image(milkImg, windowWidth/2- windowWidth/3.7, windowHeight+windowHeight/13.2, windowWidth/10, windowWidth/10);

    b21 = createButton('Chapati');
    b21.position(windowWidth/2- windowWidth/2.4, windowHeight/2 - windowHeight/5+190);
    b21.mousePressed(()=>{
        tci += 71; //per roti
    });

    b22 = createButton('Rice');
    b22.position(windowWidth/2- windowWidth/3.7, windowHeight/2 - windowHeight/5+190);
    b22.mousePressed(()=>{
        tci +=130; //1 bowl
    });

    b23 = createButton('Egg');
    b23.position(windowWidth/2- windowWidth/7.8, windowHeight/2 - windowHeight/5+190);
    b23.mousePressed(()=>{
        tci += 78; //per egg
    });

    b24 = createButton('Idli');
    b24.position(windowWidth/1.95, windowHeight/2 - windowHeight/5+190);
    b24.mousePressed(()=>{
        tci += 35; // per idli
    });

    b25 = createButton('Potato');
    b25.position(windowWidth/1.52, windowHeight/2 - windowHeight/5+190);
    b25.mousePressed(()=>{
        tci += 131; // 1 bowl 
    });

    b26 = createButton('Mushroom');
    b26.position(windowWidth/2- windowWidth/2.4, windowHeight/1.8+190);
    b26.mousePressed(()=>{
        tci +=22;   //100 gram
    });

    b27 = createButton('Kidney Beans (raw)');
    b27.position(windowWidth/2- windowWidth/3.7, windowHeight/1.8+200);
    b27.mousePressed(()=>{
        tci += 607; //per cup
    });

    b28 = createButton('Ladyfinger');
    b28.position(windowWidth/2- windowWidth/7.8, windowHeight/1.8+190);
    b28.mousePressed(()=>{
        tci +=33; //per cup
    });

    b29 = createButton('Spinach');
    b29.position(windowWidth/1.95, windowHeight/1.8+190);
    b29.mousePressed(()=>{
        tci += 23; //per cup
    });

    b30 = createButton('White Bread');
    b30.position(windowWidth/1.52, windowHeight/1.8+190);
    b30.mousePressed(()=>{
        tci += 66; // per slice (25 gram);
    });

    b31 = createButton('Shredded Cheese');
    b31.position(windowWidth/2- windowWidth/2.4, windowHeight/1.237+190);
    b31.mousePressed(()=>{
        tci += 455; //1 cup
    });

    b32 = createButton('Butter');
    b32.position(windowWidth/2- windowWidth/3.7, windowHeight/1.237+190);
    b32.mousePressed(()=>{
        tci += 717;  //100 gram
    });

    b33 = createButton('Meat');
    b33.position(windowWidth/2- windowWidth/7.8, windowHeight/1.237+190);
    b33.mousePressed(()=>{
        tci +=143;  //100 gram
    });

    b34 = createButton('Salmon Fish');
    b34.position( windowWidth/1.95, windowHeight/1.237+190);
    b34.mousePressed(()=>{
        tci +=206;  //100 gram
    });

    b35 = createButton('Low Fat Milk');
    b35.position(windowWidth/1.52, windowHeight/1.237+190);
    b35.mousePressed(()=>{
        tci += 103; //1 cup
    });

    b36 = createButton('Whole Milk');
    b36.position(windowWidth/2- windowWidth/2.4, windowHeight+windowHeight/13.2+190);
    b36.mousePressed(()=>{
        tci += 156; 
    });

    b37 = createButton('Reduced Milk');
    b37.position(windowWidth/2- windowWidth/3.7, windowHeight+windowHeight/13.2+190);
    b37.mousePressed(()=>{
        tci += 124; 
    });
    
    stroke(1);
    strokeWeight(1);
    textSize(24);
    text("Total Calory Intake: ", windowWidth/2, windowHeight/3, windowWidth/2 + windowWidth/4);
    text(tci+" calories", windowWidth/2, windowHeight/2.5, windowWidth/2 + windowWidth/4);
    textSize(16);
    text("(click as many times as you)", windowWidth/2, windowHeight/1.8, windowWidth/2 + windowWidth/4);
    text("have took it today..)", windowWidth/2, windowHeight/1.7, windowWidth/2 + windowWidth/4);


    text("Click cheese, spinach, ladyfinger,",windowWidth/2, windowHeight/1.5, windowWidth/2 + windowWidth/4);
    text("kidneybean, potato, rice and milk ",windowWidth/2, windowHeight/1.44, windowWidth/2 + windowWidth/4);
    text("once if you have took 1 cup of it..",windowWidth/2, windowHeight/1.38, windowWidth/2 + windowWidth/4)
    
    text("Click butter, fish, meat, cheese",windowWidth/2.01, windowHeight/1.25, windowWidth/2 + windowWidth/4);
    text("and mushroom once if you",windowWidth/1.71, windowHeight/1.21, windowWidth/3 + windowWidth/4);
    text("have took 100 grams of it..",windowWidth/2, windowHeight/1.17, windowWidth/2 + windowWidth/4);

    text("Clicl bread, idli, egg and roti", windowWidth/2, windowHeight/1.09, windowWidth/2 + windowWidth/4);
    text("once if you have took it once..", windowWidth/2, windowHeight/1.06, windowWidth/2 + windowWidth/4);
}