const { readFileSync } = require('fs')
const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function RuckSack (filename) {
  const contents = readFileSync(filename, 'utf-8')
  const arr = contents.split(/\r?\n/)

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    RuckSackValue(element)


    const firstHalf = element.slice(0, element.length / 2)
    const secondHalf = element.slice(element.length / 2, element.length)
    console.log(firstHalf, secondHalf)
    FindTheItem(firstHalf, secondHalf)
  }
}

function FindTheItem (firstHalf, secondHalf) {
  let theItemIs = null

  for (let j = 0; j < firstHalf.length; j++) {
    const element = firstHalf[j]
    const theError = secondHalf.indexOf(element)

    if (theError !== -1 & theItemIs === null) {
      theItemIs = element
      console.log('🚀 ~ file: Day3.js:21 ~ FindTheDubelItem ~ element', element)
    }
  }
}

function RuckSackValue (allItems) {
  let value = 0
  for (let i = 0; i < allItems.length; i++) {
    const element = allItems[i]
    const theValue = alpha.indexOf(element)
    value += theValue
  }
  console.log('🚀 ~ file: Day3.js:34 ~ RuckSackValue ~ value', value)
}
RuckSack('rucksack.txt')
