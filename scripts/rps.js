function computerPlay () {
    //Randomly choose a number between 1 and 3 and assign to x.
    let x = Math.floor(Math.random() * (3)) + 1;

    //Based on value of x assign rock (1), paper (2), or scissors (3).
    let compPlay = "";
    switch (x) {
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

function playRound () {
    //Set playerChoice to lower case and assign to playerSelection
    let playerSelection = '';

    //Creates array of valid selections. Will be used to compare the player inputs
    let validSelections = ['rock', 'paper', 'scissors'];

    //Prompt the user to enter either rock, paper, or scissors. Coverts string to lower case.
    playerSelection = prompt('Rock, Paper, or Scissors');
    playerSelection = playerSelection.toLowerCase();
    
    //Compares player input to validSelections array. If the input is not found, prompt the user to enter a valid input. Continue to prompt if a valid input is not found
    while (validSelections.includes(playerSelection) === false) {
        playerSelection = prompt('Please enter a valid selection. Rock, Paper, or Scissors');
        playerSelection = playerSelection.toLowerCase();
    } 

    //Call ComputerPlay function and assign computer's play (rock, paper, or scissors) to compSelection
    let compSelection = computerPlay();

    /* Compare playerSelection to CompSelection.
    ---Both Values are the same = Tie. Return 3.
    ---Player plays Rock and Computer plays scissors. Player Wins Return 1
    ---Player plays scissors and computer plays paper. Player wins. Return 1
    ---Player plays paper and computer plays rock. Player wins. Retur 1
    ---Computer plays Rock and Player plays scissors. Computer Wins Return 2
    ---Computer plays scissors and Player plays paper. Computer wins. Return 2
    ---Computer plays paper and Player plays rock. Computer wins. Retur 2 */
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

function game () {
    //Start game with player score and computer score both equal to 0
    let playerScore = 0;
    let compScore = 0;

    //initialize round score and set round number to 0
    let roundScore = 0;
    let roundNum = 0;

    //Call playRound function and run until player or computer have a score of 5
    while (playerScore < 5 && compScore < 5) {
        //Call playRound function and assign to roundScore
        roundScore = playRound();

        //If round score equals 1 add 1 to playerScore. If Round score = 2 add 1 to compScore. If round score = 3 go to next round.
        switch (roundScore) {
            case 1:
                playerScore += 1;
                console.log('Player wis round ' + roundNum);
                break;
            case 2:
                compScore += 1;
                console.log('Computer wins round ' + roundNum);
                break;
            case 3:
                console.log('Tying is like kissing your sister. Do better!')
        }
        console.log('Player Score: ' + playerScore);
        console.log('Computer Score: ' + compScore);
        console.log(playerScore < 5 || compScore < 5)
        roundNum++;
    }

    if (playerScore === 5)
        console.log('Player wins the match!!');
    else
        console.log('You lose. Computer wins the match :-(');
}