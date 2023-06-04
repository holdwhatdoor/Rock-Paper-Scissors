// Rock Paper Scissors Game

// empty winner string variable
let winner = "";

// Prompt for user input choice of rock, paper, scissors
let userInput = prompt();

// game choice string variable constants
const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';
const cheatCode = 'bomb';

// game outcome string variable constants
const userWins = "You are the winner";
const cpuWins = "The Computer is the winner";
const tie = "It's a tie!";
const error = "There was an error.";

// Function to determine user choice 
function getUserChoice(userInput){
    userInput = userInput.toLowerCase();
    if(userInput === 'bomb'){
        console.log('CHEATER!!!')
    }else if(userInput === rock){
       console.log(`You chose ${userInput}...`);
    
    }else if(userInput === paper){
        console.log(`You chose ${userInput}...`);
    }else if(userInput === scissors){
        console.log(`You chose ${userInput}...`);
    }else {
        console.log(`You selection was invalid, please choose by typing "rock", "paper" or "scissors."`);
    }
    return userInput;
}

// Function to generate computer choice of rock, paper or scissors
function getComputerChoice(){

    // variable to generate random number and reduce to nearest whole number from 0-2
    let randomNum = Math.random();
    randomNum = (randomNum * 10) % 3;
    let floorChoice = Math.floor(randomNum);

    // randomly generated whole number used to select rock(0), paper(1), or scissors(2)  
    if(floorChoice == 0){
        cpuChoice = rock;
    }else if(floorChoice == 1){
        cpuChoice = paper;
    }else if(floorChoice == 2){
        cpuChoice = scissors;
    }else{
        return error;
    }
    return cpuChoice;
}

// Function to determine winner from two inputs
function determineWinner(userChoice, cpuChoice){
    if(userChoice === cpuChoice){
        winner = tie;
        return winner;
    }
    if(userChoice === rock){
        if(cpuChoice === paper){
            winner = cpuWins;
            return cpuWins;
        }
        if(cpuChoice === scissors){
            winner = userWins;
            return userWins;           
        }
    }
    if(userChoice === paper){
        if(cpuChoice === rock){
            winner = userWins;
            return winner;          
        }
        if(cpuChoice === scissors){
            winner === cpuWins;
            return winner;          
        }
        return winner;
    }
    if(userChoice === scissors){
        if(cpuChoice === rock){
            winner = cpuWins;
            return winner;
        }
        if(cpuChoice === paper){
            winner = userWins;
            return winner;
        }
        return winner;
    }
    if(userChoice === 'bomb'){
        winner = userWins;
        return winner;
    }
}

function playGame(){
    console.log("Begin game!");
    var userChoice = getUserChoice(rock);
    var cpuChoice = getComputerChoice();
    console.log(`Computer chose ${cpuChoice}`);
    console.log(determineWinner(userChoice, cpuChoice));
}

playGame();
