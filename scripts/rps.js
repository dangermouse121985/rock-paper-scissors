let playerName = sessionStorage.getItem('playerName');

if (!sessionStorage.getItem('playerName'))  {
    playerName = prompt("Let's Play Rock, Paper, Scissors! What is your name?");
}

if (playerName === '') {
    playerName = 'Player 1';
} else if (playerName === null) {
    sessionStorage.clear();
    window.open('https://dangermouse121985.github.io/rock-paper-scissors/compWins.html', '_self');
}
const displayPlName = document.querySelector('#pChoiceTitle');
displayPlName.textContent = playerName;
const displayPS = document.querySelector('#playerScore');
const pScore = document.createElement('div');
pScore.id = 'pScore';
pScore.classList.add('content');
pScore.textContent = '0';
displayPS.appendChild(pScore);

const displayCS = document.querySelector('#compScore');
const cScore = document.createElement('div');
cScore.id = 'cScore';
cScore.classList.add('content');
cScore.textContent = '0';
displayCS.appendChild(cScore);

const displayGS = document.querySelector('#game');
const gameStatus = document.createElement('h2');
gameStatus.classList.add('content');
gameStatus.textContent = 'Players. Are. You. Ready?!?!';
displayGS.appendChild(gameStatus);

const pChoiceContainer = document.querySelector('#player');
const cChoiceContainer = document.querySelector('#computer');
let pChoice = document.createElement('img');
let cChoice = document.createElement('img');
pChoice.id = 'pChoiceImg';
cChoice.id = 'cChoiceImg';

const roundDeclare = document.querySelector('#roundNum');

let roundScore = 0;
let playerScore = 0;
let compScore = 0;
let roundNum = 1;


const rock = document.querySelector('#rock');
rock.addEventListener('click', function() {
    playerSelection('rock');
    pChoiceContainer.src = 'https://dangermouse121985.github.io/rock-paper-scissors/images/rock_blue.png';
    game();
}); 

const paper = document.querySelector('#paper');
paper.addEventListener('click', function() {
    playerSelection('paper');
    pChoiceContainer.src = 'https://dangermouse121985.github.io/rock-paper-scissors/images/paper_blue.png';
    game();
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', function() {
    playerSelection('scissors');
    pChoiceContainer.src = 'https://dangermouse121985.github.io/rock-paper-scissors/images/scissors_blue.png';
    game();
});

function computerPlay () {
    //Randomly choose a number between 1 and 3 and assign to compNumber.
    let compNumber = Math.floor(Math.random() * (3)) + 1;

    //Based on value of compNumber assign rock (1), paper (2), or scissors (3) to compPlay.
    let compPlay = "";
    switch (compNumber) {
        case 1: 
            compPlay = "rock";
            break;
        case 2: 
            compPlay = "paper";
            break;
        case 3:
            compPlay = "scissors";
    }
    return compPlay;
}

function playRound (playerSelection) {
    //Call ComputerPlay function and assign computer's play (rock, paper, or scissors) to compSelection
    let compSelection = computerPlay();

    
    if (compSelection === 'rock') {
        cChoiceContainer.src = 'https://dangermouse121985.github.io/rock-paper-scissors/images/rock_red.png';
    } else if (compSelection === 'paper') {
        cChoiceContainer.src = 'https://dangermouse121985.github.io/rock-paper-scissors/images/paper_red.png';
    } else {
        cChoiceContainer.src = 'https://dangermouse121985.github.io/rock-paper-scissors/images/scissors_red.png';
    }
    
    

    /* Compare playerSelection to CompSelection.*/
    if (playerSelection === compSelection){
        return 3;
    }
    else if ((playerSelection === 'rock' && compSelection === 'scissors') || (playerSelection === 'scissors' && compSelection === 'paper') || (playerSelection === 'paper' && compSelection === 'rock')) {
        return 1;
    }    
    else {
        return 2;
    }
}

function playerSelection(choice) {
    roundScore = playRound(choice);
    //If round score equals 1 add 1 to playerScore. If Round score = 2 add 1 to compScore. If round score = 3 go to next round.
    switch (roundScore) {
        case 1:
            playerScore += 1;
            gameStatus.textContent = 'Player wins round';
            displayGS.appendChild(gameStatus);
            break;
        case 2:
            compScore += 1;
            gameStatus.textContent = 'Computer wins round';
            displayGS.appendChild(gameStatus);
            break;
        case 3:
            gameStatus.textContent = 'It\'s a tie. Be Better at this game.';
    }

    roundDeclare.textContent = 'Round ' + roundNum;
    pScore.textContent = playerScore;
    displayPS.appendChild(pScore);
    
    cScore.textContent = compScore;
    displayCS.appendChild(cScore);
    roundNum++;
}

function game () {
    if (playerScore === 5) {
        gameStatus.textContent = 'Player Wins the Match!!';
        displayGS.appendChild(gameStatus);
        sessionStorage.setItem('cScore', compScore);
        sessionStorage.setItem('playerName', playerName);
        window.open('https://dangermouse121985.github.io/rock-paper-scissors/playerWins.html', '_self');
    }
    else if (compScore === 5) {
        sessionStorage.setItem('cScore', compScore);
        sessionStorage.setItem('pScore', playerScore);
        window.open('https://dangermouse121985.github.io/rock-paper-scissors/compWins.html', '_self');
    }
    
}




