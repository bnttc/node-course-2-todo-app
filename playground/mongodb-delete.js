// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/node', (err, db) => {
    if(err) {
        return console.log('Cannot connect to mongodb: ', err);
    }
    console.log('Connected to mongodb');

    // db.collection('todo').deleteMany({text: 'eat lunch'}).then((result) => {
    //   console.log(result);
    // });

    // db.collection('todo').deleteOne({text: 'eat lunch'}).then((result) => {
    //   console.log(result);
    // });

    // db.collection('todo').findOneAndDelete({completed: false}).then((result) => {
    //   console.log(result);
    // });

    db.collection('users').deleteMany({name: 'Andrew'}).then((result) => {
      console.log(result);
    });

    db.collection('users').findOneAndDelete({_id: ObjectID('5a0b4497532933b688520613')}).then((result) => {
      console.log(result);
    });

    db.close();
    console.log('Closed connection!');
});
