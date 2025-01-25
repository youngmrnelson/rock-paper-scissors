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
const playGameBtn = document.querySelector(".btn-game");
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
    decideWinner();
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
  } else if (a === "rock" && b === "paper") {
    increaseComputerScore();
    displayLosingMessage();
  }
  if (a === "paper" && b === "rock") {
    increasePlayerScore();
    displayWinningMessage();
  } else if (a === "paper" && b === "scissors") {
    increaseComputerScore();
    displayLosingMessage();
  }
  if (a === "scissors" && b === "paper") {
    increasePlayerScore();
    displayWinningMessage();
  } else if (a === "scissors" && b === "rock") {
    increaseComputerScore();
    displayLosingMessage();
  }
  if (a === b) {
    displayDrawMessage();
  }
}

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

function displayPlayGameBtn() {
  gameMessage.classList.add("hidden");
  playGameBtn.classList.remove("hidden");
}

function increaseRound() {
  gameRound++;
  gameRoundDisplay.textContent = gameRound;
}

function decideWinner() {
  if (gameRoundDisplay.textContent < MAX_ROUNDS) {
    increaseRound();
  }
  if (gameRoundDisplay.textContent == MAX_ROUNDS) {
    displayPlayGameBtn();
    gameBtns.forEach((btn) => (btn.disabled = true));
  }
}

function playGame() {
  gameRound = 0;
  humanScore = 0;
  computerScore = 0;
  removeGameChoiceIcons();
  playerPointsDisplay.textContent = humanScore;
  computerPointsDisplay.textContent = computerScore;
  gameRoundDisplay.textContent = gameRound;
  gameMessage.classList.add("hidden");
  playGameBtn.classList.add("hidden");
  gameBtns.forEach((btn) => (btn.disabled = false));
}

playGameBtn.addEventListener("click", playGame);
