var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/node', {useMongoClient: true});

// var Todo = mongoose.model('Todo', {
//   text: {type: String, required: true, minlength: 1, trim: true},
//   completed: { type: Boolean, default: false},
//   completedAt: { type: Number, default: null}
// });

// var newTodo = new Todo({text: 'cook dinner', completed: false});

// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save')
// });


// var newTodo2 = new Todo({text: 'complete challenge', completed: true, completedAt: 1234});
//
// newTodo2.save().then((doc) => {
//   console.log('Saved todo', newTodo2);
// }, (e) => {
//   console.console.log(e);
// });

var User = mongoose.model('User', {
  email: {type: String, minlength: 1, required: true, trim: true}
});

var newUser = new User({email: 'kcm1@hw.ac.uk'});

newUser.save().then((doc) => {
  console.log('success, added: ', JSON.stringify(doc, undefined, 4));
}, (e) => {
  console.log('ERROR: ', e);
});
