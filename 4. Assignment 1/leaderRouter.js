var express = require('express');
var bodyparser = require('body-parser');
var morgan = require('morgan');
var app = express();
var leaderrouter = express.Router();

leaderrouter.use(bodyparser.json());

leaderrouter.route('/')
.all(function(req,res,next){
  res.writeHead(200,{"content-type":'text/plain'});
  next();
})
.get(function(req,res,next){
  res.end("Getting all the leaderes for you");
})
.post(function(req,res,next){
  res.end("Posting the leader:" + req.body.name + " with description: " + req.body.description);
})
.delete(function(req,res,next){
  res.end("Deleting all the leaderes");
});

leaderrouter.route('/:leaderid')
.all(function(req,res,next){
  res.writeHead(200,{"content-type":'text/plain'});
  next();
})
.get(function(req,res,next){
  res.end("Getting the leader with id: " + req.params.leaderid);
})
.post(function(req,res,next){
  res.end("Posting to the leader with id: " + req.params.leaderid);
})
.delete(function(req,res,next){
  res.end("Deleting from the leader with id: " + req.params.leaderid);
});

module.exports.leaderrouter = leaderrouter;
