//Generate the random number that the user needs to guess and store it
let randomNumber = Math.floor(Math.random() * 100) + 1;

//use querySelector to reference HTML elements in const variables, the contents of the HTML elements will change in the html, but the references to the HTML elements will not change in javascript, so they are const, this group of const variables are all part of the resultParas class. These constants will be used to insert values into the HTML paragraphs (<p> elements) later on.
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

//use querySelector to store references to the form text input and submit button which will be used to control submitting guesses
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

//store guess count
let guessCount = 1;

//create reference to the resetButton in HTML
let resetButton;

//this checkGuess function is considered an "event handler", it is a block of code that runs in response to an event
function checkGuess() {
  //create userGuess variable and store the input element with the id "guessField"'s value into it
  let userGuess = Number(guessField.value);

  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }

  //append the userGuess and a space to the <p> element with the "gueses" class
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    //lastResult is a <p> element
    lastResult.style.backgroundColor = 'green';
    //show nothing for this <p> in this case
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!GAME OVER!!!';
    setGameOver();
  } else {
    //these are all <p> elements within a <div class="resultParas"> element
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }           

  guessCount++;
  //empty out the value in the field
  guessField.value = '';
  //automatically put blinking cursor in box
  guessField.focus();

}

//an event listener is a construct that listens for an event
guessSubmit.addEventListener('click', checkGuess);


function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}