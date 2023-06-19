const buttons = document.querySelectorAll('button.human');
const human = document.querySelector('#human-score');
const machine = document.querySelector('#machine-score');

const rock = document.querySelector('#machine-rock');
const paper = document.querySelector('#machine-paper');
const scissors = document.querySelector('#machine-scissors');

let humanScore = 0;
let machineScore = 0;

// randomize computer bet
function getComputerChoice() {
    let num = Math.floor(Math.random()*3);
    let choice;
    switch(num) {
        case 0:
            choice = 'Rock';
            rock.classList.add('machine');
            paper.classList.remove('machine');
            scissors.classList.remove('machine');
            break;
        case 1:
            choice = 'Paper';
            paper.classList.add('machine');
            rock.classList.remove('machine');
            scissors.classList.remove('machine');
            break;
        case 2:
            choice = 'Scissors';
            scissors.classList.add('machine');
            paper.classList.remove('machine');
            rock.classList.remove('machine');
            break;
        default:
            choice = 'Try Again';
            break;
    }

    return choice;
}

function playRound(playerSelection, computerSelection) {
    let winner = '';

    if (/rock/i.test(playerSelection)) {
        switch (computerSelection) {
            case 'Rock':
                winner += 'both';
                break;
            case 'Paper':
                winner += 'machine';
                break;
            case 'Scissors':
                winner += 'human';
                break;
        }

    } else if (/paper/i.test(playerSelection)) {
        switch (computerSelection) {
            case 'Rock':
                winner += 'human';
                break;
            case 'Paper':
                winner += 'both';
                break;
            case 'Scissors':
                winner += 'machine';
                break;
        }

    } else if (/scissors/i.test(playerSelection)) {
        switch (computerSelection) {
            case 'Rock':
                winner += 'machine';
                break;
            case 'Paper':
                winner += 'human';
                break;
            case 'Scissors':
                winner += 'both';
                break;
        }

    } 

    return winner;
}

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        let playerSelection = btn.value;
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);

        if (result === 'human') {
            humanScore++;
        } else if (result === 'machine') {
            machineScore++;
        }

        human.textContent = humanScore;
        machine.textContent = machineScore;
    })
});
