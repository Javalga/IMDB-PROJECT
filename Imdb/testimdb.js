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
exports.imdbData = void 0;
var Movie_1 = require("../Movie/Movie");
var professional_1 = require("../Professional/professional");
var imdb_1 = require("../imdb/imdb");
var fs = require("fs");
var jose = new professional_1.Professional("jose", 34, 1, 2, true, "americana", 7, "actor");
var carlos = new professional_1.Professional("carlos", 32, 4, 1, false, "colombiana", 1, "actor");
var maria = new professional_1.Professional("maria", 28, 2, 2, true, "venezolana", 0, "actor");
var juan = new professional_1.Professional("juan", 41, 1, 3, true, "Español", 4, "actor");
var batman = new Movie_1.Movie("batman", 2010, [jose, carlos], "americana", "accion", jose, "producciones", maria, "ingles", "netflix", false, "sony", "nick");
var cat = new Movie_1.Movie("cat", 2010, [maria, juan], "europea", "drama", carlos, "producciones", juan, "español", "HBO", false, "paramount", "nick");
var imdb1 = new imdb_1.Imdb([batman, cat]);
var stringifiedImdb = JSON.stringify(imdb1, null, 2);
fs.writeFileSync('./Json/imdbBBDD.json', stringifiedImdb);
exports.imdbData = fs.readFileSync('./Json/imdbBBDD.json', { encoding: 'utf8' });
var myNewImdb = new imdb_1.Imdb(__spreadArray([], JSON.parse(exports.imdbData).movies, true));
imdb1.writeInJsonFile('Imdb1');
