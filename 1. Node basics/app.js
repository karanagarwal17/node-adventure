var http = require('http');
var fs = require('fs');
var router = require('./routes/routes.js');

http.createServer(function(request,response){
  response.writeHead(200);
  router.routee(request,response);
}).listen(8000);
console.log("Server is now running at port 8000....");
