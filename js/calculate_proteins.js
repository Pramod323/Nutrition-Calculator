function calculateProteins() {
    clear();
    background("#00FFFF");
    textAlign(CENTER);
    textSize(30);
    fill(0)
    stroke(6);
    text("Which of the following do you eat today?", windowWidth/2, windowHeight/10);
    strokeWeight(3);
    line(windowWidth/2 + windowWidth/4, windowHeight/6, windowWidth/2 + windowWidth/4, windowHeight/2+windowHeight/2.5);

    image(rotiImg, windowWidth/2- windowWidth/2.4, windowHeight/2 - windowHeight/5, windowWidth/10, windowWidth/10);
    image(chanaImg, windowWidth/2- windowWidth/3.7, windowHeight/2 - windowHeight/5, windowWidth/10, windowWidth/10);
    image(eggImg, windowWidth/2- windowWidth/7.8, windowHeight/2 - windowHeight/5, windowWidth/10, windowWidth/10);
    image(idliImg, windowWidth/1.95, windowHeight/2 - windowHeight/5, windowWidth/10, windowWidth/10);
    image(potatoImg, windowWidth/1.52, windowHeight/2 - windowHeight/5, windowWidth/10, windowWidth/10);
    image(milkImg, windowWidth/2- windowWidth/2.4, windowHeight/1.5 , windowWidth/10, windowWidth/10);
    image(beansImg, windowWidth/2- windowWidth/3.7, windowHeight/1.5, windowWidth/10, windowWidth/10);
    image(okraImg, windowWidth/2- windowWidth/7.8, windowHeight/1.5, windowWidth/10, windowWidth/10);
    image(palakImg, windowWidth/1.95, windowHeight/1.5, windowWidth/10, windowWidth/10);
    image(breadImg, windowWidth/1.52, windowHeight/1.5, windowWidth/10, windowWidth/10);

    b1 = createButton('Chapati');
    b1.position(windowWidth/2- windowWidth/2.4, windowHeight/2 - windowHeight/5+190);
    b1.mousePressed(()=>{
        tpi +=3;
    });

    b2 = createButton('Black Chana');
    b2.position(windowWidth/2- windowWidth/3.7, windowHeight/2 - windowHeight/5+190);
    b2.mousePressed(()=>{
        tpi +=3;
    });

    b3 = createButton('Egg');
    b3.position(windowWidth/2- windowWidth/7.8, windowHeight/2 - windowHeight/5+190);
    b3.mousePressed(()=>{
        tpi +=6;
    });

    b4 = createButton('Idli');
    b4.position(windowWidth/1.95, windowHeight/2 - windowHeight/5+190);
    b4.mousePressed(()=>{
        tpi +=1;
    });

    b5 = createButton('Potato');
    b5.position(windowWidth/1.52, windowHeight/2 - windowHeight/5+190);
    b5.mousePressed(()=>{
        tpi +=2;
    });

    b6 = createButton('Milk');
    b6.position( windowWidth/2- windowWidth/2.4, windowHeight/1.5+190);
    b6.mousePressed(()=>{
        tpi +=3.4;
    });

    b7 = createButton('Kidney Beans');
    b7.position(windowWidth/2- windowWidth/3.7, windowHeight/1.5+190);
    b7.mousePressed(()=>{
        tpi +=24;
    });

    b8 = createButton('Ladyfinger');
    b8.position(windowWidth/2- windowWidth/7.8, windowHeight/1.5+190);
    b8.mousePressed(()=>{
        tpi +=1.9;
    });

    b9 = createButton('Spinach');
    b9.position(windowWidth/1.95, windowHeight/1.5+190);
    b9.mousePressed(()=>{
        tpi +=5.35;
    });

    b10 = createButton('Bread');
    b10.position(windowWidth/1.52, windowHeight/1.5+190);
    b10.mousePressed(()=>{
        tpi +=2.3;
    });  

    stroke(1);
    strokeWeight(1);
    textSize(24);
    text("Total Protein Intake: ", windowWidth/2, windowHeight/3, windowWidth/2 + windowWidth/4);
    text(tpi+" grams", windowWidth/2, windowHeight/2.5, windowWidth/2 + windowWidth/4);
    textSize(16);
    text("(click as many times as you)", windowWidth/2, windowHeight/1.8, windowWidth/2 + windowWidth/4);
    text("have took it today..)", windowWidth/2, windowHeight/1.7, windowWidth/2 + windowWidth/4);
    text("Click Chapati, idli, bread and egg",windowWidth/2, windowHeight/1.5, windowWidth/2 + windowWidth/4);
    text("once if you have took it once",windowWidth/2, windowHeight/1.45, windowWidth/2 + windowWidth/4);
    text("Click Black Chana, potato, milk, spinach,",windowWidth/2.01, windowHeight/1.35, windowWidth/2 + windowWidth/4);
    text("kidneybeans and ladyfinger once if",windowWidth/1.71, windowHeight/1.3, windowWidth/3 + windowWidth/4);
    text("you have took 100 grams of it.",windowWidth/2, windowHeight/1.25, windowWidth/2 + windowWidth/4);
}


//Pramod Prasad Singh
//WHJR Mars Hackathon