let humanChoice = 0;
let computerChoice = 0;
let rounds = 0;
let maxRounds = 5;
//defining array values for the computer to randomly choose
const options = ["rock", "paper", "scissors"];
let length = options.length;

//using the array to return random choice
function getComputerChoice() {
    return computerChoice = options[Math.floor(Math.random() * options.length)];
}

//Importing buttons instead of prompts
const container = document.querySelector('.container');
const humanRock = document.querySelector('.rock');
const humanPaper = document.querySelector('.paper');
const humanScissors = document.querySelector('.scissors');

function getHumanChoice (string) {
    if (rounds < maxRounds) {
    humanChoice = string;
    getComputerChoice();
    playRound(humanChoice,computerChoice);
    container.appendChild(roundResults);
    counter.textContent = humanScore + ":" + computerScore;
    rounds++;
    } else if (rounds === maxRounds) {
        if (humanScore < computerScore) {
            counter.textContent = 'Game Over! You lost... :(';
        } else if (humanScore > computerScore) {
            counter.textContent = 'Game Over! You WON! :D';
        } else {
            counter.textContent = "Game Over! That's a draw";
        }
        roundResults.textContent = "The score for the humanity equals to: " 
        + humanScore + ". Score for terminators: " + computerScore;

    }
}

humanRock.addEventListener("click", () => getHumanChoice('rock'));
humanPaper.addEventListener("click", () => getHumanChoice("paper"));
humanScissors.addEventListener("click", () => getHumanChoice("scissors"));


//using score counter
let humanScore = 0;
let computerScore = 0;


//Importing div to present the round results instead of the alert message.
const roundResults = document.createElement('h3');

//Round begins. All the possible results are covered. 
//Score counter adds 1 point for each win.
function playRound(humanChoice,computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        roundResults.textContent = "Lost. Paper covers rock.";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        roundResults.textContent = "Lost. Scissors cut paper.";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        roundResults.textContent = "Lost. Rock breaks scissors.";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        roundResults.textContent = "You WON. Scissors cut paper.";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        roundResults.textContent = "You WON. Paper covers rock.";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        roundResults.textContent = "You WON. Rock breaks scissors.";
    } else {
        roundResults.textContent = "That's a draw!";
    }
}

const counter = document.querySelector('.count');