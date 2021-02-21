

//business logic for dice
function Dice() {
	this.diceValue=1;
  this.roll=0;
}

function Player() {
  this.score = 0;
  this.dice = new Dice()
  this.isTurn = 'yes'
}
//global Players
player1 = new Player();
player2 = new Player();

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

Player.prototype.calcScore = function() {
	this.dice.rollDice()
  if (this.dice.roll === 0) {
    this.isTurn = 'no'
  } else {
  	this.score += this.dice.roll
  }
}




//ui logic 
$(document).ready(function() {
	$("button.btn-roll").click(function(event) {
  	player1.calcScore();
    $('#p1-total').html(player1.score);
    $('#p1-roll').html(player1.dice.roll);
  })
})