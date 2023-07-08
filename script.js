const btn = document.querySelector("#btn");
const current = document.querySelector(".c-score");
const highScore = document.querySelector(".h-score");
const guessRemaining = document.querySelector(".g-num");
const comments = document.querySelector("#comment");
const randomNum = document.querySelector("#randomNum");
const guess = document.querySelector(".guess");

let number = Math.floor(Math.random() * 20);

btn.addEventListener("click", function () {
  const guessNum = Number(guess.value);
  console.log(guessNum);
});
