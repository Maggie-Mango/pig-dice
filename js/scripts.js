//business logic for dice
function Dice() {
	this.diceValue=1;
  this.roll=0;
}

function Player() {
  this.score = 0;
  this.dice = new Dice()
  this.isTurn = true
}
//global Players
player1 = new Player();
player2 = new Player();

function switchPlayers() {
  if (player1.isTurn === true) {
    player1.isTurn = false;
    player2.isTurn = true;
  } else if (player2.isTurn === true) {
    player2.isTurn = false;
    player1.isTurn = true;
  }
}

Dice.prototype.rollDice = function() {
  this.diceValue = Math.floor((Math.random()*6)+1);
  if (this.diceValue === 1) {
    this.roll = 0;
  } else {
  	this.roll = this.diceValue;
	}
}

Player.prototype.calcScore = function() {
	this.dice.rollDice()
  isWinner();
  if (this.dice.roll === 0) {
   switchPlayers();
    } else {
   	this.score += this.dice.roll
  }
}

function isWinner() {
	if ((player1.score >= 100) || (player2.score >= 100)) {
  alert("winner winner chicken dinner")
	}
}

//ui logic 
$(document).ready(function() {
	$("button.btn-roll").click(function(event) {
  	if (player1.isTurn === true) {
      player1.calcScore();
      $('#p1-total').html(player1.score);
      $('#p1-roll').html(player1.dice.roll);
    } else if (player2.isTurn === true) {
      player2.calcScore();
      $('#p2-total').html(player2.score);
      $('#p2-roll').html(player2.dice.roll)
    } else {
    	alert("winner winner chicken dinner!")
   }
  });
 });
    
$(document).ready(function() {
	$("button.btn-hold").click(function(event) {
  		switchPlayers();
 });
});