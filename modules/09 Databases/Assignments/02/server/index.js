const express = require('express');
const mongo = require('mongodb');
const cors = require('cors');

const app = express();

const port = 5000;
const dbUrl = 'mongodb://127.0.0.1:27017';

app.use(express.json());
app.use(cors());

const onConnect = (err, databases) => {
    if (err) return console.error("ERROR OCCURED:", err);

    const dbName = 'carsDB';
    const db = databases.db(dbName);
    const collectionName = 'cars';
    const collection = db.collection(collectionName);

    //show all the cars in DB - "/cars"
    app.get('/cars', (request, response, next) => {
        collection.find().toArray((err, data) => {
            if (err) return console.error("ERROR OCCURED:", err);
            // console.log("data", data);
            if(request.query.length > 0) {
                next();
            }
            else {
                response.send(data);
            }
        })
    });

    //display cars details by year range - "/cars?startYear=2016&endYear=2017"
    app.get('/cars', (request, response) => {
        const { startYear, endYear } = request.query;
        let check_data = isNaN(startYear) || isNaN(endYear) || (Number(startYear) > Number(endYear))
        if (check_data) responseWithStatus(500, response, "Invalid Data");
        collection.find({ "Year": {$gte:Number(startYear), $lte:Number(endYear)}}).toArray((err, cars) => {
            if (err) return console.error("ERROR OCCURED:", err);
            // console.log("car -", cars);
            response.status(200).send(cars);
        })
    });

    //display car details by license number - "/car?license=1234567"
    app.get('/car', (request, response) => {
        const { license } = request.query;
        collection.find({ "License Number": Number(license) }).toArray((err, car) => {
            if (err) return console.error("ERROR OCCURED:", err);
            // console.log("car -", car[0]);
            response.status(200).send(car[0]);
        })
    });

    app.post('/recipe', (request, response) => {
        const { name, ingredients, price } = request.body;
        if (!name || !ingredients || !price) responseWithStatus(500, response, "Missing Data");
        try {
            collection.insertOne({ name, ingredients, price });
            // response.sendStatus(200);
            // response.status(200).send({
            //     message: "Added successfully"
            // });
            responseWithStatus(200, response, "Added successfully");
        }
        catch (ex) {
            responseWithStatus(500, response, ex);
        }
    });

    app.delete('/recipe', (request, response) => {
        const { name } = request.query;
        if (!name) responseWithStatus(200, response, "Missing Data");
        try {
            collection.deleteOne({ name });
            responseWithStatus(200, response, "Deleted successfully");
        }
        catch (ex) {
            responseWithStatus(500, response, ex);
        }
    });

    app.put('/recipe', (request, response) => {
        const { name } = request.query;
        const { newName, newIngredients, newPrice } = request.body;
        if (!name || !newName || !newIngredients || !newPrice) responseWithStatus(500, response, "Missing Data");
        try {
            collection.updateOne({ name }, { $set: { name: newName, ingredients: newIngredients, price: newPrice } });
            responseWithStatus(200, response, "Updated successfully");
        }
        catch (ex) {
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