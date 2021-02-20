//arrays
let playersArray = []


function Dice() {
  this.diceValue = 1;
}

function Player(name) {
	this.name = name;
  this.turnScore = 0;
  this.totalScore = 0;
  this.dice = new Dice;
  playersArray.push(this);

}

Dice.prototype.rollDice = function() {
  this.diceValue = Math.floor((Math.random()*6)+1);
  if (this.diceValue === 1) {
    this.turnScore = 0;
    return "turn score: " + this.turnScore
  } else {
  	this.turnScore = this.diceValue;
  	return "turn score: " + this.turnScore
	}
}