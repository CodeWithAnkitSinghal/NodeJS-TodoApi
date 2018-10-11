const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

var newTodo = new Todo({
    text: 'Cook dinner',
    completed: 'false'
});

newTodo.save()
.then(() => {
    console.log('save todo item');
}, (e) => {
    console.log('Unable to save todo');
});

// var otherTodo = new Todo({
//     text: 'Cook dinner',
//     completed: 'false'
// });

// otherTodo.save()
// .then(() => {
//     console.log('save todo item');
// }, (e) => {
//     console.log('Unable to save todo');
// });
