const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//write your id from mongodb from tod collection
var id = '5bbf6bd8aa033f1ce00ead21';

//validates ID before running the query
if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

 Todo.find({
   _id: id
 }).then((todos) => {
   console.log('Todos', todos);
 });

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('Id not found');
  }
  console.log('Todo By Id', todo);
}).catch((e) => console.log(e));

User.findById('57bdb0fcdedf88540bfa2d66').then((user) => {
  if (!user) {
    return console.log('Unable to find user');
  }

  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});
