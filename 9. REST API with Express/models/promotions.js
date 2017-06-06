var mongoose = require('mongoose');
var Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var promoSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  image:{
    type: String,
    required: true
  },
  label:{
    type: String,
    required: true,
    default: ''
  },
  price:{
    type: Currency,
    required: true
  },
  description:{
    type: String,
    required: true
  }
});

var promo = mongoose.model('promo',promoSchema);

module.exports = promo;
