let guessingWords = ""

function theGuessWord() {
    let guessWord = document.getElementById("guessWord")
    guessingWords = guessWord.value
    let winOrLose = document.getElementById("winOrLose")
    for (let i = 0; i < guessingWords.length; ++i) {
        winOrLose.innerHTML += "_" + " "
    }
    guessWord.value = ""
    document.getElementById("restrictedAdd").disabled = true
    document.getElementById("restrictedGuess").disabled = false
}

let indexOfLife = 0
let numberOfLetters = 0
let lives = 7

function guessTheWord() {
    let tryToGuess = document.getElementById("tryToGuess")
    let winOrLose = document.getElementById("winOrLose")
    let copyWinOrLose = winOrLose.innerHTML
    let resetImage = document.getElementById("resetImage")
    winOrLose.innerHTML = ""
    for (let i = 0; i < guessingWords.length; ++i) {
        if (guessingWords.charAt(i) == tryToGuess.value) {
            ++numberOfLetters
            winOrLose.innerHTML += tryToGuess.value + " "
        } else {
            winOrLose.innerHTML += copyWinOrLose.charAt(i * 2) + " "
        }
    }
    if (guessingWords.indexOf(tryToGuess.value) == -1) {
        --lives
        ++indexOfLife
        let element = document.getElementById("life" + indexOfLife)
        element.style.display = 'none'
    }
    if (lives == 0) {
        winOrLose.innerHTML = "YOU LOSE"
    } else if (numberOfLetters == guessingWords.length) {
        winOrLose.innerHTML = "YOU WON"
    }
    tryToGuess.value = ""
}

function resetTheGame() {
    numberOfLetters = 0
    indexOfLife = 0
    lives = 7
    document.getElementById("tryToGuess").value = ""
    document.getElementById("guessWord").value = ""
    document.getElementById("winOrLose").innerHTML = ""
    document.getElementById("restrictedAdd").disabled = false
    document.getElementById("restrictedGuess").disabled = true
    for (let i = 1; i <= 7; ++i) {
        document.getElementById("life" + i).style.display = 'inline'
    }
}