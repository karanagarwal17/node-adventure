var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var leaderSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  abbr: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: true
  }
});

var leader = mongoose.model('leader',leaderSchema);

module.exports = leader;
