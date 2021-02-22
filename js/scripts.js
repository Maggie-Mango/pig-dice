//business logic for dice
function Dice() {
	this.diceValue=1;
  this.roll=0;
}

function Player() {
  this.totalScore = 0;
  this.dice = new Dice()
  this.isTurn = true
  this.roundScore = 0
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
    this.roundScore = 0;

    switchPlayers();
    } else {
      this.roundScore = this.roundScore += this.dice.roll;
  }
}

function isWinner() {
	if ((player1.score >= 100) || (player2.score >= 100)) {
  alert("winner winner chicken dinner")
	}
}

//ui logic 

$(document).ready(function() {
	$("button.btn-hold").click(function(event) {
  		player1.totalScore = player1.roundScore + player1.totalScore
      $('#p1-total').html(player1.totalScore);
      player1.roundScore = 0;
      player2.totalScore = player2.roundScore + player2.totalScore
      $('#p2-total').html(player2.totalScore);
      player2.roundScore = 0;
  		switchPlayers();
 });
});

$(document).ready(function() {
	$("button.btn-roll").click(function(event) {
  	if (player1.isTurn === true) {
      player1.calcScore();
      $('#p1-roll').html(player1.roundScore);
    } else if (player2.isTurn === true) {
      player2.calcScore();
      $('#p2-roll').html(player2.roundScore);
    } else {
    	alert("winner winner chicken dinner!")
   }
  });
 });