
//function to initialize variables the computer may choose
function computerPlay(){
let rock = 1;
let paper = 2;
let scissors = 3;
let computerInput = getRandomInRange(1,3);
console.log(computerInput);

}




//function called to give random integer for computers variable choice 
function getRandomInRange(min, max) {
  //gets a integer value below the max value and at or above the minimum
  //avoid the 0 being issued for practice by adding min in case of 0 inclusion 
  let result = Math.floor(Math.random() * (max) + min);
  console.log(result);
  return result;
}
computerPlay();