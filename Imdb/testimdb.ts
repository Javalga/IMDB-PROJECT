import { Movie } from "../Movie/Movie";
import { Professional } from "../Professional/professional";
import { Imdb } from "../imdb/imdb";
import * as fs from "fs";

let jose = new Professional("jose", 34, 1, 2, true, "americana", 7, "actor");
let carlos = new Professional("carlos", 32, 4, 1, false, "colombiana", 1, "actor");
let maria = new Professional("maria", 28, 2, 2, true, "venezolana", 0, "actor");
let juan = new Professional("juan", 41, 1, 3, true, "Español", 4, "actor");
let batman = new Movie("batman", 2010, [jose, carlos], "americana", "accion", jose, "producciones", maria, "ingles", "netflix", false, "sony", "nick");
let cat = new Movie("cat", 2010, [maria, juan], "europea", "drama", carlos, "producciones", juan, "español", "HBO", false, "paramount", "nick");
let imdb1 = new Imdb([batman, cat]);
let stringifiedImdb = JSON.stringify(imdb1, null, 2)
fs.writeFileSync('./Json/imdbBBDD.json', stringifiedImdb)
export let imdbData = fs.readFileSync('./Json/imdbBBDD.json', { encoding: 'utf8' })
let myNewImdb = new Imdb([...JSON.parse(imdbData).movies])

imdb1.writeInJsonFile('Imdb1')
