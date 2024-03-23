const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft =  document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0;
let timerId = null;
let hitPosition 
let currentTime = 60;


function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole')
  })

  let randomPosition = squares[Math.floor(Math.random() * 15)]
  randomPosition.classList.add('mole');
  console.log(randomPosition)

  hitPosition = randomPosition.id
}


squares.forEach(square => {
  square.addEventListener('mousedown',() => {
    if(square.id == hitPosition) {
      result++
      score.textContent = result;
      hitPosition = null;
    }
  })
})

function moveMole() {
  timerId = setInterval(randomSquare, 1000)
}

moveMole();

function countDown() {
  currentTime--
  timeLeft.textContent = currentTime

  if (currentTime == 0) {
    clearInterval(countDownTimerId)
    clearInterval(timerId)
    alert('Game Over! Your Score is ' + result)
  }
}

let countDownTimerId = setInterval(countDown, 1000)
