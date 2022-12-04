
let randomNumber = Math.floor(Math.random() * 1000) + 1;

const boxResult = document.querySelector('.box-result');
const moduls = document.querySelector('#moduls');
const result = document.querySelector('#result');

const guessSubmit = document.querySelector('#guessSubmit');
const guessField = document.querySelector('#guessField');

const moduloField = document.querySelector('#moduloField');
const moduloSubmit = document.querySelector('#moduloSubmit')

const boxReset = document.querySelector('.box-reset');
const resetButton = document.querySelector('#reset-button')

let modulsCount = 0;


console.log("auto created number '" + randomNumber + "'");

function calculateModulo() {
    const userModul = moduloField.value;
    let MODULO = randomNumber % userModul;

    boxResult.style.display = 'unset';
    if (userModul > 99 || userModul < 1) {
        result.style.display = 'block';
        result.textContent = "Zadej číslo v rozsahu 1-99";
        result.style.backgroundColor = 'orange';
    } else {
        if (modulsCount === 0) {
            result.style.display = 'none';
            moduls.textContent = 'Předešlá vypočítaná modula: ';
            moduls.textContent += "... % " + userModul + " = " + MODULO;
        } else {
            result.style.display = 'none';
            moduls.textContent += "; ... % " + userModul + " = " + MODULO;
        }
        modulsCount++;
    }

    console.log(randomNumber + " % " + userModul + " = " + MODULO);
    moduloField.value = null;

}
moduloSubmit.addEventListener('click', calculateModulo);


function checkGuess() {
    if (modulsCount === 0) {
        boxResult.style.display = 'block';
    }
    result.style.display = 'block';
    const guess = Number(guessField.value);
    if (randomNumber === guess) {
        result.textContent = "Výhrál jsi!  Gratuluji";
        result.style.backgroundColor = 'green';

    } else {
        result.textContent = "Prohrál jsi.  Příště to vyjde :)";
        result.style.backgroundColor = 'red';
    }
    gameOver();
}
guessSubmit.addEventListener('click', checkGuess)


function gameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    moduloField.disabled = true;
    moduloSubmit.disabled = true;

    boxReset.style.display = 'block';
}


function newGame() {
    const boxResults = document.querySelectorAll('.box-results');
    for (const boxResult of boxResults) {
        boxResult.textContent = ''
    }

    boxResult.style.display = 'none';
    boxReset.style.display = 'none';
    modulsCount = 0;
    guessField.disabled = false;
    guessSubmit.disabled = false;
    moduloField.disabled = false;
    moduloSubmit.disabled = false;
    guessField.value = null;
    moduloField.value = null;
    result.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 1000) + 1;

    console.log("auto created number '" + randomNumber + "'");
}
resetButton.addEventListener('click', newGame);

/*  function checkGuess() {
      const userGuess = Number(guessField.value);
      if (guessCount === 1) {
          guesses.textContent = 'Previous guesses: ';
      }
  
      guesses.textContent += userGuess + ' ';
  
      if (userGuess === randomNumber) {
          lastResult.textContent = 'Congratulations! You got it right!';
          lastResult.style.backgroundColor = 'green';
          lowOrHi.textContent = '';
          setGameOver();
      } else if (guessCount === 10) {
          lastResult.textContent = '!!!GAME OVER!!!';
          lowOrHi.textContent = '';
          setGameOver();
      } else {
          lastResult.textContent = 'Wrong!';
          lastResult.style.backgroundColor = 'red';
          if (userGuess < randomNumber) {
              lowOrHi.textContent = 'Last guess was too low!';
          } else if (userGuess > randomNumber) {
              lowOrHi.textContent = 'Last guess was too high!';
          }
      }
  
      guessCount++;
      guessField.value = '';
      guessField.focus();
  }
  
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
      for (const resetPara of resetParas) {
          resetPara.textContent = '';
      }
  
      resetButton.parentNode.removeChild(resetButton);
      guessField.disabled = false;
      guessSubmit.disabled = false;
      guessField.value = '';
      guessField.focus();
      lastResult.style.backgroundColor = 'white';
      randomNumber = Math.floor(Math.random() * 100) + 1;
  }
  */

