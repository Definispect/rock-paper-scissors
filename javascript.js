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

function getHumanChoice() {
    while (true) {
        let humanInput= prompt("1. Rock, 2. Paper, or 3. Scissors?", "Pick a number (1,2,3) or type in the word");

        if (humanInput == null) {return null;}

        humanInput = humanInput.toLowerCase()

        if (humanInput == "rock" || humanInput == 1) {
            return "Rock";
        }
        if (humanInput == "paper" || humanInput == 2) {
            return "Paper";
        }
        if (humanInput == "scissors" || humanInput == 3) {
            return "Scissors";
        }

        alert(`${humanInput} is not a valid choice. Please choose again.`)
    }   
}

function playRound(humanChoice, computerChoice) {
    console.log(`Computer chose ${computerChoice}`);
    console.log(`You chose ${humanChoice}`);

    if (humanChoice == null) {return null;}

    if (humanChoice == computerChoice) {
        console.log(`You both chose ${humanChoice}, so it's a tie!`)
        return;
    }

    if (humanChoice == "Rock") {
        if (computerChoice == "Paper") {
            console.log("Paper covers Rock. You lose.")
            computerScore += 1;
            
        }
        else {
            console.log("Rock smashes Scissors. You win!")
            humanScore +=1;
        }
    }

    if (humanChoice == "Paper") {
        if (computerChoice == "Scissors") {
            console.log("Scissors cut Paper. You lose.")
            computerScore += 1;
            
        }
        else {
            console.log("Paper covers Rock. You win!")
            humanScore +=1;
        }
    }

    if (humanChoice == "Scissors") {
        if (computerChoice == "Rock") {
            console.log("Rock smashes Scissors. You lose.")
            computerScore += 1;
            
        }
        else {
            console.log("Scissors cut Paper. You win!")
            humanScore +=1;
        }
    }
    return;
}




