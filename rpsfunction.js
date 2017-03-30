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
  var gameNum = 0

  function rps(){
    var hands = ['rock', 'paper', 'scissors']
    return hands[parseInt(Math.random()*10)%3]
  }

  var play = function(){

      var player1 = {
        name: player1,
        getHands: rps
      }

      var player2 = {
        name: player2,
        getHands: rps
      }

      var winner = compareChoices(player1, player2);

      if(winner === player1){
        console.log('Player 1 won');
        player1Score ++
      }else if (winner === player2) {
        console.log('Player 2 won!!');
        player2Score ++
      }else{
        console.log('Nobody won this round');
      }
      gameNum ++
  }
  console.log(`Player 1 score: ${player1Score}// Player 2 score: ${player2Score}// Game Number: ${gameNum}`);

  while(player1Score < playUntil && player2Score < playUntil){
    play()
  }

  if(player1Score === playUntil){
    console.log(`${player1} Won!!!!!`)
  }else{
    console.log(`${player2} Won!!!!!`)
  }

  console.log('Somebody won', player1Score, player2Score, gameNum)
}
