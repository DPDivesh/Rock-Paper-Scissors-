let playerWinCount= 0;
let computerWinCount = 0; 
let itsATIE = 0;
 
function winCount(result){
  if (computerWinCount < 5 || playerWinCount < 5){
    if (result === 0){
      playerWinCount =  playerWinCount+1;
      console.log(playerWinCount);
      if (playerWinCount == 5){
        console.log("Player Wins")
      }
      else{
        computerPlay();
      }

    }
    else if (result === 1){
      computerWinCount = computerWinCount+1;
      console.log(computerWinCount);
      if (computerPlay == 5 ) {
        console.log("Computer Wins")
      }
      else{
        computerPlay();
      }
    }
    else {
      computerPlay();
    }
  }

else {
  computerPlay();
}
}





//function to initialize variables the computer may choose
/* New Idea test for computerPlay();
  let test = 'rock';
let test2 = 'paper';
let test3 = 'scissors';
test2 > test;
test3 >test2;
test > test2;
if (test > test2){
  console.log("Rock beats Paper");
}
else{
  console.log("ehh");
}
*/
//computer functions
function computerPlay(){
  let computerInput = getRandomInRange(1,3);
  return selectWinner(computerInput, playerInput())
  }
  
  //function called to give random integer for computers variable choice 
  function getRandomInRange(min, max) {
    //gets a integer value below the max value and at or above the minimum
    //avoid the 0 being issued for practice by adding min in case of 0 inclusion 
    let result = Math.floor(Math.random() * (max) + min);
    return result;
  }
  

  



//player input
function playerInput(){
  
  while (true){
    let playerSelection = prompt("Please Enter a Rock, Paper or Scissors");
    //let regex = /^[a-zA-z]+$/g; attempt at using regex instead(unnesecary for this proj)
    //playerSelection = playerSelection.match(regex);
    playerSelection.toLowerCase
    console.log(playerSelection);
  if (playerSelection === "rock"){
    let playerSelection = 1;
    return playerSelection
  }
  else if( playerSelection === "paper" ){
    let playerSelection = 2;
    return playerSelection
  }
  else if(playerSelection === "scissors" ){
    let playerSelection = 3;
    return playerSelection
  }
  else{
    console.log("Somethings is really not woring here")
    alert("Please enter Rock Paper or Scissors")

  }
}
/*
  switch (true){
    case playerSelection =="rock":
      let playerSelection = 1;
      return playerSelection  
    case playerSelection == "paper":
  */    
  }

  
  




//decides winner and best of 5
function selectWinner(computerSelection,playerSelection){
  console.log("player picks: "+playerSelection);
  console.log("computer picks: "+computerSelection);
/*
"paper" > "rock"; // 2 > 1  
"scissors" >"paper";// 3 > 2
"rock" > "scissors";// 1 > 3
*/
if (computerSelection === 1 && playerSelection === 2){
  console.log( "Paper covers Rock");
  let playerWins=0;
  return winCount(playerWins);
}
else if (computerSelection === 2 && playerSelection === 3){
  console.log( "Scissors cut Paper");
  let playerWins=0;
  return winCount(playerWins);
}
else if (computerSelection === 1 && playerSelection === 3){
  console.log( "Rock breaks Scissors");
  let computerWins=1;
  return winCount(computerWins);
}
else if (computerSelection === 2 && playerSelection === 1){
    console.log( "Paper covers Rock")
    let computerWins=1;
    return winCount(computerWins);;
  }
  else if (computerSelection === 3 && playerSelection === 2){
    console.log( "Scissors cuts Paper");
    let computerWins=1;
    return winCount(computerWins);;  
  }
  else if (computerSelection === 3 && playerSelection === 1){
    console.log( "Rock breaks Scissors")
    let playerWins=0;
    return winCount(playerWins);
  ;

}else{
  console.log("ITS A TIE")
  return winCount();

}

  }





  winCount();
 