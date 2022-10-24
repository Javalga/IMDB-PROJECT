import { Movie } from "../Movie/Movie"; 


export class imdb{
    movies: Movie[];
    
    constructor (movies: Movie[]){
        this.movies = movies;
    }
}

