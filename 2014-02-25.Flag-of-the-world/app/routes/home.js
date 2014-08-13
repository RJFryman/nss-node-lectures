'use strict';

var _ = require('lodash');

exports.index = function(req, res){
  var random = _.random(10,15);
  var flags = _.sample(global.flags, random);
  var names = _.shuffle(flags);

  res.render('home/index', {flags:flags,names:names, title: 'Ninja Maps'});
};

exports.check = function(req, res){
  var flagcode = req.query.flag;
  var country = req.query.country;
  var flags = global.flags;
  var match = _.find(flags, function(flag){
    return flag.country === country && flag.flag === flagcode;
  });
  console.log(match);

  res.send({match:!!match});

};

