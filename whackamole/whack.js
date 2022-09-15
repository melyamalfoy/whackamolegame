const squares = document.querySelectorAll('.square')   //zoekt alles met classname square
const mole = document.querySelector('.mole') //zoekt de mol
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60
let timerId = null


function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })


    let randomSquare = squares[Math.floor(Math.random() * 9)]  //gaat naar een willekeurig vierkant * 9 want 9 squares. floor om het af te ronden
    randomSquare.classList.add('mole')  //het vliegtuigje word willekeurig toegevoegd

    hitPosition = randomSquare.id //als er op tijd geklikt word op het vliegtuigje =  hitPosition
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

function moveMole() {
    timerId = setInterval(randomSquare, 500)
}


moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('Spel is over! Jouw score is ' + result)
    }

}

let countDownTimerId = setInterval(countDown, 1000)