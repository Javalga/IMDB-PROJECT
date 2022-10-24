import { Movie } from "../Movie/Movie";
import * as fs from "fs";

export class Imdb {
  movies: Movie[];
  constructor(movies: Movie[]) {
    this.movies = movies;
  }
  public writeInJsonFile(fileName: string) {
    let currentObject = new Imdb(this.movies)
    let stringifiedCurrentObject = JSON.stringify(currentObject, null, 2)
    fs.writeFileSync(`./Json/${fileName}.json`, stringifiedCurrentObject)
  }
  public getImdbInstance(fileName: string): Imdb {
    let imdbData = fs.readFileSync(`./Json/${fileName}.json`, { encoding: 'utf8' })
    let newImdb = new Imdb([...JSON.parse(imdbData).movies])
    return newImdb
  }
}

