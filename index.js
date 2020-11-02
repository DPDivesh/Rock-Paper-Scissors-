let playerWinCount= 0;
let computerWinCount = 0; 
let itsATIE = 0;

function winCount(result){
  if (computerWinCount < 5 || playerWinCount < 5){
    if (result === 0){
      playerWinCount =  playerWinCount+1;
      console.log(playerWinCount);
      document.getElementById("playerScore").innerHTML = playerWinCount;
      if (playerWinCount == 5){
        console.log("Player Wins")
        onPlayer();
        playerWinCount = 0;
        computerWinCount = 0;
      } 
      else{
        return
      }

    }
    else if (result === 1){
      computerWinCount = computerWinCount+1;
      console.log(computerWinCount,"computer wins");
      document.getElementById("computerScore").innerHTML = computerWinCount;
      if (computerWinCount == 5 ) {
        console.log("Computer Wins")
        onComputer(computerWinCount,playerWinCount);
        computerWinCount= 0;
        playerWinCount=0;
        document.getElementById("computerScore").innerHTML = computerWinCount;

        return
      }
      else{
        return 
      }
    }
    else {
      return
    }
  }

else {
  playerInput();
}
}



function onComputer() {
  document.getElementById("overlayComputer").style.display = "block";

}


function onPlayer() {
  document.getElementById("overlayPlayer").style.display = "block";
  computerWinCount = 0;
  playerWinCount = 0;
  return computerWinCount, playerWinCount;
}


function offComputer() {
  document.getElementById("overlayComputer").style.display = "none";
  document.getElementById("computerScore").innerHTML = computerWinCount;
  document.getElementById("playerScore").innerHTML = playerWinCount;

}

function offPlayer() {
  document.getElementById("overlayPlayer").style.display = "none";
  document.getElementById("playerScore").innerHTML = playerWinCount;
  document.getElementById("computerScore").innerHTML = computerWinCount;

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

  
  //function called to give random integer for computers variable choice 
  function getRandomInRange(min, max) {
    //gets a integer value below the max value and at or above the minimum
    //avoid the 0 being issued for practice by adding min in case of 0 inclusion 
    let result = Math.floor(Math.random() * (max) + min);
    return result;
  }
  

  



//player input
function playerInput(selectionClick){
  let computerInput = getRandomInRange(1,3);
  console.log(selectionClick);
  while (true){
    let playerSelection = selectionClick;
    //let regex = /^[a-zA-z]+$/g; attempt at using regex instead(unnesecary for this proj)
    //playerSelection = playerSelection.match(regex);
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);
  if (playerSelection === "rock"){
    let playerSelection = 1;
    return selectWinner(computerInput, playerSelection)
  }
  else if( playerSelection === "paper" ){
    let playerSelection = 2;
    return selectWinner(computerInput, playerSelection)
  }
  else if(playerSelection === "scissors" ){
    let playerSelection = 3;
    return selectWinner(computerInput, playerSelection)
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




/*Pause game so its easier to style
  winCount();
 */