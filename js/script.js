"use strict";

const numberOfFilms = +prompt('How many films did you watch?', '');

const personalMovieBD = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt ('What did you watch the last film?', ''),
      b = prompt ('Please rate this film', ''),
      c = prompt ('What did you watch the last film?', ''),
      d = prompt ('Please rate this film', '');

personalMovieBD.movies[a] = b;
personalMovieBD.movies[c] = d;

console.log(personalMovieBD);



