function computerPlay() {
    let choiceNum = Math.ceil(Math.random()*3);
    if(choiceNum==1){
        return "Rock";
    }
    else if(choiceNum==2){
        return "Paper";
    }
    else if(choiceNum==3){
        return "Scissors";
    }
    else {
        return "Error";
    }
}
function rockPaperScissors(playerSelection, computerSelection) {
    let playerSelection2 = playerSelection.toLowerCase();
    let computerSelection2 = computerSelection.toLowerCase();
    if(playerSelection2 == "rock" && computerSelection2=="scissors"){
        return "You Win! Rock beats scissors!";
    }
    else if(playerSelection2 == "paper" && computerSelection2=="rock"){
        return "You Win! Paper beats rock!";
    }
    else if(playerSelection2 == "scissors" && computerSelection2=="paper"){
        return "You Win! Scissors beats paper!";
    }
    else if(playerSelection2 == computerSelection2) {
        return "It's a draw, you picked the same as the computer!";
    }
    else if(computerSelection2 == "rock" && playerSelection2=="scissors"){
        return "You Lose! Rock beats scissors!";
    }
    else if(computerSelection2 == "paper" && playerSelection2=="rock"){
        return "You Lose! Paper beats rock!";
    }
    else if(computerSelection2 == "scissors" && playerSelection2=="paper"){
        return "You Lose! Scissors beats paper!";
    }
}
