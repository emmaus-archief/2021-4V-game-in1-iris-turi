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

var widthMol = 120
var heightMol = 120

var plaatsMolX = 200
var plaatsMolY = 299
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
  rect(0, yBack * 2 - 55, widthBack, heightBack * 3/4 ); // onderste deel groen
};


/**
 * Tekent de vijand
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenMol = function(x, y) {
    fill("#A0522D")
    ellipse(plaatsMolX, plaatsMolY,widthMol,heightMol) //hoofd mol
    fill("#241600") 
    ellipse(plaatsMolX, plaatsMolY, widthMol/5, heightMol/5) //neus mol
    fill("black")
    ellipse(plaatsMolX +20 ,plaatsMolY - 20, widthMol/6, heightMol/6) //rechter oog 
    ellipse(plaatsMolX -20,plaatsMolY -20, widthMol/6, heightMol/6) //linker oog 

};


/**
 * Tekent de kogel of de bal
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenKogel = function(x, y) {


};

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
    if (plaatsMolY < 300 && plaatsMolY > 250 ){
        plaatsMolY= plaatsMolY - 1;
    }

};


/**
 * Zoekt uit of de vijand is geraakt
 * @returns {boolean} true als vijand is geraakt
 */
var checkVijandGeraakt = function() {

  return false;
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
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function() {
    
  return false;
};


/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

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
      beweegVijand();
      beweegKogel();
      beweegMol();
      
      if (checkVijandGeraakt()) {
        // punten erbij
        // nieuwe vijand maken
      }
      
      if (checkSpelerGeraakt()) {
        // leven eraf of gezondheid verlagen
        // eventueel: nieuwe speler maken
      }

      tekenAchtergrond ();
      tekenMol(plaatsMolX, plaatsMolY);
      tekenVeld1();
      tekenVeld2();
      tekenKogel(kogelX, kogelY);
      tekenSpeler(spelerX, spelerY);
    

      if (checkGameOver()) {
        spelStatus = GAMEOVER;
      }
      break;
  }
}  

