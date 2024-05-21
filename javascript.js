function getComputerChoice() {
    let choiceNumber = Math.floor(Math.random()* 100) ;
    console.log(choiceNumber); //debug

    if (choiceNumber <= 33) {
        console.log("rock"); //debug
        return 1;
    }
    if (choiceNumber > 33 && choiceNumber < 66) {
        console.log("paper"); //debug
        return 2;
    }
    if (choiceNumber >= 66) {
        console.log("scissors"); //debug
        return 3;
    }
}

getComputerChoice();