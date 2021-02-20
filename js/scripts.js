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
	this.dice.rollDice()
  if (this.dice.roll === 0) {
    this.turnScore = 0;
    return this.turnScore
  } else {
  	this.turnScore += this.dice.roll
  }
}






//testing data
//let testDice = new Dice()
//console.log(testDice.rollDice())


let player1 = new Player("Jack")
player1.score()
console.log("player 1, turn 1: " + player1.turnScore)


player1.score()
console.log("player 1, turn 2: " + player1.turnScore)

player1.score()
console.log("player 1, turn 3: " + player1.turnScore)
