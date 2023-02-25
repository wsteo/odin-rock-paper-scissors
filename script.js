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
    const buttons = document.querySelectorAll('button');
    let roundPlayed = 0;
    let result = "";

    buttons.forEach((button) => {
        button.addEventListener('click', function (e) {
            let playerChoice = this.value;
            playerChoice = playerChoice.toLowerCase();

            let computerSelection = getComputerChoice();
            result = playRound(playerChoice, computerSelection);
            updateScore(result, playerTotalScore, computerTotalScore);
            document.getElementById("playerScore").textContent = playerTotalScore;
            document.getElementById("computerScore").textContent = computerTotalScore;
            console.log(displayResult(result, playerChoice, computerSelection));
            roundPlayed += 1;
            
            if (roundPlayed == 5)
            {
                document.getElementById("finalResult").textContent = showWinner(playerTotalScore, computerTotalScore);    
                buttons.forEach((button) => {
                    button.disabled = true;
                });
            }
        })
    });
}

game();
