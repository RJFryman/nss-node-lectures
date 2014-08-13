'use strict';

function Movie(name, rating, runtime, releaseYear, studio, actors, director, poster){
  this.name = name;
  this.rating = rating;
  this.runtime = parseInt(runtime);
  this.releaseYear = parseInt(releaseYear);
  this.studio = studio;
  this.actors = actors;
  this.director = director;
  this.poster = poster;
}

module.exports = Movie;
