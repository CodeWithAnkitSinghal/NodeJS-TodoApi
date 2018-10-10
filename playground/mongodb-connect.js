const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err, client) => {
    if(err){
        console.log('Could not connect to mongoDB');
        return ;
    } else {
        console.log('Connected to Mongo DB server');
    }
    const db = client.db('TodoApp');

//insert data

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     } else {
    //         console.log(JSON.stringify(result.ops, undefined, 2));
    //     }
    // });

    // db.collection('Users').insertOne({
    //     name: 'Ankit Singhal',
    //     age: 26,
    //     location: 'gurgaon'
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     } else {
    //         console.log(JSON.stringify(result.ops, undefined, 2));
    //     }
    // });

//fetch data

    // db.collection('Todos').find({_id: new ObjectID('5bbdeb7acf612c2944fd4692')}).toArray()
    // .then((docs) => {
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch data', err);
    // })
    
    //fetch count of documents in a collection
    db.collection('Todos')
    .find()
    .count()
    .then((count) => {
        console.log(`Todos Count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch data', err);
    })

//closing the mongoClient connection

    //client.close();
});