function getComputerChoice()
{
    let randomChoice = Math.floor(Math.random() * 3)+1;
    if (randomChoice == 1) return "rock";
    if (randomChoice == 2) return "paper";
    if (randomChoice == 3) return "scissors";
}

function playRound(playerSelection, computerSelection)
{
    if (playerSelection == computerSelection) return "tie";

    if (playerSelection == "rock")
    {
        if (computerSelection == "scissors") return "You Win! Rock beats Scissors";
        else if (computerSelection == "paper") return "You Lose! Paper beats Rock"
    }
    else if (playerSelection == "paper")
    {
        if (computerSelection == "rock") return "You Win! Paper beats Rock";
        else if (computerSelection == "scissors") return "You Lose! Scissors beats Paper"
    }
    else if (playerSelection == "scissors")
    {
        if (computerSelection == "paper") return "You Win! Scissors beats Paper";
        else if (computerSelection == "rock") return "You Lose! Rock beats Scissors"
    }
}

for (let i = 0; i < 5; i++)
{
    console.log(playRound("rock", getComputerChoice()));
}

