'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value;
console.log(document.querySelector('.guess').value);

document.querySelector('.guess').value = 23;
console.log((document.querySelector('.guess').value = 23));
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highScore = 0;

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  } else if (guess === secretNumber && score >= 1) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = 'You win!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (score >= 1) {
    if (guess > Number(secretNumber)) {
      score--;
      document.querySelector('.score').textContent = score;
      if (score < 1) {
        document.querySelector('.message').textContent = 'Too high.\nYou Lose!';
      } else if (score >= 1) {
        document.querySelector('.message').textContent = 'Too high.';
      }
    } else if (guess < Number(secretNumber)) {
      score--;
      document.querySelector('.score').textContent = score;
      if (score < 1) {
        document.querySelector('.message').textContent = 'Too low.\nYou Lose!';
      } else if (score >= 1) {
        document.querySelector('.message').textContent = 'Too low.';
      }
    }
  }
});
