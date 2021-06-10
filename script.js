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
var spelStatus = SPELEN;

var spelerX = 200; // x-positie van speler
var spelerY = 100; // y-positie van speler

var kogelX = 0;    // x-positie van kogel
var kogelY = 0;    // y-positie van kogel

var vijandX = 0;   // x-positie van vijand
var vijandY = 0;   // y-positie van vijand

var score = 0; // aantal behaalde punten

var widthBack = 1280;
var heightBack = 450;
var yBack = 270;

var widthMol = 120;
var heightMol = 120;

var plaatsMolX = 200;
var plaatsMolY = 330;

var tijdTotZichtbaar ;
var molGeklikt

var points = 0;
var pointsOneTime = true;

var time = 59
/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */


/**
 * Tekent het speelveld
 */
var tekenAchtergrond = function() {
    fill('deepskyblue');
    rect (0,0, 1280, 720);
}
var tekenVeld1 = function () { 
  fill("limeGreen");
  rect(0, yBack, widthBack, heightBack); //boveste deel groen
};

var tekenVeld2 = function () { 
  fill("limeGreen");
  rect(0, yBack * 2 - 55, widthBack, heightBack * 3/4 ); //onderste deel groen
};


/**
 * Tekent de mol
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenMol = function(x, y) {
    fill("#A0522D")
    ellipse(plaatsMolX, plaatsMolY,widthMol,heightMol) //hoofd mol
    fill("#241600") 
    ellipse(plaatsMolX, plaatsMolY, widthMol/5, heightMol/5) //Neus mol
    fill("black")
    ellipse(plaatsMolX +20 ,plaatsMolY - 20, widthMol/6, heightMol/6) //rechter oog 
    ellipse(plaatsMolX -20,plaatsMolY -20, widthMol/6, heightMol/6) //linker oog 

};


/**
 * Tekent de tijd
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenTijd = function(x, y) {
    fill(0,0,0);
    textSize(60);
    text(time, 1000, 570, 310, 300);

};
var timer = function(x, y){
    if(1 seconde){
        time = time -1
    }


    

}


var tekenPunten = function(x, y) {
    if ( tijdTotZichtbaar > 0 && tijdTotZichtbaar <= -300 && plaatsMolY === 249 && pointsOneTime && molGeklikt ) {
     points = points + 5;
     pointsOneTime = false;
    }   

     else if (tijdTotZichtbaar > -300 && tijdTotZichtbaar <= -600 && plaatsMolY === 249 && pointsOneTime && molGeklikt) {
     points = points + 4;
     pointsOneTime = false;
    }   

     else if (tijdTotZichtbaar > -600  && tijdTotZichtbaar <= -900 && plaatsMolY === 249 && pointsOneTime && molGeklikt) {
     points = points + 3;
     pointsOneTime = false;
    }   

     else if (tijdTotZichtbaar > -900 && tijdTotZichtbaar <= -1200 && plaatsMolY === 249 && pointsOneTime && molGeklikt) {
     points = points + 2;
     pointsOneTime = false;
    }   
     else if (tijdTotZichtbaar > -1200 && tijdTotZichtbaar <= 2000 && plaatsMolY === 249 && pointsOneTime && molGeklikt) {
     points = points + 1;
     pointsOneTime = false;
    }   
    fill(0,0,0);
    textSize (75);
    text ("points:" +  points, 950, 630, 300, 300);
    console.log (points);
}

     


/**
 * Tekent de speler
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenSpeler = function(x, y) {   

};


/**
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */
var beweegVijand = function() {
    
};


/**
 * Updatet globale variabelen met positie van kogel of bal
 */
var beweegKogel = function() {

};


/**
 * Kijkt wat de toetsen/muis etc zijn.
 * Updatet globale variabele plaatsMolY
 */
var beweegMol = function() {
    // random omhoog
    tijdTotZichtbaar = tijdTotZichtbaar - 1;  // ergens anders neerzetten
    console.log(tijdTotZichtbaar);

    //beweging omhoog
    if (tijdTotZichtbaar <= 0 &&
        plaatsMolY <= 330 && plaatsMolY > 250 ) {
      plaatsMolY = plaatsMolY - 3;
    }

    // beweeg omlaag 
    if ( molGeklikt &&
        tijdTotZichtbaar <= 0){
      plaatsMolY = 330;
      
      pointsOneTime = true;
      resetTijdTotZichtbaar();
      console.log (plaatsMolY);
    }
    
};



/**
 * Zoekt uit of de mol is geklikt
 * @returns {boolean} true als mol is geklikt
 */
  var checkMolGeklikt = function() {
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
        console.log (checkMolGeklikt);    
};


/**
 * Zoekt uit of de speler is geraakt
 * bijvoorbeeld door botsing met vijand
 * @returns {boolean} true als speler is geraakt
 */
var checkSpelerGeraakt = function() {
    
  return false;
};

/**
 * Zoekt uit of het spel moet beginnen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function() {
    
  return false;
};

/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function() {
    
  return false;
};

/**
 * Stelt de tijdTotZichtbaar-teller in op
 * een random getal
 */
var resetTijdTotZichtbaar = function() {
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
    case SPELEN:
      beweegKogel();
      beweegMol();
      
      if (checkMolGeklikt()) {
        // punten erbij
        // nieuwe vijand maken
      }
      
      if (checkSpelerGeraakt()) {
        // leven eraf of gezondheid verlagen
        // eventueel: nieuwe speler maken
      }

      tekenAchtergrond ();
      tekenMol(plaatsMolX, plaatsMolY);
      tekenMol(plaatsMolX + 150, plaatsMolY);
      tekenMol(plaatsMolX + 300, plaatsMolY);
      tekenVeld1();
      tekenVeld2();
      tekenTijd(kogelX, kogelY);
      timer(kogelX, kogelY);
      tekenSpeler(spelerX, spelerY);
      // @ts-ignore
      tekenPunten();
    

      if (checkGameOver()) {
        spelStatus = GAMEOVER;
      }
      break;
  }
}  

