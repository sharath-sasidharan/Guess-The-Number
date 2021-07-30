let number = document.querySelector(".number");

let guess = document.querySelector(".guess");
let operation = document.querySelector(".operation");
let life = document.querySelector(".life");
let highsc = document.querySelector(".highscore");
let restart = document.querySelector(".restart");
let check = document.querySelector(".check");
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let displayMessage = (message) => {
  operation.textContent = message;
  console.log(message);
};

check.addEventListener("click", function () {
  let guessValue = Number(number.value);

  if (!guessValue) {
    operation.textContent = "⛔ No Number";
  } else if (guessValue === secretNumber) {
    guess.textContent = secretNumber;

    displayMessage("🤩 Correct Answer");
    document.querySelector("body").style.backgroundColor = "Green";
    document.querySelector(".btng").style.width = "8%";
    if (score > highscore) {
      highscore = score;
      highsc.textContent = highscore;
    }
  } else if (guessValue !== secretNumber) {
    if (score > 1) {
      displayMessage(guessValue > secretNumber ? "Too High" : "🥶Too Low");
      score--;
      life.textContent = score;
    } else {
      life.textContent = 0;
      operation.textContent = " 😓You've Lost the game";
      displayMessage("😓You've Lost the game");
    }
  }
});

restart.addEventListener("click", function () {
  score = 20;
  life.textContent = score;
  //   operation.textContent = "🤔 start guessing...";
  displayMessage("🤔 start guessing...");
  guess.textContent = "?";
  number.value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".btng").style.width = "50px";
});
