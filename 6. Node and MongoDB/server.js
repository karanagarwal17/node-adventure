const assert = require('assert');
const MongoClient = require('mongodb').MongoClient;

var dboper = require('./operations.js');

var url = "mongodb://localhost:27017/conFusions";
var collection = "dishes";

MongoClient.connect(url,function(err,db){
  assert.equal(err,null);
  console.log("Connected correcrtly to the server");

  dboper.insertDocument(db,collection,{name: "dish1", description: "test"},function(result){
    //console.log(result);

    dboper.findDocument(db,collection,function(docs){
      console.log(docs);

      dboper.updateDocument(db,collection,{name:"dish1"},{description:"updated description"},function(result){
        //console.log(result);

        dboper.findDocument(db,collection,function(docs){
          console.log(docs);

          db.collection('dishes').drop(function(){
            db.close();
          });
        });
      });
    });
  });
});
