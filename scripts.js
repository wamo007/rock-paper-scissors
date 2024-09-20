console.log("Hello World!");

let humanChoice = 0;
let computerChoice = 0;

//defining array values for the computer to randomly choose
const options = ["rock", "paper", "scissors"];
let length = options.length;

//using the array to return random choice
function getComputerChoice() {
    return computerChoice = options[Math.floor(Math.random() * options.length)];
}

//while loop to reject other words.
//Only our three words (regardless of the case) will be accepted
function getHumanChoice(humanChoice = (prompt("Rock, Paper, Scissors, one, two, three!").toLowerCase())) {
    while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        alert("The choice is neither of them... Please choose rock, paper, or scissors.");
        humanChoice = prompt("Rock, Paper, Scissors, one, two, three!").toLowerCase();
    }
    
    return humanChoice;
}

//using score counter
let humanScore = 0;
let computerScore = 0;

//Round begins. All the possible results are covered. 
//Score counter adds 1 point for each win.
function playRound(humanChoice,computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        alert("Lost. Paper covers rock.");
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        alert("Lost. Scissors cut paper.");
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        alert("Lost. Rock breaks scissors.");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        alert("You WON. Scissors cut paper.");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        alert("You WON. Paper covers rock.");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        alert("You WON. Rock breaks scissors.");
    } else {
        alert("That's a draw!");
    }
}

//for loop to get the wheels turning for 5 times.
for (let i = 0; i < 5; i++) {
getComputerChoice();
getHumanChoice(humanChoice = (prompt("Rock, Paper, Scissors, one, two, three!").toLowerCase()));
playRound(humanChoice,computerChoice,humanScore,computerScore);
alert(humanScore + ":" + computerScore);
}

alert("Currently, score for the humanity equals to " + humanScore + ". Score for terminators " + computerScore);