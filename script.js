"use strict";

// DOM Variables
const gameBtns = document.querySelectorAll(".game-choice");
const playerChoiceIcon = document.querySelector(".player-choice-icon");
const computerChoiceIcon = document.querySelector(".computer-choice-icon");
const playerPointsDisplay = document.querySelector(".player-points-display");
const computerPointsDisplay = document.querySelector(
  ".computer-points-display"
);
const gameRoundDisplay = document.querySelector(".game-round-number");
const gameMessage = document.querySelector(".game-message");
const playGameBtn = document.querySelector(".btn-play");
// Global Variables
const MAX_ROUNDS = 5;
let gameRound = 0;
let humanScore = 0;
let computerScore = 0;

// Game Functions
gameBtns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    removeGameChoiceIcons();
    let playerChoice = e.currentTarget.id;
    let computerChoice = getComputerChoice();
    if (e.currentTarget.id === "rock") {
      playerChoiceIcon.classList.add("fa-hand-fist");
    }
    if (e.currentTarget.id === "paper") {
      playerChoiceIcon.classList.add("fa-hand");
    }
    if (e.currentTarget.id === "scissors") {
      playerChoiceIcon.classList.add("fa-hand-peace");
    }

    evaluateRound(playerChoice, computerChoice);
  })
);

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * 3)];
  if (computerChoice === "rock") {
    computerChoiceIcon.classList.add("fa-hand-fist");
  }
  if (computerChoice === "paper") {
    computerChoiceIcon.classList.add("fa-hand");
  }
  if (computerChoice === "scissors") {
    computerChoiceIcon.classList.add("fa-hand-peace");
  }

  return computerChoice;
}

function removeGameChoiceIcons() {
  playerChoiceIcon.classList.remove("fa-hand-fist", "fa-hand", "fa-hand-peace");
  computerChoiceIcon.classList.remove(
    "fa-hand-fist",
    "fa-hand",
    "fa-hand-peace"
  );
}

function evaluateRound(a, b) {
  // displayPlayerChoices(a, b);
  if (a === "rock" && b === "scissors") {
    increasePlayerScore();
    displayWinningMessage();
    increaseRound();
  } else if (a === "rock" && b === "paper") {
    increaseComputerScore();
    displayLosingMessage();
    increaseRound();
  }
  if (a === "paper" && b === "rock") {
    increasePlayerScore();
    displayWinningMessage();
    increaseRound();
  } else if (a === "paper" && b === "scissors") {
    increaseComputerScore();
    displayLosingMessage();
    increaseRound();
  }
  if (a === "scissors" && b === "paper") {
    increasePlayerScore();
    displayWinningMessage();
    increaseRound();
  } else if (a === "scissors" && b === "rock") {
    increaseComputerScore();
    displayLosingMessage();
    increaseRound();
  }
  if (a === b) {
    displayDrawMessage();
    increaseRound();
  }
}

// function playRound() {
//   const humanChoice = getHumanChoice();
//   const computerChoice = getComputerChoice();
//   evaluateRound(humanChoice, computerChoice);
// }

function increasePlayerScore() {
  humanScore++;
  playerPointsDisplay.textContent = humanScore;
}

function increaseComputerScore() {
  computerScore++;
  computerPointsDisplay.textContent = computerScore;
}

function displayWinningMessage() {
  displayGameMessage();
  gameMessage.textContent = "You win!";
}

function displayLosingMessage() {
  displayGameMessage();
  gameMessage.textContent = "You lose!";
}

function displayDrawMessage() {
  displayGameMessage();
  gameMessage.textContent = "It's a draw!";
}

function displayGameMessage() {
  gameMessage.classList.remove("hidden");
}

function increaseRound() {
  gameRound++;
  gameRoundDisplay.textContent = gameRound;
}

// function decideWinner(x, y) {
//   if (x > y) {
//     console.log("Human wins the game!");
//   } else if (y > x) {
//     console.log("Computer wins the game!");
//   } else {
//     console.log("The game ended in a draw...");
//   }
// }

// function playGame() {
//   playRound();
//   playRound();
//   playRound();
//   playRound();
//   playRound();
//   decideWinner(humanScore, computerScore);
// }
