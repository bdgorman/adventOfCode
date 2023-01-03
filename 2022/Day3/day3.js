/*
The list of items for each rucksack is given as characters all on a single line. 
A given rucksack always has the same number of items in each of its two compartments, so the first half of the characters represent items in the first compartment, 
while the second half of the characters represent items in the second compartment.

For example, suppose you have the following list of contents from six rucksacks:

vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw

- The first rucksack contains the items vJrwpWtwJgWrhcsFMMfFFhFp, which means its first compartment contains the items vJrwpWtwJgWr, 
while the second compartment contains the items hcsFMMfFFhFp. The only item type that appears in both compartments is lowercase p.
- The second rucksack's compartments contain jqHRNqRjqzjGDLGL and rsFMfFZSrLrFZsSL. The only item type that appears in both compartments is uppercase L.
- The third rucksack's compartments contain PmmdzqPrV and vPwwTWBwg; the only common item type is uppercase P.
- The fourth rucksack's compartments only share item type v.
- The fifth rucksack's compartments only share item type t.
- The sixth rucksack's compartments only share item type s.
- To help prioritize item rearrangement, every item type can be converted to a priority:

Lowercase item types a through z have priorities 1 through 26.
Uppercase item types A through Z have priorities 27 through 52.
In the above example, the priority of the item type that appears in both compartments of each rucksack is 16 (p), 38 (L), 42 (P), 22 (v), 20 (t), and 19 (s); the sum of these is 157.

Find the item type that appears in both compartments of each rucksack. What is the sum of the priorities of those item types?
*/


const rucksackArr = [];
//boilerplate file reading stuff
const fs = require('fs');
const path = require('path');
let filepath = path.normalize("C:/Users/Ben/Documents/Projects/adventOfCode/Day3/input.txt");
let rucks = fs.readFileSync(filepath).toString().split('\n');
rucks.forEach(element =>{
    // element = element.replace("\r", ""); //remove new lines
    const comp1 = element.slice(0, element.length / 2);
    const comp2 = element.slice(element.length / 2, element.length);

    // const compartment_pair = element.split(''); //parse out two vals
    var rucksack = { comp1: comp1, comp2: comp2 };
    rucksackArr.push(rucksack);
});
// console.log(rucksackArr);


// let teststring = "c";
// console.log(letterToPriority(teststring));


pairsArr = findPairs(rucksackArr);
console.log(pairsArr);
sum = 0;
// pairsArr.forEach(element=>{
//     // console.log(element);
//     element.forEach(e => {
//         console.log(sum += letterToPriority(e));
//     });
// });

function findPairs(rucksackArr){
    const set_of_chars = new Set();
    rucksackArr.forEach(element=>{
        // console.log(element);
        comp1 = element.comp1;
        comp2 = element.comp2;
        for(let i = 0; i < comp1.length; i++){
            if(comp1.charAt(i) == comp1.charAt(i)){
                // console.log(comp1.charAt(i), comp1.charAt(i));
                set_of_chars.add(comp1.charAt(i));
            }
        }
        // console.log(pair);
    });
    return set_of_chars;
}

function letterToPriority(letter){
    if (letter == letter.toLowerCase()) return letter.charCodeAt(0) - 96;
    else return letter.charCodeAt(0) - 38;
}