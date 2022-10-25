"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professional = void 0;
var Professional = /** @class */ (function () {
    function Professional(name, age, weight, height, isRetired, nacionality, oscarsNumber, profession) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nacionality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
    Professional.prototype.printAll = function () {
        console.group(Professional);
        console.log("Name - " + this.name);
        console.log("Age - " + this.age);
        console.log("Weight - " + this.weight);
        console.log("Height - " + this.height);
        console.log("Is Retired? - " + this.isRetired);
        console.log("Nacionality - " + this.nationality);
        console.log("Oscars Numbers - " + this.oscarsNumber);
        console.log("Profession - " + this.profession);
        console.groupEnd();
    };
    return Professional;
}());
exports.Professional = Professional;
