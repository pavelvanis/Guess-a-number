
let randomNumber = Math.floor(Math.random() * 1000) + 1;

const boxResult = document.querySelector('.box-result');
const moduls = document.querySelector('#moduls');
const lastResult = document.querySelector('#lastResult');
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

    if(modulsCount === 0 ) {
        boxResult.style.display = 'unset';
        moduls.textContent = 'Předešlá vypočítaná modula: '   
        moduls.textContent += "... % " + userModul + " = " + MODULO;
    }else{
        moduls.textContent += ", ... % " + userModul + " = " + MODULO;
    }

    console.log(randomNumber + " % " + userModul + " = " + MODULO);
    modulsCount++;
    moduloField.value = null;
}
moduloSubmit.addEventListener('click', calculateModulo);


function checkGuess() {
    boxResult.style.display = 'unset';
    const guess = Number(guessField.value);
    if(randomNumber === guess) {
        result.textContent = "Výhrál jsi!\nGratuluji";
        result.style.backgroundColor = 'green';

    }else{
        result.textContent = "Prohrál jsi\nPříště to vyjde :)";
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

    boxReset.style.display = 'unset';
}


function newGame() {
    const boxResults = document.querySelectorAll('.box-results');
    for( const boxResult of boxResults) {
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
    lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 1000) + 1;
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

