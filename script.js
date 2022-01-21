'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let $messageSelector = document.querySelector('.message');
let $checkSelector = document.querySelector('.check');
let $numberSelector = document.querySelector('.number');
let $bodySelector = document.querySelector('body');
let $highSelector = document.querySelector('.highscore');
let $scoreSelector = document.querySelector('.score');
let $guessSelector = document.querySelector('.guess');
let $againSelector = document.querySelector('.again');

const displayMessage = function (message) {
  $messageSelector.textContent = message;
};

$checkSelector.addEventListener('click', function () {
  const guess = Number($guessSelector.value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    $numberSelector.textContent = secretNumber;

    $bodySelector.style.backgroundColor = '#60b347';
    $numberSelector.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      $highSelector.textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      $scoreSelector.textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      $scoreSelector.textContent = 0;
    }
  }
});

$againSelector.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  $scoreSelector.textContent = score;
  $numberSelector.textContent = '?';
  $guessSelector.value = '';

  $bodySelector.style.backgroundColor = '#222';
  $numberSelector.style.width = '15rem';
});
