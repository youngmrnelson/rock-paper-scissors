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
  console.log(`Human: ${humanChoice}\nComputer: ${computerChoice}`);
}

function increasePlayerScore() {
  humanScore++;
}

function increaseComputerScore() {
  computerScore++;
}

console.log(computerScore);
