
// business logic

//two dice Objects
function Dice() {
  this.diceOne = 1;
  this.diceTwo = 1;
  this.diceValue = 0;
}

Dice.prototype.roll = function() {
  this.diceOne = Math.floor((Math.random()*6)+1);
  this.diceTwo = Math.floor((Math.random()*6)+1);
  if (this.diceOne === 1 && this.diceTwo === 1) {
    this.diceValue = "oink oink"
  } else if (this.diceOne === 1 || this.diceTwo === 1) {
    this.diceValue = 0;
  } else {
    this.diceValue = this.diceOne + this.diceTwo
  }
}

// Player object
function Player(name) {

}
// keep scores
function Game() {

}

//
Game.pro




// UI Logic