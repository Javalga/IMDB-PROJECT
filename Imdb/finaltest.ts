let readlineSync = require('readline-sync');
import * as fs from "fs";
import { Professional } from "../Professional/professional";
import { imdbData } from './testimdb'

let promptName = readlineSync.question('What\'s the name of the proffesional?\t');
let promptAge: number = readlineSync.question('What\'s the age of the proffesional?\t');
let promptWeight: number = readlineSync.question('What\'s the weight of the proffesional in kg?\t');
let promptHeight: number = readlineSync.question('What\'s the height of the proffesional in cm?\t');
let promptIsRetired: boolean = readlineSync.question('Is the professional retired? true/false\t');
let promptNationality: string = readlineSync.question('What\'s the nationality of the professional?\t');
let promptOscarsNumber: number = readlineSync.question('What\'s the amount of Oscar\'s the professional earned?\t');
let promptProfession: string = readlineSync.question('What\'s his profession?\t');
let myNewProfessional = new Professional(promptName, promptAge, promptWeight, promptHeight, promptIsRetired, promptNationality, promptOscarsNumber, promptProfession)
console.log(myNewProfessional);
let parsedBBDD = JSON.parse(imdbData)
let titleString = ''
for (let movie of parsedBBDD.movies) {
    titleString += '\n' + movie.title
}
let selectedMovie: string = readlineSync.question(`These are movies where you can add this professional:${titleString}\n\n`)

for (let i = 0; i < parsedBBDD.movies.length; i++) {
    if (selectedMovie === parsedBBDD.movies[i].title) {
        parsedBBDD.movies[i].actors.push(myNewProfessional)
        console.log(`The professional was added successfully to the movie ${parsedBBDD.movies[i].title} `);
        fs.writeFileSync('./Json/imdbBBDD.json', JSON.stringify(parsedBBDD))
        console.log(parsedBBDD.movies[i].actors);
    }
}

