"use strict";

// document.querySelector(".message").textContent = "Correct Number🥳";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// console.log(document.querySelector(".guess").value);

// document.querySelector(".highscore").textContent = 100;

const number = Math.floor(Math.random() * 20 + 1);
document.querySelector(".number").textContent = number;

let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "❌ Please give a guess!!";
  } else if (guess === number) {
    document.querySelector(".message").textContent = " 🎊 Congratulations 🎊";
    document.querySelector(".wrapper").style.background = "green";
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High 🙌";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "❌You lost the game❌";
      document.querySelector(".score").textContent = 0;
      document.querySelector(".box").style.boxShadow = "5px 5px 10px red";
      document.querySelector(".right").style.background = "red";
    }
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low 🔻";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "❌You lost the game❌";
      document.querySelector(".score").textContent = 0;
      document.querySelector(".box").style.boxShadow = "0 0 15px red";
      document.querySelector(".right").style.background = "red";
    }
  }
});
