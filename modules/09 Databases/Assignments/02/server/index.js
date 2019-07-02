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
        //check if this is the right get requset
        if(request.query.length > 0) {
            next();
        }

        //get all cars in the carsdb
        collection.find().toArray((err, data) => {
            if (err) return console.error("ERROR OCCURED:", err);
            response.send(data);
        })

    });

    //display cars details by year range - "/cars?startYear=2016&endYear=2017"
    app.get('/cars', (request, response, next) => {

        const { startYear, endYear } = request.query;
        //check if this is the right get requset
        if(!startYear || !endYear) {
            next();
        }

        let check_data = isNaN(startYear) || isNaN(endYear) || (Number(startYear) > Number(endYear));
        if (check_data) responseWithStatus(500, response, "Invalid Data");

        collection.find({ "Year": {$gte:Number(startYear), $lte:Number(endYear)}}).toArray((err, cars) => {
            if (err) return console.error("ERROR OCCURED:", err);
            response.status(200).send(cars);
        })

    });

    //get cars details by manufacturer - "/cars?manufacturer=mazda"
    app.get('/cars', (request, response, next) => {

        const { manufacturer } = request.query;
        //check if this is the right get requset
        if(!manufacturer) {
            next();
        }
    
        if (manufacturer === "") responseWithStatus(500, response, "Invalid Data");
        
        collection.find({ "Manufacturer": manufacturer }).toArray((err, cars) => {
            if (err) return console.error("ERROR OCCURED:", err);
            response.status(200).send(cars);
        })
        
    });

    //get cars details by model - "/cars?model=mazda3"
    app.get('/cars', (request, response, next) => {

        const { model } = request.query;
        //check if this is the right get requset
        if(!model) {
            next();
        }
        
        if (model === "") responseWithStatus(500, response, "Invalid Data");
            
        collection.find({ "Model": model }).toArray((err, cars) => {
            if (err) return console.error("ERROR OCCURED:", err);
            response.status(200).send(cars);
        })
            
    });

    //get car details by license number - "/car?license=1234567"
    app.get('/car', (request, response, next) => {

        const { license } = request.query;
        //check if this is the right get requset
        if(!license) {
            next();
        }

        let check_data = isNaN(license) || license.length !== 7;
        if (check_data) responseWithStatus(500, response, "Invalid Data");

        collection.find({ "License Number": Number(license) }).toArray((err, car) => {
            if (err) return console.error("ERROR OCCURED:", err);
            response.status(200).send(car[0]);
        })

    });

    //receive two license numbers and return the car which is more expensive - /car?license1=1234567&license2=1234567"
    app.get('/car', (request, response, next) => {

        const { license1, license2 } = request.query;
        //check if this is the right get requset
        if(!license1&&!license2) {
            next();
        }

        let check_data = !license1 || !license2;
        if (check_data) responseWithStatus(500, response, "Missing data");
    
        let check_data = isNaN(license1) || license1.length !== 7 || isNaN(license2) || license2.length !== 7;
        if (check_data) responseWithStatus(500, response, "Invalid Data");

        // return the car which is more expensive
        collection.find({ $or: 
            [ 
                { "License Number": Number(license1) }, 
                { "License Number": Number(license2) } 
            ] 
        })
        .toArray((err, cars) => {
            if (err) return console.error("ERROR OCCURED:", err);
            if(cars.length === 0) {
                responseWithStatus(500, response, "Faild to find the cars in the db");
            }
            else if(cars.length === 1) {
                response.status(200).send(cars[0]);
            }
            else {
                let car1 = cars[0];
                let car2 = cars[1];
                let result = car1["Price"] > car2["Price"] ?  car1 :  car2;
                response.status(200).send(car[0]);
            }
        });
    
    });
    

    //adding a car
    app.post('/car', (request, response) => {
        const { license, manufacturer, model, year, km, price } = request.body;

        let check_data = !license || !manufacturer || !model || !year || !km || !price;
        if (check_data) responseWithStatus(500, response, "Missing Data");

        check_data = isNaN(license) || license.length !== 7 || isNaN(year) || isNaN(km) || isNaN(price);
        if (check_data) responseWithStatus(500, response, "Invalid Data");

        let newCar = { "License Number" : Number(license), "Manufacturer" : manufacturer, "Model" : model, "Year" : Number(year), "KM" : Number(km), "Price" : Number(price) };
        collection.insertOne(newCar, function(err, res) {
            if (err) return console.error("ERROR OCCURED:", err);
            response.status(200).send(newCar);
        });
    });

    //delete a car by license number - "/car?license=1234567"
    app.delete('/car', (request, response) => {

        const { license } = request.query;
    
        let check_data = isNaN(license) || license.length !== 7;
        if (check_data) responseWithStatus(500, response, "Invalid Data");
        else if (!license) responseWithStatus(500, response, "Missing Data");

        try {
            collection.deleteOne({ "License Number" : Number(license) });
            responseWithStatus(200, response, "Deleted successfully");
        }
        catch (ex) {
            responseWithStatus(500, response, ex);
        }
    });

    //update a car by license number - "/car?license=1234567" body...
    app.put('/car', (request, response) => {
        const { license } = request.query;
        const { newManufacturer, newmModel, newYear, newKm, newPrice } = request.body;

        let check_data = !license || !newManufacturer || !newModel || !newYear || !newKm || !newPrice;
        if (check_data) responseWithStatus(500, response, "Missing Data");

        check_data = isNaN(license) || license.length !== 7 || isNaN(newYear) || isNaN(newKm) || isNaN(newPrice);
        if (check_data) responseWithStatus(500, response, "Invalid Data");

        try {
            collection.updateOne({ "License Number" : Number(license) }, { $set: {  "Manufacturer" : newManufacturer, "Model" : newModel, "Year" : Number(newYear), "KM" : Number(newKm), "Price" : Number(newPrice) } });
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