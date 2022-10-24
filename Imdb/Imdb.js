"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Imdb = void 0;
var fs = require("fs");
var Imdb = /** @class */ (function () {
    function Imdb(movies) {
        this.movies = movies;
    }
    Imdb.prototype.writeInJsonFile = function (fileName) {
        var currentObject = new Imdb(this.movies);
        var stringifiedCurrentObject = JSON.stringify(currentObject, null, 2);
        fs.writeFileSync("./Json/".concat(fileName, ".json"), stringifiedCurrentObject);
    };
    Imdb.prototype.getImdbInstance = function (fileName) {
        var imdbData = fs.readFileSync("./Json/".concat(fileName, ".json"), { encoding: 'utf8' });
        var newImdb = new Imdb(__spreadArray([], JSON.parse(imdbData).movies, true));
        return newImdb;
    };
    return Imdb;
}());
exports.Imdb = Imdb;
