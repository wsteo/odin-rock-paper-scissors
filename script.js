function getPlayerChoice() {
    let playerChoice = prompt("Choose from Rock, Paper, Scissors");
    return playerChoice.toLowerCase();
}

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3) + 1;
    if (randomChoice == 1) return "rock";
    if (randomChoice == 2) return "paper";
    if (randomChoice == 3) return "scissors";
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) return "tie";

    if (playerSelection == "rock") {
        if (computerSelection == "scissors") return "win";
        else if (computerSelection == "paper") return "lose";
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") return "win";
        else if (computerSelection == "scissors") return "lose";
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "paper") return "win";
        else if (computerSelection == "rock") return "lose";
    }
}

function displayResult(result, playerSelection, computerSelection) {
    if (result == "win") {
        return `You ${result}! ${playerSelection} beats ${computerSelection}`;
    }
    else if (result == "lose") {
        return `You ${result}! ${computerSelection} beats ${playerSelection}`;
    }
    else {
        return `${result}!`;
    }
}

let playerTotalScore = 0;
let computerTotalScore = 0;

function updateScore(result) {
    if (result == "win") {
        playerTotalScore += 1;
    }
    else {
        computerTotalScore += 1;
    }
}

function showWinner(playerTotalScore, computerTotalScore) {
    if (playerTotalScore > computerTotalScore) {
        return `You Win! Final Score ${playerTotalScore} : ${computerTotalScore}`;
    }
    else if (playerTotalScore < computerTotalScore) {
        return `You Lose! Final Score ${playerTotalScore} : ${computerTotalScore}`;
    }
    else {
        return `Tie! Final Score ${playerTotalScore} : ${computerTotalScore}`;
    }
}



function game() {
    // let result = "";

    // let playerSelection = getPlayerChoice();
    // let computerSelection = getComputerChoice();
    // result = playRound(playerSelection,computerSelection);
    // console.log(displayResult(result,playerSelection, computerSelection));
    // updateScore(result,playerTotalScore,computerTotalScore);

    // console.log(showWinner(playerTotalScore, computerTotalScore));
}

game();

const buttons = document.querySelectorAll('button');

buttons.forEach((buttons) => {
    buttons.addEventListener('click', function (e) {
        let result = "";
        let playerChoice = this.value;
        playerChoice = playerChoice.toLowerCase();
        let computerSelection = getComputerChoice();
        result = playRound(playerChoice, computerSelection);
        updateScore(result, playerTotalScore, computerTotalScore);
        console.log(displayResult(result, playerChoice, computerSelection));
    })
});