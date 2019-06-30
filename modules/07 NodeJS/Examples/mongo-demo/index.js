const express = require('express');
const mongo = require('mongodb');

const app = express();

const port = 5000;
const dbUrl = 'mongodb://127.0.0.1:27017';

app.use(express.json());

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

    app.post('/recipe', (request, response) => {
        const { name, ingredients, price } = request.body;
        if (!name || !ingredients || !price) responseWithStatus(500, response, "Missing Data");
        try {
            collection.insertOne({name, ingredients, price});
            // response.sendStatus(200);
            // response.status(200).send({
            //     message: "Added successfully"
            // });
            responseWithStatus(200, response, "Added successfully");
        }
        catch(ex) {
            responseWithStatus(500, response, ex);
        }
    });

    app.delete('/recipe', (request, response) => {
        const { name } = request.query;
        if (!name) responseWithStatus(200, response, "Missing Data");
        try {
            collection.deleteOne( { name } );
            responseWithStatus(200, response, "Deleted successfully");
        }
        catch(ex) {
            responseWithStatus(500, response, ex);
        }
    });

    app.put('/recipe', (request, response) => {
        const { name } = request.query;
        const { newName, newIngredients, newPrice } = request.body;
        if (!name || !newName || !newIngredients || !newPrice) responseWithStatus(500, response, "Missing Data");
        try{
            collection.updateOne({name}, { $set: { name: newName, ingredients: newIngredients, price: newPrice } });
            responseWithStatus(200, response, "Updated successfully");
        }
        catch(ex) {
            responseWithStatus(500, response, ex);
        }
    })
}

function responseWithStatus(status, response, message) {
    response.status(status).send({
        message
    });
}

mongo.MongoClient.connect(dbUrl, onConnect);

app.listen(port, () => console.log("Server is running on port: " + port));