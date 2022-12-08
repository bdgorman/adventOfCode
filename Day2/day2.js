/////////////
//THEM: A = Rock, B = Paper, C = Scissors
//ME:  X = Rock, Y = Paper, and Z = Scissors
// rock: 1pt paper: 2pt scissors: 3pt
// loss = 0 draw = 3 win = 6

const fs = require('fs');
const path = require('path');


//boilerplate file reading stuff
var filepath = path.normalize("C:/Users/Ben/Documents/Projects/adventOfCode/Day2/input.txt");
var cals = fs.readFileSync(filepath).toString().split('\n');

//instantiate
clean_vals = [];

//removing return characters
cals.forEach(element =>{
    var element = element.replace("\r", ""); //remove new lines
    const words = element.split(' '); //parse out two vals
    var pair = { theirs: words[0], yours: words[1] };
    clean_vals.push(pair);
    // console.log(words);
  });


clean_vals.pop(); // vscode keeps adding a blank line at the end causing issues.. 
var total = 0;

clean_vals.forEach(element =>{
    var newPair = convert_outcome_to_pair(element);
    // console.log(newPair);
    score = get_score(newPair);
    // console.log(score);
    total += score;

});
console.log(total);

/////////////
//THEM: A = Rock, B = Paper, C = Scissors
//ME:  X = Rock, Y = Paper, and Z = Scissors
// rock: 1pt paper: 2pt scissors: 3pt
// loss = 0 draw = 3 win = 6

function get_score(pair){
    score = 0;
    switch(pair.yours) {
        case 'X': //rock
            score += 1;
          break;
        case 'Y': //paper 
            score += 2;
          break;
        case 'Z': //scissors
            score += 3;
      }

      if(pair.yours == "X" && pair.theirs == "A" || pair.yours == "Y" && pair.theirs == "B" || pair.yours == "Z" && pair.theirs == "C") score += 3;
      score += find_winner(pair);
    //   console.log("total", total);

    return score;
}

function find_winner(pair){

    switch (pair.yours) {
        case "X": //rock
            return (pair.theirs == "C" ? 6 : 0);
            
        case "Y": //paper a
            return (pair.theirs == "A" ? 6 : 0);
    
        case "Z"://scissors b
            return (pair.theirs == "B" ? 6 : 0);

    }
}


/////////////
//X = loss 
//Y = draw
// Z = win 

function convert_outcome_to_pair(pair){
    // console.log(pair.yours);
    
    switch (pair.yours) {
        case "X": 
            var outcome = "loss";
            pair.yours = determine_my_move(outcome, pair.theirs);
            return pair;
            
        case "Y": 
            var outcome = "draw";
            pair.yours = determine_my_move(outcome, pair.theirs);
            return pair;
        
        case "Z":
            var outcome ="win";
            pair.yours = determine_my_move(outcome, pair.theirs);
            return pair;
    }
    
    

}

/////////////
//theirMove: A = Rock, B = Paper, C = Scissors
//outcome: draw, loss, win
//return: X = Rock, Y = Paper, and Z = Scissors

function determine_my_move(outcome, theirMove){
    // console.log("outcome: ", outcome, "theirMove: ", theirMove);
    if(outcome == "draw"){
        if(theirMove == "A") return "X";
        if(theirMove == "B") return "Y";
        if(theirMove == "C") return "Z";
    }
    if(outcome == "loss"){
        if(theirMove == "A") return "Z";
        if(theirMove == "B") return "X";
        if(theirMove == "C") return "Y";
    }
    if(outcome == "win"){
        if(theirMove == "A") return "Y";
        if(theirMove == "B") return "Z";
        if(theirMove == "C") return "X";
    }
}