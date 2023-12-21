function getComputerChoice(){
    let choice = Math.floor(Math.random()*3)  // get the computer choice of 0,1,2
    if(choice == 0){
        return "rock";
    }else{
        choice == 1? "scissors" : "paper"
    }
}