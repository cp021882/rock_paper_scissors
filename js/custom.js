var options = ['rock', 'paper', 'scissors'];
var player = '';
var computer = '';
var score = 0;
var playerScore = 0;
var computerScore = 0;


//Assign computer rps value
function computerSelect() {
    computer = Math.floor(Math.random() * 3);
    if (computer == 0) {
        computer = 'rock';
    } else if (computer == 1) {
        computer = 'scissors';
    } else if (computer == 2) {
        computer = 'paper';
    }
    return computer;
}

//Check player select value
function checkValue() {
    for (i = 0; i < options.length; i++) {
        if (player === options[i]) {
            return player;
        }
    }
    if (player != options) {
        alert('You must choose Rock, Paper or Scissors!');
        // window.location.reload();
    }
}

while (score < 5) {
    playGame();
    console.log('Total games played: ' + score);
    console.log('You have ' + playerScore + ' points and the computer has ' + computerScore + ' points.');
}

//Compare and select winner
function playGame() {
    computerSelect();
    player = prompt('Choose your weapon: Rock, Paper, Scissors.').toLowerCase();

    checkValue();
    if (player == 'rock' && computer == 'scissors' || player == 'scissors' && computer == 'paper' || player == 'paper' && computer == 'rock') {
        alert('You WIN!');
        score += 1;
        playerScore += 1;
    } else if (player == computer) {
        alert('Draw');
    } else {
        alert('You lose!');
        score += 1;
        computerScore += 1;
    }

}



// playGame();