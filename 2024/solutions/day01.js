const fs = require('node:fs');
const path = require('path');
const utils = require(path.join(__dirname, '../../utils.js'));

const input = utils.getInput(2024, 1);

const rows = input.split('\n');

let leftNumbers = [];
let rightNumbers = [];
let totalDistance = 0;

rows.forEach((row) => {
    const parts = row.split(/\s+/);
    leftNumbers.push(parseInt(parts[0]));
    rightNumbers.push(parseInt(parts[1]));
});

leftNumbers.sort();
rightNumbers.sort();

for (let i = 0; i < leftNumbers.length - 1; i++) {
    const difference = Math.abs(leftNumbers[i] - rightNumbers[i]);
    totalDistance += difference;
}

console.log(totalDistance);

// Part 2

function countFreq(array1, array2) {
    const freq = [];

    for (let i = 0; i < array1.length - 1; i++) {
        const value = array1[i];
        const count = array2.filter(item => item === value).length;
        freq.push(value * count);
    }

    return freq;
}

const leftFreq = countFreq(leftNumbers, rightNumbers);

const simScore = leftFreq.reduce((acc, curr) => acc + curr, 0);

console.log(simScore);