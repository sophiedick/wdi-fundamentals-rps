////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////


function getPlayerMove(move) { /* note forself this is the same var getPlayerMove = function(move) */

    if (move == null){
      return getInput();       
    }
    else{
    return move; 
    } 

}  

    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return /* Your Expression */;

  
function getComputerMove(move) { /* note forself this is the same var getComputerrMove = function(move) */
    
    if (move == null){
        return randomPlay(); 
    } 
    else {
        return move; 
    }
} 


    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return /* Your Expression */;




function getWinner(playerMove,computerMove) {
    
  console.log(playerMove, computerMove); 
    
    if (playerMove == computerMove) {
        
    console.log('It is a tie!'); 
    }
    else if (playerMove == 'rock' && computerMove == 'scissors') {
        
    console.log('Player wins!'); 
    
    }
    else if (playerMove == 'rock' && computerMove == 'paper') {
        
    console.log('Computer wins!'); 
    
    }
    else if (playerMove == 'paper' && computerMove == 'rock') {
        console.log('Player wins!'); 
    }
    else if (playerMove == 'paper' && computerMove == 'scissors') {
        console.log('Computer wins!'); 
    }
    else if (playerMove == 'scissors' && computerMove == 'paper') {
        console.log('Player wins!'); 
    }
    
    else if (playerMove == 'scissors' && computerMove == 'rock') {
        console.log('Computer wins!'); 
    }
    else {    
    console.log('unsure'); 
    } 
}


    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */



function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

