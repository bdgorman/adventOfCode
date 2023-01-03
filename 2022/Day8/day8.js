const fs = require('fs');
const path = require('path');
let filepath = path.normalize("C:/Users/Ben/Documents/Projects/adventOfCode/Day8/input.txt");
let lines = fs.readFileSync(filepath).toString().split('\n');
const linesArr = lines.map(x => x.replace('\r', ''));
// console.log(linesArr);
const treeGrid = linesArr.map(row => row.split(""));
console.log(treeGrid);
// for (let i = 0; i < linesArr.length; i++) {
//     const element = linesArr[i];
//     console.log(element);
// }