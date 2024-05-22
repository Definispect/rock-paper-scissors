function getComputerChoice() {
    let choiceNumber = Math.floor(Math.random()* 100) ;

    if (choiceNumber <= 33) {
        return "rock";
    }
    if (choiceNumber > 33 && choiceNumber < 66) {
        return "paper";
    }
    if (choiceNumber >= 66) {
        return "scissors";
    }
}

function getHumanChoice() {
    while (true) {
        let humanInput= prompt("1. Rock, 2. Paper, or 3. Scissors?", "Pick a number (1,2,3) or type in the word");

        if (humanInput == null) {return null;}

        humanInput = humanInput.toLowerCase()

        if (humanInput == "rock" || humanInput == 1) {
            console.log('You chose Rock');
            return "rock";
        }
        if (humanInput == "paper" || humanInput == 2) {
            console.log("You chose Paper");
            return "paper";
        }
        if (humanInput == "scissors" || humanInput == 3) {
            console.log("You chose Scissors");
            return "scissors";
        }

        alert(`${humanInput} is not a valid choice. Please choose again.`)
    }   
}

getComputerChoice();
getHumanChoice();