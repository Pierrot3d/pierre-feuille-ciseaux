let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// Random function (computer choice)

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices [randomNumber];
}

function convertToWord(letter){
  if (letter === "r") return "La pierre";
  if (letter === "p") return "La feuille";
  if (letter === "s") return "Le(s) ciseaux";
}

function win(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = convertToWord(userChoice) + " bat " + convertToWord(computerChoice) + ". Tu as gagné !";
  userChoice_div.classList.add('green-glow');
  setTimeout(() => userChoice_div.classList.remove('green-glow'), 1000);
}

function lose(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = convertToWord(userChoice) + " est battue " + convertToWord(computerChoice) + ". Tu as perdu !"
  userChoice_div.classList.add('red-glow');
  setTimeout(() => userChoice_div.classList.remove('red-glow'), 1000);
}

function draw(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = "Égalité, recommences !"
  userChoice_div.classList.add('grey-glow');
  setTimeout(() => userChoice_div.classList.remove('grey-glow'), 1000);
}

// The game

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

// User choices

function main() {
  rock_div.addEventListener('click',() => game("r"));

  paper_div.addEventListener('click',() => game("p"));

  scissors_div.addEventListener('click',() => game("s"));
}

main();
