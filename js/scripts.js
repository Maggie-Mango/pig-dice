//business logic for dice
function Dice() {
	this.diceValue=1;
  this.roll=0;
}

function Player(name) {
	this.name = name;
  this.turnScore = 0;
  this.totalScore = 0;
  this.dice = new Dice();
  this.dice.rollDice()

}

Dice.prototype.rollDice = function() {
  this.diceValue = Math.floor((Math.random()*6)+1);
  if (this.diceValue === 1) {
    this.roll = 0;
    return "current roll: " + this.roll
  } else {
  	this.roll = this.diceValue;
  	return "current roll: " + this.roll
	}
}

Player.prototype.score = function() {
  if (this.dice.roll === 0) {
    this.turnScore = 0;
    return this.turnScore
  } else {
  	this.turnScore += this.dice.roll
    return this.turnScore
  }
}
