"use strict";

const choices = ["rock", "paper", "scissors"];
const humanScore = 0;
const computerScore = 0;

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

playRound();
