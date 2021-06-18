const displayPS = document.querySelector('#playerScore');
const pScore = document.createElement('div');
pScore.classList.add('content');
pScore.textContent = '0';
displayPS.appendChild(pScore);

const displayCS = document.querySelector('#compScore');
const cScore = document.createElement('div');
cScore.classList.add('content');
cScore.textContent = '0';
displayCS.appendChild(cScore);

const displayGS = document.querySelector('#game');
const gameStatus = document.createElement('h3');
gameStatus.classList.add('content');
gameStatus.textContent = 'Players. Are. You. Ready?!?!';
displayGS.appendChild(gameStatus);


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
            gameStatus.textContent = 'Player wins round ' + roundNum;
            displayGS.appendChild(gameStatus);
            break;
        case 2:
            compScore += 1;
            gameStatus.textContent = 'Computer wins round ' + roundNum;
            displayGS.appendChild(gameStatus);
            break;
        case 3:
            gameStatus.textContent = 'Tying is like kissing your sister. Do better!';
            displayGS.appendChild(gameStatus);
    }
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
        roundScore = 0;
        playerScore = 0;
        compScore = 0;
        roundNum = 1;
    }
    else if (compScore === 5) {
        gameStatus.textContent = 'You lose. Computer wins the match :-(';
        displayGS.appendChild(gameStatus);
        roundScore = 0;
        playerScore = 0;
        compScore = 0;
        roundNum = 1;
    }
    
}

let roundScore = 0;
let playerScore = 0;
let compScore = 0;
let roundNum = 1;

const rock = document.querySelector('#rock');
rock.addEventListener('click', function() {
    playerSelection('rock');
    game();
}); 

const paper = document.querySelector('#paper');
paper.addEventListener('click', function() {
    playerSelection('paper');
    game();
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', function() {
    playerSelection('scissors');
    game();
});