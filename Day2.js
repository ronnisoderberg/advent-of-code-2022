const { readFileSync } = require('fs')

// const opponentMoves = {
//   Rock: 'A',
//   Paper: 'B',
//   Scissors: 'C'
// }

// const myMoves = {
//   Rock: 'X',
//   Paper: 'Y',
//   Scissors: 'Z'
// }

let myScore = 0
function RockPaperScissorsIO (filename) {
  const contents = readFileSync(filename, 'utf-8')
  const arr = contents.split(/\r?\n/)

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]

    const elementOponent = element.charAt(0)
    const elementMe = element.charAt(2)
    selectAWinner(elementOponent, elementMe)
  }
  console.log('My score is: ' + myScore)
  return myScore
}

function selectAWinner (opponent, me) {
  // Draw
  switch (opponent + me) {
    case 'AX':
    case 'BY':
    case 'CZ':
      myScore = myScore + 3
      switch (opponent + me) {
        case 'AX':
          myScore = myScore + 1
          break
        case 'BY':
          myScore = myScore + 2
          break
        case 'CZ':
          myScore = myScore + 3
          break
      }
  }
  // Win, 3 points
  switch (opponent + me) {
    case 'CX':
    case 'AY':
    case 'BZ':
      myScore = myScore + 6
      switch (opponent + me) {
        case 'CX':
          myScore = myScore + 1
          break
        case 'AY':
          myScore = myScore + 2
          break
        case 'BZ':
          myScore = myScore + 3
          break
      }
  }

  // Lose no points
  switch (opponent + me) {
    case 'AZ':
    case 'BX':
    case 'CY':
      // Claim point from right choice
      switch (opponent + me) {
        case 'AZ':
          myScore = myScore + 3
          break
        case 'BX':
          myScore = myScore + 1
          break
        case 'CY':
          myScore = myScore + 2
          break
      }
      break
  }
}

RockPaperScissorsIO('rps.txt')
