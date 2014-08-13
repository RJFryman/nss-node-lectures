'use strict';

var _ = require('lodash');

exports.index = function(req, res){
  res.render('home/index', {title: 'Express Template'});
};

exports.calc = function(req, res){
  res.render('home/calc', {title: 'Ninja Calculator'});
};

exports.add = function(req, res){
  var x = parseInt(req.query.x);
  var y = parseInt(req.query.y);
  var sum = x+y;
  res.send({sum:sum});
};

exports.prod = function(req, res){
  var nums = req.query.nums.split(',');
  var prod = _.reduce(nums, function(acc, x){return acc * x;}, 1);
  res.send({prod:prod});
};
