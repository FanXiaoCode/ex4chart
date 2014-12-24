var util = require('util');
var redis = require('redis');

exports.crud = function(){
  return function(req, res) {
    res.render('redisCRUD', {  title: 'barChart'});
  };
};