"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require('readline-sync');
var fs = require("fs");
var professional_1 = require("../Professional/professional");
var testimdb_1 = require("./testimdb");
var promptName = readlineSync.question('What\'s the name of the proffesional?\t');
var promptAge = readlineSync.question('What\'s the age of the proffesional?\t');
var promptWeight = readlineSync.question('What\'s the weight of the proffesional in kg?\t');
var promptHeight = readlineSync.question('What\'s the height of the proffesional in cm?\t');
var promptIsRetired = readlineSync.question('Is the professional retired? true/false\t');
var promptNationality = readlineSync.question('What\'s the nationality of the professional?\t');
var promptOscarsNumber = readlineSync.question('What\'s the amount of Oscar\'s the professional earned?\t');
var promptProfession = readlineSync.question('What\'s his profession?\t');
var myNewProfessional = new professional_1.Professional(promptName, promptAge, promptWeight, promptHeight, promptIsRetired, promptNationality, promptOscarsNumber, promptProfession);
console.log(myNewProfessional);
var parsedBBDD = JSON.parse(testimdb_1.imdbData);
var titleString = '';
for (var _i = 0, _a = parsedBBDD.movies; _i < _a.length; _i++) {
    var movie = _a[_i];
    titleString += '\n' + movie.title;
}
var selectedMovie = readlineSync.question("These are movies where you can add this professional:".concat(titleString, "\n\n"));
for (var i = 0; i < parsedBBDD.movies.length; i++) {
    if (selectedMovie === parsedBBDD.movies[i].title) {
        parsedBBDD.movies[i].actors.push(myNewProfessional);
        console.log("The professional was added successfully to the movie ".concat(parsedBBDD.movies[i].title, " "));
        fs.writeFileSync('./Json/imdbBBDD.json', JSON.stringify(parsedBBDD));
        console.log(parsedBBDD.movies[i].actors);
    }
}
