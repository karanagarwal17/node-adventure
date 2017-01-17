var express = require('express');
var bodyparser = require('body-parser');
var morgan = require('morgan');
var app = express();
var promorouter = express.Router();

promorouter.use(bodyparser.json());

promorouter.route('/')
.all(function(req,res,next){
  res.writeHead(200,{"content-type":'text/plain'});
  next();
})
.get(function(req,res,next){
  res.end("Getting all the promoes for you");
})
.post(function(req,res,next){
  res.end("Posting the promo:" + req.body.name + " with description: " + req.body.description);
})
.delete(function(req,res,next){
  res.end("Deleting all the promoes");
});

promorouter.route('/:promoid')
.all(function(req,res,next){
  res.writeHead(200,{"content-type":'text/plain'});
  next();
})
.get(function(req,res,next){
  res.end("Getting the promo with id: " + req.params.promoid);
})
.post(function(req,res,next){
  res.end("Posting to the promo with id: " + req.params.promoid);
})
.delete(function(req,res,next){
  res.end("Deleting from the promo with id: " + req.params.promoid);
});

module.exports.promorouter = promorouter;
