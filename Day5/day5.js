test_array =[
    [
        ["Z"], ["N"]
    ],
    [
        ["M"], ["C"], ["D"]
    ],
    [
        ["Z"]
    ]
]

test_instructions = "move 1 from 2 to 1 move 3 from 1 to 3 move 2 from 2 to 1 move 1 from 1 to 2";

var tmp = getInstructionsString(test_instructions);
// console.log(tmp);

doMove(tmp, test_array);




function getInstructionsString(instructions){
    let instructionsArr = instructions.split("move").slice(1);
    var tmp = instructionsArr.map(element => {
        return element.match(/\d+/g);
    });
    return tmp;
}

function doMove(instruction, currentArr){
    // console.log("instructionArr", instructionArr, "startingArr", startingArr);
    console.log(instructionArr[0]);
}
