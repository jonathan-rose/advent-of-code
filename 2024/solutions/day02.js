const fs = require('node:fs');
const path = require('path');
const utils = require(path.join(__dirname, '../../utils.js'));

const input = utils.getInput(2024, 2);

let formattedInput = input
    .trim()
    .split("\n")
    .map(line => line.split(" ").map(Number));

// console.log(formattedInput);

let testReport = [30, 60, 60, 37, 37, 39, 50, 38];

function isSafe(report) {

    if (report.length < 2) {
        return true;
    }

    let previousSign = Math.sign(report[0]);

    for (let i = 0; i < report.length - 1; i++) {
        let diff = report[i + 1] - report[i];
        let currentSign = Math.sign(diff);

        if (Math.abs(diff) > 3 || diff == 0) {
            return false;
        }

        if (i != 0 && currentSign != previousSign) {
            return false;
        }

        previousSign = currentSign;
    }

    return true;
}

let results = [];

formattedInput.forEach(report => {
    let eval = isSafe(report);
    if (eval == true) {
        results.push(eval);
    } else {
        for (let i = 0; i < report.length; i++) {
            let newReport = report.slice(0, i).concat(report.slice(i + 1));
            eval = isSafe(newReport);
            if (eval) {
                results.push(eval);
                return;
            }
        }
    }
});

let safeCount = results.filter(e => e === true).length;

console.log(safeCount);