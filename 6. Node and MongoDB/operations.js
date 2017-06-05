var assert = require('assert');

exports.insertDocument = function(db,collection,data,callback){
  var collections = db.collection(collection);

  collections.insertOne(data,function(err,result){
    assert.equal(err,null);
    console.log("The result of insert is: " + result);
    callback(result);
  });
}

exports.deleteDocument = function(db,collection,data,callback){
  var collections = db.collection(collection);

  collections.deleteOne(data,function(err,result){
    assert.equal(err,null);
    console.log("Removed the docment: " + data);
    callback(result);
  });
}

exports.updateDocument = function(db,collection,field,data,callback){
  var collections = db.collection(collection);

  collections.updateOne(field,{$set : data},function(err,result){
    assert.equal(err,null);
    console.log("Updated the document: " + data);
    callback(result);
  });
}

exports.findDocument = function(db,collection,callback){
  var collections = db.collection(collection);

  collections.find({}).toArray(function(err,docs){
    assert.equal(err,null);
    callback(docs);
  });
}
