function getComputerChoice()
{
    let randomChoice = Math.floor(Math.random() * 3)+1;
    if (randomChoice == 1) return "rock";
    if (randomChoice == 2) return "paper";
    if (randomChoice == 3) return "scissors";
}

for (let i = 0; i < 10; i++)
{
    console.log(getComputerChoice());
}

