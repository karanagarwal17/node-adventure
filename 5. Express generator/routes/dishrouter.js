var express = require('express');
var bodyparser = require('body-parser');
var morgan = require('morgan');
var app = express();
var dishrouter = express.Router();

dishrouter.use(bodyparser.json());

dishrouter.route('/')
.all(function(req,res,next){
  res.writeHead(200,{"content-type":'text/plain'});
  next();
})
.get(function(req,res,next){
  res.end("Getting all the dishes for you");
})
.post(function(req,res,next){
  res.end("Posting the dish:" + req.body.name + " with description: " + req.body.description);
})
.delete(function(req,res,next){
  res.end("Deleting all the dishes");
});

dishrouter.route('/:dishid')
.all(function(req,res,next){
  res.writeHead(200,{"content-type":'text/plain'});
  next();
})
.get(function(req,res,next){
  res.end("Getting the dish with id: " + req.params.dishid);
})
.post(function(req,res,next){
  res.end("Posting to the dish with id: " + req.params.dishid);
})
.delete(function(req,res,next){
  res.end("Deleting from the dish with id: " + req.params.dishid);
});

module.exports = dishrouter;
