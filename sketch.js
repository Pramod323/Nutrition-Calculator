var canvas;
var appState = 0;
var proteinBox, vitaminBox, fatsBox;
var proteinImg, vitaminImg, fatsImg;
/*
 @ *0 = show which nutrition to calculate
 @ *1 = calculate protein;
 @ *2 = calculate vitamin;
        #21 = calculate vitamin A;
        #22 = calculate vitamin B;
        #23 = calculate vitamin C;
        #24 = calculate vitamin D;
 @ *3 = calculate calories;
*/

//Protein
var rotiImg, chanaImg, eggImg, idliImg, potatoImg, milkImg, beansImg, okraImg, palakImg, breadImg;
var tpi = 0;
var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10;

//Vitamin
var vAImg, vBImg, vCImg, vDImg;
var b11, b12, b13, b14;

//Calaries
var riceImg, cheeseImg, butterImg, meatImg, fishImg, mushroomImg;
var b21, b22, b23, b24, b25, b26, b27, b28, b29, b30,
b31, b32, b33, b34, b35, b36, b37, b38, b39, b40;
var tci = 0;

function preload() {
    pl(); // function in "js/preloading.js"
}

function setup(){
    canvas = createCanvas(windowWidth,windowHeight);

    tci = 0;
    tpi = 0;

}

function draw(){
    background("#00FFFF");
    imageMode(CENTER);
    if(appState===0){

        fatsBox = createSprite(windowWidth/5.75, windowHeight/2, windowWidth/3.5, windowWidth/3.5);
        vitaminBox = createSprite(windowWidth/2.025, windowHeight/2, windowWidth/3.5, windowWidth/3.5);
        proteinBox = createSprite(windowWidth/2 + windowWidth/3.2, windowHeight/2, windowWidth/3.5, windowWidth/3.5);

        proteinBox.visible = false;
        vitaminBox.visible = false;
        fatsBox.visible = false;

        image(fatsImg, windowWidth/5.75, windowHeight/2, windowWidth/3.5, windowWidth/3.5);
        image(vitaminImg, windowWidth/2.025, windowHeight/2, windowWidth/3.5, windowWidth/3.5);
        image(proteinImg, windowWidth/2 + windowWidth/3.2, windowHeight/2, windowWidth/3.5, windowWidth/3.5);
    }

    if(mousePressedOver(proteinBox)&&appState===0){
        appState = 1;
    }
    if(mousePressedOver(vitaminBox)&&appState===0){
        appState = 2;
        location.href = "v.html";
    }
    if(mousePressedOver(fatsBox)&&appState===0){
        appState = 3;
    }
    drawSprites();

    if(appState===1){
        calculateProteins(); // function in "js/calculate_proteins.js"
    }

    if(appState===3){
        calculateCalories();
    }
}


//Pramod Prasad Singh
//WHJR Mars Hackathon