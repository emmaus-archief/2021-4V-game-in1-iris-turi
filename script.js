/// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />
"use strict";

/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */




/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const UITLEG = 0;
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = UITLEG;

var widthBack = 1280;
var heightBack = 450;
var yBack = 270;

var widthMol = 120;
var heightMol = 120;

var plaatsMolX = 200;
var plaatsMolY = 330;

var tijdTotZichtbaar;
var molGeklikt;

var points = 0;
var pointsOneTime = true;

var checkGameOver;

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var TimerAlEenKeer = false;
var jn = "60";
/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */


/**
 * Tekent het speelveld
 */
var tekenAchtergrond = function () {
    fill('deepskyblue');
    rect(0, 0, 1280, 720);
}
var tekenVeld1 = function () {
    fill("limeGreen");
    rect(0, yBack, widthBack, heightBack); //boveste deel groen
};

var tekenVeld2 = function () {
    fill("limeGreen");
    rect(0, yBack * 2 - 55, widthBack, heightBack * 3 / 4); //onderste deel groen
};

var tekenZon = function () {
    //zon
    fill(255, 247, 0);
    ellipse(20,20,200,200);

    //zonnestralen
    fill(255, 247, 0);
    line(135,20,220,20);
    line(130,60,210,70);
    line(110,90,170,140);
    line(70,120,100,180);
    line(20,130,20,200);
};


/**
 * Tekent de mol
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenMol = function (x, y) {
    fill("#A0522D")
    ellipse(plaatsMolX, plaatsMolY, widthMol, heightMol) //hoofd mol
    fill("#241600")
    ellipse(plaatsMolX, plaatsMolY, widthMol / 5, heightMol / 5) //Neus mol
    fill("black")
    ellipse(plaatsMolX + 20, plaatsMolY - 20, widthMol / 6, heightMol / 6) //rechter oog 
    ellipse(plaatsMolX - 20, plaatsMolY - 20, widthMol / 6, heightMol / 6) //linker oog 

};





function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function TimerLoop() {

   

    if (TimerAlEenKeer == false) {
        TimerAlEenKeer = true;
        console.log('Timer begint');
        await sleep(1000);
        console.log('1 seconde voorbij');
        


        // Sleep in loop
        for (let i = 0; i < 60; i++) {
            await sleep(1000);

            let j = 60 - (i + 1);
            jn = j.toString();

            console.log(jn + 'sec');

            //tekenTijd (kogelX,kogelY,"")
            
           
        }
    }
}
 


var tekenPunten = function (x, y) {
 if ( tijdTotZichtbaar < 0 && tijdTotZichtbaar >= -50 && plaatsMolY === 249 && pointsOneTime && molGeklikt ) {
     points = points + 5;
     pointsOneTime = false;
    }   
     else if (tijdTotZichtbaar < -50 && tijdTotZichtbaar >= -55 && plaatsMolY === 249 && pointsOneTime && molGeklikt) {
     points = points + 4;
     pointsOneTime = false;
    }   
     else if (tijdTotZichtbaar < -55  && tijdTotZichtbaar >= -65 && plaatsMolY === 249 && pointsOneTime && molGeklikt) {
     points = points + 3;
     pointsOneTime = false;
    }   
     else if (tijdTotZichtbaar < -65 && tijdTotZichtbaar >= -100 && plaatsMolY === 249 && pointsOneTime && molGeklikt) {
     points = points + 2;
     pointsOneTime = false;
    }   
    
     else if (tijdTotZichtbaar < -100 && tijdTotZichtbaar >= 20000 && plaatsMolY === 249 && pointsOneTime && molGeklikt) {
     points = points + 1;
     pointsOneTime = false;
    }   
    fill(0, 4, 115);
    textSize(50);
    text(" Time: " + jn + "\n Points: " + points, 950, 560, 350, 350);
    console.log(points);
}



/**
 * beweegt mol
 * Updatet globale variabele plaatsMolY
 */
var beweegMol = function () {
    // random omhoog
    tijdTotZichtbaar = tijdTotZichtbaar - 1;  // ergens anders neerzetten
    console.log(tijdTotZichtbaar);

    //beweging omhoog
    if (tijdTotZichtbaar <= 0 &&
        plaatsMolY <= 330 && plaatsMolY > 250) {
        plaatsMolY = plaatsMolY - 3;
    }

    // beweeg omlaag 
    if (molGeklikt &&
        tijdTotZichtbaar <= 0) {
        plaatsMolY = 330;
        plaatsMolX = random(200, 1000)
        pointsOneTime = true;
        plaatsMolX = random(100, 1180);
        resetTijdTotZichtbaar();
        console.log(plaatsMolY);
    }

};



/**
 * Zoekt uit of de mol is geklikt
 * retuns molgeklikt true als mol is geklikt
 */
var checkMolGeklikt = function () {
    if (mouseIsPressed &&
        mouseX > plaatsMolX - 60 &&
        mouseX < plaatsMolX + 60 &&
        mouseY > plaatsMolY - 60 &&
        mouseY < plaatsMolY + 60) {
        molGeklikt = true;
    }
    else {
        molGeklikt = false
    }
    console.log(checkMolGeklikt);
};


/**
 * Zoekt uit of het spel moet beginnen
 *  true als het spel is afgelopen
 */
var checkStartGame = function () {
    fill(255,255,255);
    textSize (60);
    // @ts-ignore
    textAlign(CENTER);
    text ("Klik op zo veel mogelijk mollen in een minuut. Hoe sneller je klikt hoe meer punten!", 50, 200, 1180, 720);
    textSize (50);
    text ("klik op enter om te beginnen", 100, 500, 1180, 700);
    if (keyIsDown(13)){
        spelStatus = SPELEN;
    };

    ;
};

var checkStartGameOver = function () {
    fill(0,0,0);
    textSize (80);
    // @ts-ignore
    textAlign(CENTER);
    text("GAME OVER!", 50,200,1180,700);
    text ("points: " + points, 50, 350, 1180, 700);
    textSize(30);
    text ("klik op enter om opnieuw te beginnen", 50, 500, 1180, 700);
    if (keyIsDown(13)){
        spelStatus = SPELEN; 
    };


};

/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var tijdOm = function () {
    checkGameOver = false;
    if (jn == "0"){
        checkGameOver = true;
    }
  
};

/**
 * Stelt de tijdTotZichtbaar-teller in op
 * een random getal
 */
var resetTijdTotZichtbaar = function () {
    tijdTotZichtbaar = random(0, 250);
}


/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser.
 */
function setup() {
    // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
    createCanvas(1280, 720);

    resetTijdTotZichtbaar();
    // Kleur de achtergrond blauw, zodat je het kunt zien
    background('deepskyblue');
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */

function draw() {
    switch (spelStatus) {
        case UITLEG:
            tekenVeld1();
            tekenVeld2 ();
            tekenZon();
            checkStartGame();
            break;
        case SPELEN:
            
            beweegMol();
            checkMolGeklikt();
            
            tekenAchtergrond();
            tekenZon();
            

            TimerLoop();
            tekenMol(plaatsMolX, plaatsMolY);
            tekenVeld1();
            tekenVeld2();

            // @ts-ignore
            tekenPunten();
            console.log(jn + "in Draw")
            


           //if (checkGameOver = true) {
           //    spelStatus = GAMEOVER;
           // }
            break;
             case GAMEOVER:
            tekenAchtergrond();
             checkStartGameOver();
            
            break;
    }
}

