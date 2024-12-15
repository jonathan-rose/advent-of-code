const fs = require('node:fs');
const path = require('path');


function getInput(year, day) {

    const formattedYear = year.toString();
    const formattedDay = day < 10 ? `0${day}` : day.toString();
    const inputFolderPath = path.join(formattedYear, 'input\\day' + formattedDay + '.txt');

    try {
        const input = fs.readFileSync(inputFolderPath, 'utf8');
        return input;
    } catch (err) {
        console.error(err);
    }
}

module.exports = { getInput };
