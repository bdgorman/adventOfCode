// console.log("test");

/*
This report indicates that, scanning outward from the submarine, the sonar sweep found depths of 199, 200, 208, 210, and so on.

The first order of business is to figure out how quickly the depth increases, just so you know what you're dealing with - you never know if the keys will get carried into deeper water by an ocean current or a fish or something.

To do this, count the number of times a depth measurement increases from the previous measurement. (There is no measurement before the first measurement.) In the example above, the changes are as follows:

199 (N/A - no previous measurement)
200 (increased)
208 (increased)
210 (increased)
200 (decreased)
207 (increased)
240 (increased)
269 (increased)
260 (decreased)
263 (increased)
In this example, there are 7 measurements that are larger than the previous measurement.

How many measurements are larger than the previous measurement?
*/

const testData = [
    '199',
    '200',
    '208',
    '210',
    '200',
    '207',
    '240',
    '269',
    '260',
    '263'
]

const fs = require('fs');
const path = require('path');
let filepath = path.normalize("C:/Users/Ben/Documents/Projects/adventOfCode/2021/Day1/input.txt");
let lines = fs.readFileSync(filepath).toString().split('\n');
var linesArr = lines.map(x => x.replace('\r', ''));
// var part1  = part1Func(linesArr);
// console.log(part1);

// console.log(part2);

function part1Func(linesArr){
    var num  = 0;
    linesArr.forEach((e, i) => {
        if ((i != 0) && (e - linesArr[i -1] >  0)){
            // console.log(e, linesArr[i-1]);
            num += 1;
        }
    });
    return num;
}

function part2Func(linesArr){
    var returnNum = -1;
    let prevSum = 0;
    for (let i = 2; i < linesArr.length; i += 1) {
        var currSum = parseInt(linesArr[i-2]) + parseInt(linesArr[i-1]) + parseInt(linesArr[i]);
        if(currSum > prevSum) returnNum +=1;
        prevSum = currSum;
        console.log(returnNum);
        // console.log(prevSum, currSum);
    }
    return returnNum;

}

part2Func(linesArr);
