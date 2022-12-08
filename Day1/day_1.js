const fs = require('fs');
const path = require('path');

var filepath = path.normalize("C:/Users/Ben/Documents/Projects/adventOfCode/Day1/day_1_input.txt");

var cals = fs.readFileSync(filepath).toString().split('\n');

result_arr = [];
var clean_vals= [];
var total = 0;
var max = 0;

cals.forEach(element =>{
  var element = element.replace("\r", "");
  clean_vals.push(parseInt(element));
});

clean_vals.forEach(element => {
  if (isNaN(element)){
    result_arr.push(total);
    if(total > max) max = total;
    total = 0;
  }
  if (Number.isInteger(element)) total += element;
});

// console.log(clean_vals);
// console.log(total);

result_arr.sort(function(a, b) {
  return b - a;
});



console.log("result array: ", result_arr);
console.log("max: ", max);
console.log("top 3: ", result_arr[0], result_arr[1], result_arr[2]);
console.log("top 3 TOTAL: ", result_arr[0] + result_arr[1] + result_arr[2]);

