var mongoose = require('mongoose');
const assert = require('assert');
var leader = require('./models/leadership.js');

var url = "mongodb://localhost/27017/conFusionss";

mongoose.Promise = global.Promise;

mongoose.connect(url);
var db = mongoose.connection;

db.on('error',console.error.bind(console,'Connection Error:'));
db.once('open',function(err,result){
  if (err) throw err;

  leader.create({
    "name": "Peter Pan",
      "image": "images/alberto.png",
      "designation": "Chief Epicurious Officer",
      "abbr": "CEO",
      "description": "Our CEO, Peter, . . ."
  },function(err,lead){
    if (err) throw err;
    console.log(lead);

    leader.findByIdAndUpdate(lead._id,{$set: {image: "images/alberto.jpeg"}},{new: true}).exec(function(err,lead){
      if (err) throw err;
      console.log(lead);

      db.collection('leader').drop(function(){
        db.close();
      });
    });
  });
});
