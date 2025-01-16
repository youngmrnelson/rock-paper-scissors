"use strict";

const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  return prompt("Rock, Paper, Scissors?", "rock").toLowerCase().trim();
}

function playRound() {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();
  evaluateRound(humanChoice, computerChoice);
}

function increasePlayerScore() {
  humanScore++;
  displayWinningMessage();
}

function increaseComputerScore() {
  computerScore++;
  displayLosingMessage();
}

function displayWinningMessage() {
  console.log("Human wins!");
  displayPlayerScores();
}

function displayLosingMessage() {
  console.log("Computer wins!");
  displayPlayerScores();
}

function displayDrawMessage() {
  console.log("It's a draw!");
  displayPlayerScores();
}

function displayPlayerChoices(a, b) {
  console.log(`Human: ${a}\nComputer: ${b}`);
}

function displayPlayerScores() {
  console.log(`Human Score: ${humanScore}\nComputer Score: ${computerScore}`);
}

function evaluateRound(a, b) {
  displayPlayerChoices(a, b);
  if (a === "rock" && b === "scissors") {
    increasePlayerScore();
  } else if (a === "rock" && b === "paper") {
    increaseComputerScore();
  }
  if (a === "paper" && b === "rock") {
    increasePlayerScore();
  } else if (a === "paper" && b === "scissors") {
    increaseComputerScore();
  }
  if (a === "scissors" && b === "paper") {
    increasePlayerScore();
  } else if (a === "scissors" && b === "rock") {
    increaseComputerScore();
  }
  if (a === b) {
    displayDrawMessage();
  }
}

function decideWinner(x, y) {
  if (x > y) {
    console.log("Human wins the game!");
  } else if (y > x) {
    console.log("Computer wins the game!");
  } else {
    console.log("The game ended in a draw...");
  }
}

function playGame() {
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
  decideWinner(humanScore, computerScore);
}

playGame();
