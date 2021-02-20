function Dice() {
  this.diceOne = 1;
}

Dice.prototype.rollDice = function() {
  this.diceOne = Math.floor((Math.random()*6)+1);
  if (this.diceOne === 1) {
    this.diceValue = 0;
    console.log(this.diceValue)
  } else {
  this.diceValue = this.diceOne
  console.log(this.diceValue)
  }
}

//players object
function Player(name) {
	this.name = name;
  this.isTurn = true;
  this.turnScore = 0;
}

//keep score
function KeepScore(totalScore) {
	this.totalScore = totalScore;
  while (totalScore < 100) {
  totalScore++;
  console.log("the total score is ");
  }
}

KeepScore.prototype.turnScore = function() {
	if (this.diceValue === 0) {
  console.log("Lost all ur points")
  } else {
  console.log("we need to add points")
  }
}






//testing data
let testDice = new Dice()
console.log(testDice.rollDice())

let player1 = new Player("Jack")
let player2 = new Player("Astro")
//console.log(player1)




// UI Logic