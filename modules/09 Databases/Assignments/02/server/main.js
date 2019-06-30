const express = require('express');
const mongo = require('mongodb');

const app = express();

const port = 5000;
const dbUrl = 'mongodb://127.0.0.1:27017';

app.use(express.json());


const onConnect = (err, databases) => {
    if (err) return console.error("ERROR OCCURED:", err);

    const dbName = 'data';
    const db = databases.db(dbName);
    const collectionName = 'cars';
    const collection = db.collection(collectionName);

    app.get('/car/:license',(req,res)=>{

         const {license} = req.params;
         console.log(license)
         collection.find({license}).toArray( (err, data) => {
            if (err) return console.error("ERROR OCCURED:", err);
    
            console.log("data", data);
            res.send(data);
        } )

    })


    app.get('/cars/:fromYear/:untilYear',(request,response)=>{

       const {fromYear,untilYear} = request.params;
       console.log(request.params)
       collection.find({Year:{$gte:+fromYear,$lte:+untilYear}}).toArray( (err, data) => {
        if (err) return console.error("ERROR OCCURED:", err);

        console.log("data", data);
        response.send(data);
    } )
    })


    app.get('/models/:manufacturer',(request,response)=>{
        
               const {manufacturer} = request.params;
               console.log(request.params)
               collection.find({manufacturer}).toArray( (err, data) => {
                if (err) return console.error("ERROR OCCURED:", err);
        
                console.log("data", data);
                response.send(data);
            } )
            })

    function responseWithStatus(status, response, message) {
        response.status(status).send({
            message
        });
    }

}




mongo.MongoClient.connect(dbUrl, onConnect);

app.listen(port, () => console.log("Server is running on port: " + port));