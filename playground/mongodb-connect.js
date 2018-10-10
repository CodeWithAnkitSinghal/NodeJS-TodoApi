const mongoClient = require('mongodb').MongoClient;

mongoClient.connect('mongodb://localhost:27017/ToDoApp',(err, client) => {
    if(err){
        console.log('Could not connect to mongoDB');
        return ;
    } else {
        console.log('Connected to Mongo DB server');
    }
    const db = client.db('TodoApp');

    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert todo', err);
        } else {
            console.log(JSON.stringify(result.ops, undefined, 2));
        }
    });

    db.collection('Users').insertOne({
        name: 'Ankit Singhal',
        age: 26,
        location: 'gurgaon'
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert todo', err);
        } else {
            console.log(JSON.stringify(result.ops, undefined, 2));
        }
    });

    client.close();
});