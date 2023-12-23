function getComputerChoice(){
    let choice = Math.floor(Math.random()*3)  // get the computer choice of 0,1,2
    console.log(choice)
    if(choice == 0){
        return "rock";
    }else{
        return choice == 1 ? "scissors" : "paper"
    }
}

//Play a round
function playRound(compSelection, playerSelection){
    // you choose rock
    if(compSelection == playerSelection){
        return console.log("TIE")
    }else if(playerSelection == 0){
        return compSelection == 1? console.log("YOU WIN") : console.log("YOU LOSE");
    }else if(playerSelection == 1){
        return compSelection == 2 ? console.log("YOU WIN") : console.log("YOU LOSE")
    }else{
        return compSelection == 0 ? console.log("YOU WIN") : console.log("YOU LOSE")
    }
}