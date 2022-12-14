testData1 = "bvwbjplbgvbhsrlpgdmjqwftvncz";
testData2 = "nppdvjthqldpwncqszvftbrmjlhg";
testData3 = "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg";
testData4 = "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw";


/* TEST DATA ANS 
bvwbjplbgvbhsrlpgdmjqwftvncz: first marker after character 5
nppdvjthqldpwncqszvftbrmjlhg: first marker after character 6
nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg: first marker after character 10
zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw: first marker after character 11
*/
// boilerplate text reading stuff
const fs = require('fs');
const path = require('path');
let filepath = path.normalize("C:/Users/Ben/Documents/Projects/adventOfCode/Day6/input.txt");
let lines = fs.readFileSync(filepath).toString().split('\n');
let linesArr = lines.map(x => x.replace('\r', ''));
// console.log(linesArr);

let analyzeMe = linesArr[0];
let marker = 14;
// console.log(analyzeMe);

console.log(decodeIt(analyzeMe, marker));

function decodeIt(string, markerLength){
    var tmpArr = [];
    for (let i = 0; i < string.length; i++) {
        // console.log(testData1[i]);
        tmpArr.push(string[i]);
        if (tmpArr.length == markerLength){
            var uniqueSet = new Set(tmpArr);
            if (uniqueSet.size == markerLength){
            return i +1;
            } else{
                tmpArr.shift();
            }
        }
    }
    return "none found!";
}


