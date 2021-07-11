function calculateVitamins() {
    clear();
    background("#00FFFF");

    image(vAImg, windowWidth/4, windowHeight/4, windowHeight/3, windowHeight/3);
    image(vBImg, windowWidth/4 + windowWidth/4 + windowWidth/4, windowHeight/4, windowHeight/3, windowHeight/3);
    image(vCImg, windowWidth/4, windowHeight/2+windowHeight/5, windowHeight/3, windowHeight/3);
    image(vDImg, windowWidth/4 + windowWidth/4 + windowWidth/4, windowHeight/2+windowHeight/5, windowHeight/3, windowHeight/3);

    b11 = createButton('Vitamin A');
    b11.position(windowWidth/4, windowHeight/4 + 190);
    b11.mousePressed(()=>{
        location.href = 'a.html';
        if(appState===2){
            alert("Vitamin A was pressesd.");
            appState = 21;
        }
    })

    b12 = createButton('Vitamin B-12');
    b12.position(windowWidth/4 + windowWidth/4 + windowWidth/4, windowHeight/4 + 190);
    b12.mousePressed(()=>{
        location.href = 'b.html';
        textSize(50);
        text("Loading..", 0,0);
        if(appState===2){
            alert("Vitamin B was pressesd.");
            appState = 22;
        }
    })

    b13 = createButton('Vitamin C');
    b13.position(windowWidth/4, windowHeight/2+windowHeight/5 + 190);
    b13.mousePressed(()=>{
        location.href = 'c.html';
        textSize(50);
        text("Loading..", 0,0);
        if(appState===2){
            alert("Vitamin C was pressesd.");
            appState = 23;
        }
    })

    b14 = createButton('Vitamin D');
    b14.position(windowWidth/4 + windowWidth/4 + windowWidth/4, windowHeight/2+windowHeight/5 + 190);
    b14.mousePressed(()=>{
        textSize(50);
        text("Loading..", 0,0);
        location.href = 'd.html';
        if(appState===2){
            alert("Vitamin D was pressesd.");
            appState = 24;
        }
    })
}