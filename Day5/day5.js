// This is me cheating a little. I didn't feel like parsing this array out from the data because the way they formatted it was super annoying and I don't have time for it today.
test_array =[
    [
        ["H"], ["T"], ["Z"], ["D"]
    ],
    [
        ["Q"], ["R"], ["W"], ["T"], ["G"], ["C"], ["S"]
    ],
    [
        ["P"], ["B"], ["F"], ["Q"], ["N"], ["R"], ["C"], ["H"]
    ],
    [
        ["L"], ["C"], ["N"], ["F"], ["H"], ["Z"],
    ],
    [
        ["G"], ["L"], ["F"], ["Q"], ["S"]
    ],
    [
        ["V"], ["P"], ["W"], ["Z"], ["B"], ["R"], ["C"], ["S"] 
    ],
    [
        ["Z"], ["F"], ["J"]
    ],
    [
        ["D"], ["L"], ["V"], ["Z"], ["R"], ["H"], ["Q"]
    ],
    [
        ["B"], ["H"], ["G"], ["N"], ["F"], ["Z"], ["L"], ["D"] 
    ]

]

// test_instructions = 

/* 
move 1 from 2 to 1 
move 3 from 1 to 3 
move 2 from 2 to 1 
move 1 from 1 to 2
*/


const fs = require('fs');
const path = require('path');
let filepath = path.normalize("C:/Users/Ben/Documents/Projects/adventOfCode/Day5/input.txt");
let lines = fs.readFileSync(filepath).toString().split('\n');
let linesArr = lines.map(x => x.replace('\r', ' '));
let instructions = linesArr.join('');

// console.log(instructions);


var tmp = getInstructionsString(instructions);
// console.log(tmp);

// doMove(tmp[1], test_array);
var currentState = test_array;
for (let i = 0; i < tmp.length; i++) {
    // const element = tmp[i];
    // console.log(element);
    currentState = doMove(tmp[i], currentState);
    
}
// console.log(currentState);

finalString = "";
currentState.forEach(col => {
    finalString += col.pop();
});
console.log(finalString);






function getInstructionsString(instructions){
    let instructionsArr = instructions.split("move").slice(1);
    var tmp = instructionsArr.map(element => {
        return element.match(/\d+/g);
    });
    return tmp;
}

function doMove(instruction, currentArr){
    // console.log("instructionArr", instructionArr, "startingArr", startingArr);
    // console.log(instruction);
    var numCrates = instruction[0];
    var colIndex = instruction[1] - 1;
    var destination = instruction[2] -1;
    // console.log("Starting state: ", currentArr);
    for (let i = 0; i < numCrates; i++) {
        // console.log("iteration", i, "currentArr: ", currentArr);
        var crateOnTheMove = currentArr[colIndex].pop();
        currentArr[destination].push(crateOnTheMove);
    }
    

    // console.log("numCrates:", numCrates, "colIndex:", colIndex,  "destination:", destination);
    // console.log("final state: ", currentArr);
    return currentArr;
}
