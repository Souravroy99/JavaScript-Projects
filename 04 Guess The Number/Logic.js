let randomNumber = parseInt(Math.random()*100+1) ;
console.log(randomNumber) ;

const submit    = document.querySelector('#subt') ;
const userInput = document.querySelector('#guessField') ;
const guessSlot = document.querySelector('.guesses') ;
const remaining = document.querySelector('.lastResult') ;
const lowOrHigh = document.querySelector('.lowOrHigh') ;
const startOver = document.querySelector('.resultParas') ;

const p = document.createElement('p') ;

let prevGuess = [] ;   // Not understand
let numGuess = 1 ;
let playGame = true ;


if(playGame == true)
{
    submit.addEventListener('click', function(event){
        event.preventDefault() ;
        const guess = parseInt(userInput.value) ;
        console.log(guess) ;
        validateGuess(guess) ;
    })
}


function validateGuess(guess){
    if(guess=='' || isNaN(guess)){
        alert('please enter a valid Number') ;
    }
    else if(guess<1 || guess>100){
        alert('please enter a number in the range of : 1 to 100') ;
    }
    else{
        prevGuess.push(guess) ;  // Not understand
        if(numGuess === 11){
            displayGuess(guess) ;
            displayMessage(`Game Over! Random number was ${randomNumber}`) ;
            endGame() ;
        }
        else{
            displayGuess(guess) ;
            checkGuess(guess) ;
        }
    }
}


function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`) ;
        endGame() ;
    }
    else if(guess < randomNumber){
        displayMessage(`Number is too Lowwwww`) ;
    }
    else if(guess > randomNumber){
        displayMessage(`Number is too High`) ;
    }
}


function displayGuess(guess){
    userInput.value = '' ;
    guessSlot.innerHTML += `${guess} ` ;
    numGuess++ ;

    if(numGuess !== 12)
        remaining.innerHTML = `${11-numGuess}` ;
}


function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>` ;
}


function endGame(){
    userInput.value = '' ;
    userInput.setAttribute('disabled', '') ; // Not understand
    p.classList.add('button') ;
    p.innerHTML = `<button id="newGame">Start new game</button>` ;
    startOver.appendChild(p) ; // Not understand
    playGame = false ;
    
    newGame() ;
}


function newGame(){
    const newGameButton = document.querySelector('#newGame') ;
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random()*100+1) ;
        prevGuess = [] ; 
        numGuess = 1 ;
        guessSlot.innerHTML = "" ;
        remaining.innerHTML = `${11-numGuess}` ;
        userInput.removeAttribute('disabled') ;
        startOver.removeChild(p) ;

        playGame = true ;
    })
}


