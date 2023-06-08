function getComputerChoice() {
    let num = Math.floor(Math.random()*3);
    let choice;
    switch(num) {
        case 0:
            choice = 'Rock';
            break;
        case 1:
            choice = 'Paper';
            break;
        case 2:
            choice = 'Scissors';
            break;
        default:
            choice = 'Try Again';
            break;
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {
    let res;

    // rock
    if (/rock/i.test(playerSelection)) {
        // execute
        switch (computerSelection) {
            case 'Rock':
                res = `It's a tie! You think like a computer.`;
                break;
            case 'Paper':
                res = `You Lose! ${computerSelection} beats ${playerSelection}`;
                break;
            case 'Scissors':
                res = `You Win! ${playerSelection} beats ${computerSelection}`;
                break;
        }

    } else if (/paper/i.test(playerSelection)) {
        // execute
        switch (computerSelection) {
            case 'Rock':
                res = `You Win! ${playerSelection} beats ${computerSelection}`;
                break;
            case 'Paper':
                res = `It's a tie! You think like a computer.`;
                break;
            case 'Scissors':
                res = `You Lose! ${computerSelection} beats ${playerSelection}`;
                break;
        }

    } else if (/scissors/i.test(playerSelection)) {
        // execute
        switch (computerSelection) {
            case 'Rock':
                res = `You Lose! ${computerSelection} beats ${playerSelection}`;
                break;
            case 'Paper':
                res = `You Win! ${playerSelection} beats ${computerSelection}`;
                break;
            case 'Scissors':
                res = `It's a tie! You think like a computer.`;
                break;
        }

    } else {
        res = `Invalid Input! Please enter Rock, Paper or Scissors only.`
    }
    return res;
}

//console.log(playRound(playerSelection, computerSelection));

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt(`Enter your bet (Rock, Paper, Scissors):`);
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();