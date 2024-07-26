function getComputerChoice() {
    let choiceNumber = Math.floor(Math.random()* 100) ;

    if (choiceNumber <= 33) {
        return "Rock";
    }
    if (choiceNumber > 33 && choiceNumber < 66) {
        return "Paper";
    }
    if (choiceNumber >= 66) {
        return "Scissors";
    }
}

function playRound(humanChoice, computerChoice) {

    selectionsMessage.textContent = `Computer chose ${computerChoice}, You chose ${humanChoice}`;

    if (humanChoice == computerChoice) {
        winLossMessage.textContent = `You both chose ${humanChoice}, so it's a tie!`;
        return;
    }

    if (humanChoice == "Rock") {
        if (computerChoice == "Paper") {
            winLossMessage.textContent = "Paper covers Rock. You lose.";
            computerScore += 1;
            
        }
        else {
            winLossMessage.textContent = "Rock smashes Scissors. You win!";
            humanScore +=1;
        }
    }

    if (humanChoice == "Paper") {
        if (computerChoice == "Scissors") {
            winLossMessage.textContent = "Scissors cut Paper. You lose.";
            computerScore += 1;
            
        }
        else {
            winLossMessage.textContent = "Paper covers Rock. You win!";
            humanScore +=1;
        }
    }

    if (humanChoice == "Scissors") {
        if (computerChoice == "Rock") {
            winLossMessage.textContent = "Rock smashes Scissors. You lose.";
            computerScore += 1;
            
        }
        else {
           winLossMessage.textContent = "Scissors cut Paper. You win!";
            humanScore +=1;
        }
    }

    scoreMessage.textContent = `Player ${humanScore}, Computer ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        fiveScoreReached();
    }

    return;
}

function fiveScoreReached() {
    if (humanScore === 5) {console.log("You won the game! Lucky you!")}
    if (computerScore === 5) {console.log("You lost the game. Try again!")}
}

let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

const selectionsMessage = document.querySelector(".selections");
const winLossMessage = document.querySelector(".winLossStatement");
const scoreMessage = document.querySelector(".score");

rockButton.addEventListener('click', () => {
    playRound("Rock", getComputerChoice());
});

paperButton.addEventListener('click', () => {
    playRound("Paper", getComputerChoice());
});

scissorsButton.addEventListener('click', () => {
    playRound("Scissors", getComputerChoice());
});