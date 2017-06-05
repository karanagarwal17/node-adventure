var mongoose = require('mongoose');
const assert = require('assert');

var promo = require('./models/promotions.js');

mongoose.Promise = global.Promise;

var url = "mongodb://localhost:27017/conFusionss"
mongoose.connect(url);
var db = mongoose.connection;
db.on('error',console.error.bind(console,'Connection Error:'));
db.once('open',function(){
  console.log('We are connected to the server!...');

  promo.create({
    name: "promo",
    image: "images/buffet.png",
    label: "New",
    price: "19.99",
    description: "Featuring the stars.."
  },function(err,prom){

    if (err) throw err;
    console.log(prom);


    promo.findByIdAndUpdate(prom._id,{$set:{name: "promo2"}},{new: true}).exec(function(err,prom){
      if (err) throw err;
      console.log('Updated promo');
      console.log(prom);
      db.collection('promo').drop(function(){
        db.close();
      });
    });
  });
});
