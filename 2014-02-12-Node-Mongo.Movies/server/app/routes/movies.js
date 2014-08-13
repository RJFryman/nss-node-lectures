'use strict';

var Movie = require('../models/movie');
var mongodb = require('mongodb');


exports.update = function(req, res){
  var db= req.app.locals.db;
  var movies = db.collection('movies');

  var id = mongodb.ObjectID(req.params.id);
  var movie = new Movie(req.body);

  movies.update({_id:id}, movie , function(err, count){
    res.send({_id:id, count:count, movie:movie});
  });
};

exports.create = function(req, res){
  var db= req.app.locals.db;
  var movies = db.collection('movies');

  var name = req.body.name;
  var rating = req.body.rating;
  var runtime = req.body.runtime;
  var releaseYear = req.body.releaseYear;
  var studio = req.body.studio;
  var actors = req.body.actors.split(', ');
  var director = req.body.director;
  var poster = req.body.poster;

  var movie = new Movie(name, rating, runtime, releaseYear, studio, actors, director, poster);

  movies.insert(movie, function(err, records){
    res.send(records[0]);
  });
};

exports.index = function(req, res){
  var db= req.app.locals.db;
  var movies = db.collection('movies');

  movies.find().toArray(function(err, records){
    res.send({movies:records});
  });
};

exports.get = function(req, res){
  var db= req.app.locals.db;
  var movies = db.collection('movies');

  var id = new mongodb.ObjectID(req.params.id);
  movies.find({_id: id}).toArray(function(err, records){
    res.send({movies:records});
  });
};

exports.query = function(req, res){
  var db= req.app.locals.db;
  var movies = db.collection('movies');

  movies.find(req.query).toArray(function(err, records){
    res.send({movies:records});
  });
};

exports.remove = function(req, res){
  var db= req.app.locals.db;
  var movies = db.collection('movies');

  var id = mongodb.ObjectID(req.params.id);

  movies.remove({_id: id},function(err, records){
    res.send({id:req.params.id});
  });
};
