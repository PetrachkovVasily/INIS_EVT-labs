function PersonalMovieDB(privat) {
    this.privat = privat;
    let movies = {
        kakoitoFilm1: 4,
        kakoitoFilm2: 6,
        kakoitoFilm3: 9,
    }
    this.movies = movies;
    this.moviesTable = function() {
        if (this.privat == false){
            let moviesArr = Object.keys(this.movies)
            document.body.insertAdjacentHTML("afterbegin", `<table>
            <tr>
            <th>Movie name</th>
            <th>Score</th>
            </tr>
            <tr>
            <td>${moviesArr[0]}</td>
            <td>${this.movies.kakoitoFilm1}</td>
            </tr>
            <tr>
            <td>${moviesArr[1]}</td>
            <td>${this.movies.kakoitoFilm2}</td>
            </tr>
            <tr>
            <td>${moviesArr[2]}</td>
            <td>${this.movies.kakoitoFilm3}</td>
            </tr>
            </table>`);
        }
        
    };
}



let personalMovieDB = new PersonalMovieDB(false);
personalMovieDB.moviesTable();


