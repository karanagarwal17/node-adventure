var assert = require('assert');
var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/conFusion';

MongoClient.connect(url,function(err,db){
  assert.equal(err,null);
  console.log("connected correctly to the server");

  var collection = db.collection("dishes");
  collection.insertOne({name:"dish1",description: "some description here"},function(err,result){
    assert.equal(err,null);
    console.log("The result is:");
    console.log(result.ops);

  collection.find({}).toArray(function(err,docs){
    assert.equal(err,null);
    console.log("Found");
    console.log(docs);

  db.dropCollection("dishes",function(err,output){
    assert.equal(err,null);
    db.close;
  });
  });
  });
});
