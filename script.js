// Impterar readFilesync, promises som fsPromises från 'fs'
const { readFileSync, promises: fsPromises } = require('fs')
// import file
function ListOfCandElfs (filename) {
  const contents = readFileSync(filename, 'utf-8')

  const arr = contents.split(/\r?\n/)
  let elfCount = parseInt(0)
  let highestCalCount = parseInt(0)
  let elfCounter = parseInt(1)
  let elfWithBiggestCalCount = parseInt(0)

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== '') {
      elfCount = parseInt(arr[i]) + elfCount
    } else {
      if (elfCount > highestCalCount) {
        highestCalCount = elfCount
        elfWithBiggestCalCount = elfCounter
        elfCount = 0
      }
      elfCounter++
    }
  }
  console.log('alv nummer ' + elfWithBiggestCalCount + 'har en påse med ' + highestCalCount + ' och det är det är den påsen med högst kalorivärde')
  return arr
}

// ListOfCandElfs("list.txt");
const opponentMoves = {
  Rock: 'A',
  Paper: 'B',
  Scissors: 'C'
}

const myMoves = {
  Rock: 'X',
  Paper: 'Y',
  Scissors: 'Z'
}

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
