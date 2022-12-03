//Impterar readFilesync, promises som fsPromises från 'fs'
const { readFileSync, promises: fsPromises } = require("fs");
//import file
function syncReadfile(filename) {
  const contents = readFileSync(filename, "utf-8");

  const arr = contents.split(/\r?\n/);
  let elfCount = parseInt(0);
  let highestCalCount = parseInt(0);
  let elfCounter = parseInt(1);
  let elfWithBiggestCalCount = parseInt(0);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "") {
      elfCount = parseInt(arr[i]) + elfCount;
    } else {
      if (elfCount > highestCalCount) {
        highestCalCount = elfCount;
        elfWithBiggestCalCount = elfCounter;
        elfCount = 0;
      }
      elfCounter++;
    }
  }
  console.log("alv nummer " + elfWithBiggestCalCount + "har en påse med " + highestCalCount + " och det är det är den påsen med högst kalorivärde" );
  return arr;
}

syncReadfile("list.txt");
