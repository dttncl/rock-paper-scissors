function getComputerChoice() {
    let num = Math.floor(Math.random()*3);
    let choice;
    switch(num) {
        case 0:
            choice = 'rock';
            break;
        case 1:
            choice = 'paper';
            break;
        case 2:
            choice = 'scissor';
            break;
        default:
            choice = 'try again';
            break;
    }
    return choice;
}

function getPlayerChoice()