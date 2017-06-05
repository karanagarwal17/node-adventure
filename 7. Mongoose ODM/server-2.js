var mongoose = require('mongoose'),
    assert = require('assert');

var Dishes = require('./models/dishes-1');

mongoose.Promise = global.Promise;

// Connection URL
var url = 'mongodb://localhost:27017/conFusion';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Connected correctly to server");
    Dishes.create({
      name: "Uthapizza",
      description: 'test'
    },function(err,dish){
      if(err) throw err;
      console.log('Dish Created');
      console.log(dish);

      var id = dish._id;

      setTimeout(function(){
        Dishes.findByIdAndUpdate(id,{$set: {description: 'Updated dish'}},{new:true}).exec(function(err,dish){
          if (err) throw err;
          console.log('Updated dish');
          console.log(dish);

          db.collection('dishes').drop(function(){
            db.close();
          });
        });
      },3000);
    });
 });
