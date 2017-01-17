var express = require('express');
var bodyparser = require('body-parser');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var dishrouter = require('./dishRouter.js');
var promorouter = require('./promoRouter.js');
var leaderrouter = require('./leaderRouter.js');

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/dishes',dishrouter.dishrouter);
app.use('/promotions',promorouter.promorouter);
app.use('/leadership',leaderrouter.leaderrouter);

app.listen(3000,function(){
  console.log("Server up and running at port 3000");
});
