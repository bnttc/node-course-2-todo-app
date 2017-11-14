// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Cannot connect to mongodb: ', err);
    }
    console.log('Connected to mongodb');

    // db.collection('Todos').insertOne({
    //     text: 'something to insert',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert: ', err);
    //     }
    //
    //     console.log('SUCCESS: ', JSON.stringify(result.ops), undefined, 4);
    // });


    // db.collection('Users').insertOne({
    //     name: 'ken',
    //     age: 38,
    //     location: 'livingroom'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert:', err);
    //     }
    //     // console.log('SUCCESS: ', JSON.stringify(result.ops), undefined, 4);
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
    console.log('Closed connection!');
});