let numberOfFilms = 0;
while (!numberOfFilms){
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', );
}
let movies = {}

let personalMovieDB = {
    count: numberOfFilms,
    movies: movies,
}

let lastOfFilms = [];

lastOfFilms[0] = enterFilm();


let scoreOfFilm = [];

scoreOfFilm[0] = enterScore();

lastOfFilms[1] = enterFilm();

scoreOfFilm[1] = enterScore();


personalMovieDB.movies.lastWatchable = lastOfFilms;
personalMovieDB.movies.score = scoreOfFilm;

console.log(personalMovieDB);

function enterFilm() {
    let fname = '';
    while (!fname || fname.length > 50){
        fname = prompt('Один из последних просмотренных фильмов?', );
        }
    return fname
}

function enterScore() {
    let fscore = 0;
    while (!fscore){
        fscore = prompt('Один из последних просмотренных фильмов?', );
        }
    return fscore
}