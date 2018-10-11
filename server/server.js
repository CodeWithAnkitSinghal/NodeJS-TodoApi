const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        require: true,
        minlenght: 5,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

var newTodo = new Todo({
    text: 'Cook dinner at 2',
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

var User = mongoose.model('User', {
    email: {
        type: String,
        require: true,
        minlenght: 5,
        trim: true
    }
});

var newUser = new User({
    email: 'aaa@aaa.com'
});

newUser.save()
.then((docs) => {
    console.log(`User saved`);
    console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
    console.log(`unable to save`, err);
})
