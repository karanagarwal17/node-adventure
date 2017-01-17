var http = require('http');
var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyparser = require('body-parser');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));
app.use(bodyparser.json());

app.all('/dishes',function(req,res,next){
  res.writeHead(200,{'content-type':'text/plain'});
  next();
});


app.get('/dishes',function(req,res,next){
  res.end('Will send the data of dish: ' + req.body.name + " with discription: " + req.body.description + " to you!");
});

app.delete('/dishes',function(req,res,next){
  res.end('deleting all the dishes');
});

app.post('/dishes',function(req,res,next){
  res.end('Will send the data of dish: ' + req.body.name + " with discription: " + req.body.description + " to you!");
});

app.get('/dishes/:dishId',function(req,res,next){
  res.end('Will send the data of dish: ' + req.params.dishId + 'to you!');
});

app.put('/dishes/:dishId',function(req,res,next){
  res.end('Will update the data of dish: ' + req.params.dishId + 'to you!');
});

app.delete('/dishes/:dishId',function(req,res,next){
  res.end('Will delete the data of dish: ' + req.params.dishId + 'to you!');
});

app.listen(3000,function(){
  console.log('server running at port 3000');
});
