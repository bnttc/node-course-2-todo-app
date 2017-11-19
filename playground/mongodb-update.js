// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/node', (err, db) => {
    if(err) {
        return console.log('Cannot connect to mongodb: ', err);
    }
    console.log('Connected to mongodb');

    db.co

    // db.collection('todo').findOneAndUpdate(
    //   {_id: new ObjectID('5a0b433c532933b6885205d7')},
    //   {$set: {completed: true}},
    //   {returnOriginal: false}
    // ).then((result) => {
    //     console.log(result);
    // });

    db.collection('users').findOneAndUpdate(
      {_id: new ObjectID('5a0b4ab1532933b6885206a8')},
      {$set: {name: 'ken'}, $inc: {age: 1}},
      {returnOriginal: false}
    ).then((result) => {
        console.log(result);
    });

    db.close();
    console.log('Closed connection!');
});
