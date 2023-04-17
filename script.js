"use script";
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else if (randomNumber === 2) {
    return "scissor";
  }
};

const computerChoice = getComputerChoice();
const playerChoice = prompt(`choose between rock,paper or scissor!`);
console.log(
  `The Computer choice is :${computerChoice}\n`,
  `The player Choice is :${playerChoice}`
);

playRound = (computerChoice, playerChoice) => {
  if (computerChoice === playerChoice) {
    console.log(`it's a Draw no one wins !`);
  } else if (computerChoice === "rock") {
    return playerChoice === "paper"
      ? console.log("You Win!")
      : console.log(`You lose!`);
  } else if (computerChoice === "paper") {
    return playerChoice === "scissor"
      ? console.log(`You win!`)
      : console.log(`You lose!`);
  } else if (computerChoice === "scissor") {
    return playerChoice === "rock"
      ? console.log(`You win!`)
      : console.log(`You lose!`);
  }
};
playRound(computerChoice, playerChoice);
