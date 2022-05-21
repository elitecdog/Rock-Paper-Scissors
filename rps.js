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
function playRound(playerSelection, computerSelection) {
    let playerSelection2 = playerSelection.toLowerCase();
    let computerSelection2 = computerSelection.toLowerCase();
    if(playerSelection2 == "rock" && computerSelection2=="scissors"){
        return 1;
    }
    else if(playerSelection2 == "paper" && computerSelection2=="rock"){
        return 1;
    }
    else if(playerSelection2 == "scissors" && computerSelection2=="paper"){
        return 1;
    }
    else if(playerSelection2 == computerSelection2) {
        return 0;
    }
    else if(computerSelection2 == "rock" && playerSelection2=="scissors"){
        return -1;
    }
    else if(computerSelection2 == "paper" && playerSelection2=="rock"){
        return -1;
    }
    else if(computerSelection2 == "scissors" && playerSelection2=="paper"){
        return -1;
    }
}
function game(){
    let userWins=0;
    let computerWins=0;
    for(let i=0; i<5; i++) {
        let result = playRound(prompt("Choose rock, paper, or scissors"),computerPlay());
        if(result == 1){
            userWins+=1;
            console.log("You won that round");
        }
        else if(result == -1){
            computerWins+=1;
            console.log("You lost that round");
        }
        else if(result == 0){
            console.log("You drew that round");
        }
        if(userWins == 3) {
            return "You win! The score was " + userWins + " - " + computerWins + " in your favor!";
        }
        else if(computerWins == 3) {
            return "You lose! The score was " + userWins + " - " + computerWins + " in the computers favor!";
        }
    }
    if(userWins>computerWins) {
        return "You win! The score was " + userWins + " - " + computerWins + " in your favor!";
    }
    else if(computerWins>userWins) {
        return "You lose! The score was " + userWins + " - " + computerWins + " in the computers favor!";
    }
    else if(computerWins == userWins) {
        return "It's a draw! The score was " + userWins + " - " + computerWins + ".";
    }
}
console.log(game());
/*function playRound(playerSelection, computerSelection) {
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
*/