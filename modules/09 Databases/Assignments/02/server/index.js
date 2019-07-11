
const express = require('express');
const mongodb = require('mongodb');
const cors = require('cors');

const app = express();

const dbUrl = 'mongodb://127.0.0.1:27017/cars';  

app.use(express.json());
app.use(cors());


const onConnect = (err, databases) => {
    if (err) return console.error("ERROR OCCURED:", err);

    const dbName = 'cars';
    const db = databases.db(dbName);

    const collectionName = 'carsData';
    const carsCollection = db.collection(collectionName);

	// Adding a car
	app.post('/addCar', (req, resp) => {
        const {licenseNum, manufacturer, model, year, km, price} =  req.body;
        const passedObj = {licenseNum , manufacturer, model, year, km, price};

        if (
            !licenseNum || 
            !manufacturer || 
            !model ||
            !year ||
            !km ||
            !price) return responseWithStatus(500, resp, "Missing Data");
        
        if( isNaN(Number(licenseNum))) {
            return responseWithStatus(500, resp, "Car License Number must contain a numerical value");
        }

        try {
            const carData = {licenseNum, manufacturer, model, year, km, price};
            carsCollection.insertOne(carData); 
            responseWithStatus(200, resp, "Car data added successfully");
        }
        catch(ex) {
            responseWithStatus(500, resp, ex);
        }
    });


    // Display car details by license number - /carDetailsByLicense?licenseNum=123456  
    app.get('/carDetailsByLicense', (req, resp) => {
        const licenseNum = req.query.licenseNum;

        if(!licenseNum) return responseWithStatus(500, resp, "Missing Data");

        if( isNaN(Number(licenseNum))) {
            return responseWithStatus(500, resp, "Car License Number must contain a numerical value");
        }

        carsCollection
        .find({ "licenseNum": {$eq: Number(licenseNum)} })
        .toArray((err, carDetails) => {
            if (err) return console.error("ERROR OCCURED:", err);
            resp.status(200).send(carDetails[0]);
        })
    });


    // Display cars details by year range ( /carsByYearsRange?fromYear=2000&toYear=2017 ) 
    app.get('/carsByYearsRange', (req, resp) => {
        const { fromYear, toYear } = req.query;

        if( isNaN(fromYear) || isNaN(toYear) ) {
            responseWithStatus(500, resp, "Both years must be a numbers!");
        }
        else if( ( Number(fromYear) > Number(toYear) ) ) {
            responseWithStatus(500, resp, " 'From Year' can't be greater than 'To Year'!");
        }
        
        carsCollection
        .find( {"year": {$gte: `${fromYear}`, $lte:`${toYear}`}} )
        .sort({year: -1})
        .toArray( (err, result) => {
            if (err) return console.error("ERROR OCCURED:", err);
            if(result.length) resp.status(200).send(result);
            else  responseWithStatus(500, resp, `No cars found in ${fromYear}-${toYear} years range`);
        })      
    });


    // Display cars models by manufacturer     /carModelsByManufactorer?manufacturer=Toyota
    app.get('/carModelsByManufactorer', (req, resp, next) => {
        const manufacturer = req.query.manufacturer;
        if(!manufacturer) next();

        let carsModels = [];

        carsCollection
        .find({ "manufacturer": {$eq: manufacturer} })
        .toArray((err, cars) => {
            if (err) return console.error("ERROR OCCURED:", err);

            if(cars.length) {
                cars.forEach( car => {
                    carsModels.push(car.model);
                });
            }
            else  responseWithStatus(500, resp, `No cars models of ${manufacturer} manufacturer`);
            

            resp.status(200).send(carsModels);
        })
    });


    // Display cars models and prices by model  /carModelsAndPricesByModel?model=Corola
    app.get('/carModelsAndPricesByModel', async (req, resp) => {
        const { model } = req.query;
        const carsModelsAndPrices = [];

        if (!model) return responseWithStatus(500, resp, "Missing model");

        try {
            const cars = await carsCollection.find({ model }).toArray();

            cars.forEach((car) => {
                if (car.model === model) {
                    carsModelsAndPrices.push({ model: car.model, price: car.price });
                }
            });

            if(!carsModelsAndPrices.length) responseWithStatus(500, resp, `No cars of ${model} model`);

            responseWithStatus(200, resp, carsModelsAndPrices);
        } 
        catch (error) {
            responseWithStatus(500, resp, "ERROR: " + error);
        }

    });


    // Receive two license numbers and display the car which is more expensive
    // /moreExpensiveCarBy2Licenses?licenseNum1=123456&licenseNum2=223456
    app.get('/moreExpensiveCarBy2Licenses', async (req, resp) => {
        const { licenseNum1, licenseNum2 } = req.query;
    
        if (!licenseNum1 || !licenseNum2) {
            return responseWithStatus(500, resp, "You must pass 2 licenses numbers!");
        }

        if(Number(licenseNum1) === Number(licenseNum2)) {
            return responseWithStatus(500, resp, "You inserted 2 identical license numbers!");
        }
           
        try {
            const car1 = await carsCollection.find({ "licenseNum": {$eq: Number(licenseNum1)} }).toArray();
            const car2 = await carsCollection.find({ "licenseNum": {$eq: Number(licenseNum2)} }).toArray();


            if(car1.length!==0 && car2.length!==0) {
                if(Number(car1[0].price) === Number(car2[0].price)) {
                    return responseWithStatus(200, resp, '2 cars has a same price');
                }
            }
            else return responseWithStatus(500, resp, "There is no car/s with that license/s!");
            
            const moreExpensiveCar = Number(car1[0].price) > Number(car2[0].price) ? car1[0] : car2[0];
            
            responseWithStatus(200, resp, moreExpensiveCar);
        } 
        catch (error) {
            responseWithStatus(500, resp, "ERROR: " + error);
        }

    });	
}


function responseWithStatus(status, response, message) {
    response.status(status).send({
        message
    });
}


const MongoClient = mongodb.MongoClient;

// dbUrl - url to connect, onConnect - callback function
MongoClient.connect(dbUrl, onConnect);  


const port = 5000;
app.listen(port, () => console.log("Server is running on port: " + port));
