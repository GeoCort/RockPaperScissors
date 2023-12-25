let scissorChoice = document.getElementById("games-s") 
let rockChoice = document.getElementById("games-r")
let paperChoice = document.getElementById("games-p")

let s= document.querySelector("#games-s")
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
        return -1
    }else if(playerSelection == "rock"){
        return compSelection == "scissors"? 1 : 0;
    }else if(playerSelection == "scissors"){
        return compSelection == "paper" ? 1 :0
    }else{
        return compSelection == "rock" ? 1 : 0
    }
}

function playGame(){
    console.log("Please make a choice: Scissors Paper or Rock : ");
    let choice = prompt().toLowerCase();
    let win =0;
    let lose = 0;
    let tie = 0;
    for(let i =0; i < 5; i++){
        if(playRound(getComputerChoice(), choice) == -1){
            tie++;
        }else{
            playRound(getComputerChoice(), choice) == 0 ? lose++ : win++
        }
        console.log(`win:${win}\nlose:${lose}\ntie:${tie}`)
        if(i == 4) continue;
        console.log("Enter another choice: ")
        choice = prompt().toLowerCase();
    }
}

function resultPrompt(choice){
    let res = document.getElementById("result")
    let h3 = document.createElement("h3");
    if(choice === -1){
        h3.innerHTML = "TIE"
    }else{
        choice === 0 ? h3.innerHTML = "LOSE" : h3.innerHTML = "WIN"
    }
    res.appendChild(h3)
}
scissorChoice.addEventListener('click',()=>{
    
    let opt = playRound("scissors", getComputerChoice())
    let container = document.getElementById("#game-c")
    resultPrompt(opt)
})

rockChoice.addEventListener('click',()=>{
    
    let opt = playRound("rock", getComputerChoice())
    let container = document.getElementById("#game-c")
    resultPrompt(opt)
})
paperChoice.addEventListener('click',()=>{
    
    let opt = playRound("paper", getComputerChoice())
    let container = document.getElementById("#game-c")
    resultPrompt(opt)
})