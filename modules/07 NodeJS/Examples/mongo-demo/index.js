const express = require('express');
const mongo = require('mongodb');

const app = express();

const port = 5000;

const dbUrl = 'mongodb://127.0.0.1:27017';

const onConnect = (err, databases) => {
    if (err) return console.error("ERROR OCCURED:", err);

    const dbName = 'restaurant';
    const db = databases.db(dbName);
    const collectionName = 'recipes';
    const collection = db.collection(collectionName);

    app.get('/recipes', (request, response) => {
        collection.find().toArray( (err, data) => {
            if (err) return console.error("ERROR OCCURED:", err);
    
            console.log("data", data);
            response.send(data);
        } )
    });
}

mongo.MongoClient.connect(dbUrl, onConnect);

app.listen(port, () => console.log("Server is running on port: " + port));