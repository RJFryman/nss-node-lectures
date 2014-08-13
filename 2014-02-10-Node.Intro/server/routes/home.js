'use strict';

exports.index = function(req, res){
  res.jsonp({ok:true});
};

exports.name = function(req, res){
  res.jsonp({name:'my name is node'});
};

exports.favcolor = function(req, res){
  res.jsonp({color:'black like my soul'});
};

exports.add = function(req, res){
  var total = req.params.x*1 + req.params.y*1;
  res.jsonp({add:total});
};

exports.canDrink = function(req, res){
  var age = parseInt(req.params.age);
  var answer;

  if( age < 18){
    answer = 'No';
  }else if(age < 21){
    answer = 'Maybe';
  }else{
    answer = 'Yes';
  }
  var phrase = 'Can ' + req.params.name + ' drink? ' + answer;
  res.jsonp({canDrink:phrase});
};
