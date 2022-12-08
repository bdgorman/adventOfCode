//boilerplate file reading stuff
const fs = require('fs');
const path = require('path');
let filepath = path.normalize("C:/Users/Ben/Documents/Projects/adventOfCode/Day3/input.txt");
let rucks = fs.readFileSync(filepath).toString().split('\n');