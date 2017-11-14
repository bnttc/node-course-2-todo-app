// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/node', (err, db) => {
    if(err) {
        return console.log('Cannot connect to mongodb: ', err);
    }
    console.log('Connected to mongodb');

    // // db.collection('todo').find({completed: false}).toArray().then((docs) => {
    // db.collection('todo').find({
    //     _id: new ObjectID('5a0888a1961a39367a6eab04')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 4));
    // }, (err) => {
    //     console.log('Unable to fetch docs: ', err);
    // });


    // db.collection('todo').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos: ', err);
    // });

    db.collection('users').find({name: 'bob'}).count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch users: ', err);
    });

    db.close();
    console.log('Closed connection!');
});
