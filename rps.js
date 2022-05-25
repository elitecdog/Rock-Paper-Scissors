
/** Things Left To Do:  Create A Reset Button.  Update css to make the page
 * presentable.  
 */
let userWins=0;
let computerWins=0;
let roundCounter = 0;
let globalCompSelection = "";
let globalPlayerSelect = "";
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
rock.addEventListener("click", playRoundRock);
paper.addEventListener("click", playRoundPaper);
scissors.addEventListener("click", playRoundScissors);
const roundUpdate = document.querySelector('.roundUpdate');



function playRoundRock() {
    function computerPlay() {
        let choiceNum = Math.ceil(Math.random()*3);
        if(choiceNum==1){
            return "rock";
        }
        else if(choiceNum==2){
            return "paper";
        }
        else if(choiceNum==3){
            return "scissors";
        }
        else {
            return "Error";
        }
    }
    globalPlayerSelect = 'rock';
    let playerSelection = 'rock';
    let result=0;
    let computerSelection = computerPlay();
    globalCompSelection = computerSelection;
    if(playerSelection == "rock" && computerSelection=="scissors"){
         result += 1;
         console.log('rock has run');
    }
    else if(playerSelection == computerSelection) {
         result +=0;
    }
    else if(computerSelection == "paper" && playerSelection=="rock"){
         result-=1;
    }
    game(result);
}
function playRoundPaper() {
    function computerPlay() {
        let choiceNum = Math.ceil(Math.random()*3);
        if(choiceNum==1){
            return "rock";
        }
        else if(choiceNum==2){
            return "paper";
        }
        else if(choiceNum==3){
            return "scissors";
        }
        else {
            return "Error";
        }
    }
    globalPlayerSelect = 'paper';
    let playerSelection = 'paper';
    let result=0;
    let computerSelection = computerPlay();
    globalCompSelection = computerSelection;
    if(playerSelection == "paper" && computerSelection=="rock"){
         result +=1;
    }
    else if(playerSelection == computerSelection) {
         result +=0;
    }
    else if(computerSelection == "scissors" && playerSelection=="paper"){
         result-=1;
    }
    game(result);
}
function playRoundScissors() {
    function computerPlay() {
        let choiceNum = Math.ceil(Math.random()*3);
        if(choiceNum==1){
            return "rock";
        }
        else if(choiceNum==2){
            return "paper";
        }
        else if(choiceNum==3){
            return "scissors";
        }
        else {
            return "Error";
        }
    }
    globalPlayerSelect = 'scissors';
    let playerSelection = 'scissors';
    let result=0;
    let computerSelection = computerPlay();
    globalCompSelection = computerSelection;
    if(playerSelection == "scissors" && computerSelection=="paper"){
         result +=1;
    }
    else if(playerSelection == computerSelection) {
         result +=0;
    }
    else if(computerSelection == "rock" && playerSelection=="scissors"){
         result-=1;
    }
    game(result);
}


    
function game(result){
    const p1Score = document.querySelector('#userScore');
    const compScore = document.querySelector('#computerScore');
    const finalMessage = document.querySelector('.finalMessage');
        if(result == 1){
            userWins+=1;
            p1Score.innerHTML = userWins;
            roundUpdate.innerHTML = "You won that round.  You picked " +
            globalPlayerSelect + " and the computer picked  " + globalCompSelection
            + ".";
            roundCounter+=1;
        }
        else if(result == -1){
            computerWins+=1;
            compScore.innerHTML = computerWins;
            roundUpdate.innerHTML = "You lost that round.  You picked " +
            globalPlayerSelect + " and the computer picked  " + globalCompSelection
            + ".";
            roundCounter+=1;
        }
        else if(result == 0){
            roundUpdate.innerHTML = "You drew that round.  You picked " +
            globalPlayerSelect + " and the computer picked  " + globalCompSelection
            + ".";
            roundCounter+=1;
        }
        if(userWins == 3) {
            finalMessage.innerHTML = "You Win!  The score was "
            + userWins + " - " + computerWins + " in your favor!";
        }
        else if(computerWins == 3) {
            finalMessage.innerHTML = "You lose! The score was " 
            + userWins + " - " + computerWins + " in the computers favor!";
        }
    if(userWins>computerWins && roundCounter>4) {
        finalMessage.innerHTML = "You win! The score was " 
        + userWins + " - " + computerWins + " in your favor!";
    }
    else if(computerWins>userWins && roundCounter>4) {
        finalMessage.innerHTML = "You lose! The score was " 
        + userWins + " - " + computerWins + " in the computers favor!";
    }
    else if(computerWins == userWins && roundCounter>4) {
        finalMessage.innerHTML = "It's a draw! The score was " 
        + userWins + " - " + computerWins + ".";
    }
}

//console.log(game());
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