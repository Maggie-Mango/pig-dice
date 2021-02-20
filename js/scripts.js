
// business logic

function Dice() {
  this.diceOne = 1;
}

Dice.prototype.roll = function() {
  this.diceOne = Math.floor((Math.random()*6)+1);
  if (this.diceOne === 1) {
    this.diceOne = 0;
  } else {
  return this.diceOne
  }
}


console.log()


let testDice = new Dice()
console.log(testDice.roll())

// Player object
function Player(name) {

}
// keep scores
function Game() {

}

//
Game.pro




// UI Logic