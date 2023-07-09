const btn = document.querySelector("#btn");
const highScore = document.querySelector(".h-score");
let guessRemaining = document.querySelector(".g-num");
const comments = document.querySelector("#comment");
const randomNum = document.querySelector("#randomNum");
const number = document.querySelector(".number");
const guess = document.querySelector(".guess");

const randomNumber = Math.floor(Math.random() * 20 + 1);
console.log(randomNumber);

btn.addEventListener("click", function () {
  const guessing = Number(guess.value);
  if (!guess) {
    comments.textContent.value = "No number 🚫";
  } else if (guessing === randomNumber) {
    comments.textContent = "CONGRATULATIONS🥳";
    // console.log(document.querySelector(".random-box"));
    console.log(document.querySelector(".random-box"));
    console.log(document.querySelector(".r"));
    document.querySelector(".wrapper").style.background = "green";
  } else if (guessing > randomNumber) {
    comments.textContent = "Too High 🙌";
    document.querySelector(".wrapper").style.background = "red";
  } else if (guessing < randomNumber) {
    comments.textContent = "Too Low🔻";
    document.querySelector(".wrapper").style.background = "red";
  }
});
