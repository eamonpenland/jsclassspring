function saySomething(something){
  console.log(something);
}


saySomething('HELLO WORLD')

function add2(n1, n2){
  return n1 + n2;
}

function lotsOfAddition() {
  var sum = 0;

  for(var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  return sum;
}




/* Calculating gratutity is a repetitive task, so let's create a couple of functions that do the work for us.

- create a variable titled `billAmount` and store a random number (ie: 100)
- create a function titled `gratuity()`
	- gratutity should:
		- multiply the value of billAmount by 20% <br> *hint: use 0.2*
		- return the value
- create a function titled `totalWithGrat()`
	-  totalWithGrat should:
		- take in the amount as an argument
		- call the gratutity function
		- add that to the original bill amount
		- return the total bill + gratuity
- log the total (with gratuity) to the console
	- append new total to the following phrase:
		- "your total including gratuity is:"
- **Limitation: You can only invoke the totalWithGrat function when logging the result**
*/

var billAmount = 80.78;

function gratuity() {
  return billAmount * .2
}

function totalWithGrat(amount) {
  return gratuity() + amount
}

console.log('your total including gratuity is: ' + totalWithGrat(billAmount).toFixed(2))




var add = function(a, b) { return a + b };


hoisted();

function hoisted() {
  console.log("HOISTED")
}


notHoisted();

var notHoisted = function() {
  console.log('Not hoisted');
}

var calculator = {
  name: 'My Calculator',
  add: function(a, b) {
    return a + b
  },
  sub: function(a, b) {
    return a - b
  },
  mult: function(a, b) {
    return a * b
  }
}


var newestArr = [
  ['anonymous', 'array'],
  {name: 'anon object'},
  function(){return 'anonymous func'}
]

/*
1. Define a `hands` array with the values 'rock', 'paper', and 'scissors';
2. Define a function called `getHand()` that returns a hand from the array using `parseInt(Math.random()*10)%3`
4. Define two objects for two players. Each player has `name` and `getHand()` properties.
5. Define a function called `playRound()` that
 	- Takes two player objects as arguments
 	- Gets hands from each
 	- Determines the winner
 	- Logs the hands played and name of the winner.
 	- If its a tie, log the hands played and "it's a tie".
 	- Returns the winner object (null if no winner)
6. Define a function called playGame() that takes arguments `player1`, `player2`, and `playUntil`.
	- Play rounds until one of the players wins `playUntil` hands
	- When one player has won enough games, return the winning player object
7. Play a game to 5 wins */


function getHands() {
  return hands[parseInt(Math.random()*10)%3]
}



function playRound(player1Name, player2Name, p1Score, p2Score) {
  var hands = ['rock', 'paper', 'scissors']

  p1Score ++
  var player1 = {
    name: player1Name,
    getHands: function() {
      return hands[parseInt(Math.random()*10)%3]
    }
  }

  var player2 = {
    name: player2Name,
    getHands: function() {
      return hands[parseInt(Math.random()*10)%3]
    }
  }
  var winner = compareChoices(player1, player2);
  if(winner === player1){
    return
  }else if (winner === player2) {
    return
  }else{
    console.log('Nobody won this round');
    return
  }

  return player1Score
}


function compareChoices(p1, p2){
  let choice1 = p1.getHands();
  let choice2 = p2.getHands();

  if(choice1===choice2){
    console.log(`Tie...Both played ${choice1}`);
    return null
  }
  if(choice1==="rock"){
      if(choice2==="scissors"){
          console.log("rock wins");
          return p1
      }else{
          console.log("paper wins");
          return p2
      }
  }
  if(choice1==="paper"){
      if(choice2==="rock"){
          console.log("paper wins");
          return p1
      }else{
          console.log("scissors wins");
          return p2
      }
  }
  if(choice1==="scissors"){
      if(choice2==="rock"){
          console.log("rock wins");
          return p2
      }else{
          console.log("scissors wins");
          return p1
      }
  }
}

function playGame(player1, player2, playUntil) {
  var player1Score = 0;
  var player2Score = 0;

  // while(player1Score < playUntil || player2Score < playUntil){
    playRound(player1, player2, player1Score, player2Score)
  // }

  console.log('Somebody won', player1Score)
}




function getGreeting(name){
  var greeting = 'Hola';
  return greeting + name;
};

getGreeting('Shane');

console.log(greeting);

function greet(name){
  greeting = 'Hola';
  return greeting + name;
}

greet('Eamon');
greeting

// IIFE

(function() {
  var whatev = ";fjkaljdf;af";

  /// do a bunch of stuff
})()

//Scope

function outer(){
  var x = 'x';
  (function(){
    var y = 'y';
    console.log('INNER X', x)
  })()

  console.log('outerX',x);
  console.log(y);
}
