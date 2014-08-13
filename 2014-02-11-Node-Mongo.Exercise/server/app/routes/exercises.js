'use strict';
var MongoClient = require('mongodb').MongoClient;
var Exercise = require('../models/exercise');

exports.create = function(req, res){
  MongoClient.connect('mongodb://localhost/gym', function(err, db){
      if(err) {throw err;}
      console.log('Connected to Database');

      var exercise = new Exercise(req.body.name, req.body.time, req.body.calories, req.body.date);

      db.collection('exercises').insert(exercise,function(err, records){
        res.send(records[0]);
        console.log('RECORDS INSERTED');
        console.log(records);
      });
    });
};

exports.index = function(req, res){
  MongoClient.connect('mongodb://localhost/gym', function(err, db){
      if(err) {throw err;}
      console.log('Connected to Database');

      db.collection('exercises').find().toArray(function(err, records){
        res.send({exercises:records});
        console.log('EXERCISE LIST');
        console.log(records);
      });
    });
};

exports.queryName = function(req, res){
  MongoClient.connect('mongodb://localhost/gym', function(err, db){
      if(err) {throw err;}
      console.log('Connected to Database');


      var query ={};
      query.name = req.params.name;

      db.collection('exercises').find(query).toArray(function(err, records){
        res.send({exercises:records});
        console.log('EXERCISE LIST');
        console.log(records);
      });
    });
};
