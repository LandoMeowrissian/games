const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft =  document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0;
let hitPosition 


function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole')
  })

  let randomPosition = squares[Math.floor(Math.random() * 9)]
  randomPosition.classList.add('mole');
  console.log(randomPosition)

  hitPosition = randomPosition.id
}

randomSquare()

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
  let timerId = null;
  timerId = setInterval(randomSquare, 1000)
}


moveMole();
