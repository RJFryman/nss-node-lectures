'use strict';

var Stock = require('../lib/stock');

exports.create = function(req, res){
  var currentStock;
  var symb = req.query.symbol;
  var quot = (Math.random()*(201)+50).toFixed(2);
  quot = '$'+quot;
  currentStock = new Stock(symb);
  console.log(currentStock);
  res.jsonp({symbol: symb, quote: quot});
};
