////// ATTENTION: IF FOR SOME REASON YOU ARE READING THIS AND YOU'RE NOT ME, I CHEATED ON THIS ONE. THIS IS SOMEONE ELSES WORK /////



const fs = require('fs');
const path = require('path');
let filepath = path.normalize("C:/Users/Ben/Documents/Projects/adventOfCode/Day7/input.txt");
let lines = fs.readFileSync(filepath).toString().split('\n');
const commands = lines.map(x => x.replace('\r', ''));
// console.log(commands);

class Node {
    name = "";
    parent = null;

    isDirectory = true;
    size = 0;
    children = {};
    

    Node() {
    }
}

function processCommand(command, rootNode, currentPosition) {
    let newCurrentPosition = currentPosition;

    const splitCommand = command.split(" ");
    if (splitCommand[1] == "cd") {
        if (splitCommand[2] == "..") {
            newCurrentPosition = currentPosition.parent;
        } else if (splitCommand[2] == "/") {
            newCurrentPosition = rootNode;
        } else {
            if (currentPosition.children[splitCommand[2]]) {
                newCurrentPosition = currentPosition.children[splitCommand[2]];
            }
        }
    } else if (splitCommand[1] == "ls") {
    } 

    return newCurrentPosition;
}

function processFile(command, currentPosition) {
    const splitCommand = command.split(" ");
    if (!currentPosition.children[splitCommand[1]]) {
        const newNode = new Node();
        newNode.name = splitCommand[1];
        newNode.parent = currentPosition;
        currentPosition.children[splitCommand[1]] = newNode;

        if (splitCommand[0] === "dir") {
            newNode.isDirectory = true;
        } else {
            newNode.isDirectory = false;
            newNode.size = +splitCommand[0];
        }
    }
}

function updateDirectorySize(node) {
    if (!node.isDirectory) {
        return node.size;
    }

    let subSize = 0;
    for (let child of Object.values(node.children)) {
        subSize += updateDirectorySize(child);
    }
    node.size = subSize;
    return subSize;
}

function sumOfDirectorySizeLessThanThreshold(node, threshold, totalSize) {
    if (!node.isDirectory) {
        return totalSize;
    }

    for (let child of Object.values(node.children)) {
        totalSize = sumOfDirectorySizeLessThanThreshold(child, threshold, totalSize);
    }

    if (node.size <= threshold) {
        return node.size + totalSize;
    }

    return totalSize;
}

function findSmallestDirectoryGreaterThanSize(node, candidateNode, targetSize) {
    if (!node.isDirectory) {
        return candidateNode;
    }

    for (let child of Object.values(node.children)) {
        candidateNode = findSmallestDirectoryGreaterThanSize(child, candidateNode, targetSize);
    }

    if (node.size < targetSize) {
        return candidateNode;
    }

    if (!candidateNode || node.size <= candidateNode.size) {
        return node;
    }

    return candidateNode;
}

function solve(part) {
    const rootNode = new Node();
    rootNode.name = "/";
    rootNode.isDirectory = true;

    let currentPosition = rootNode;

    for (let command of commands) {
        if (command.charAt(0) == "$") {
            currentPosition = processCommand(command, rootNode, currentPosition);
        } else {
            processFile(command, currentPosition)
        }
    }
    const totalSize = updateDirectorySize(rootNode);

    if (part === "part1") {
        console.log(sumOfDirectorySizeLessThanThreshold(rootNode, 100000, 0));
    } else {
        const totalSpace = 70000000;
        const freeSpaceNeeded = 30000000;
        const currentlyFreeSpace = totalSpace - totalSize;
        const moreSpaceNeeded = freeSpaceNeeded - currentlyFreeSpace;
        console.log(findSmallestDirectoryGreaterThanSize(rootNode, null, moreSpaceNeeded).size);
    }
}

// Part 11543140
solve("part1");
// 1117448
solve("part2");
