const express = require('express');

const router = express.Router();

const quizFunc = require('../models/quiz_Func');
const data = require('../models/data');
const mongo = require('mongodb');

const dbUrl = 'mongodb://127.0.0.1:27017';

const onConnect = (err, databases) => {
    if (err) return console.error("ERROR OCCURED:", err);

    const dbName = 'quiz_db';
    const db = databases.db(dbName);
    const collectionName = 'questions';
    const collection = db.collection(collectionName);


router.get('/quiz',(req,res)=>{

try{
    collection.find().toArray((err, data) => {
        if (err) return console.error("ERROR OCCURED:", err);

        console.log("data", data);
        res.status(200).json(data);
    })   
}
catch(ex){
    res.status(500);
}

})

router.post('/',(req,res)=>{
    const {Title,answers,correctAnswerIndex,userAnswerIndex} = req.body;
    if (!Title || !answers || !correctAnswerIndex || !userAnswerIndex )responseWithStatus(200, res, "Missing Data");
    const identifier = Math.floor(Math.random()*100000000);
    try{
        collection.insertOne({Title,answers,correctAnswerIndex,userAnswerIndex,identifier});
        responseWithStatus(200, res, "Added Succussfuly");
        }
        catch(ex){
            responseWithStatus(500, res, "Missing Data");
        }

})

router.put('/:identifier',(req,res)=>{

        const {identifier} = req.params;  
        const {Title,answers,correctAnswerIndex,userAnswerIndex} = req.body;
        if (!Title || !answers || !correctAnswerIndex || !userAnswerIndex )responseWithStatus(200, res, "Missing Data");
        try{
            collection.updateOne({identifier:+identifier},{$set:{Title,answers,correctAnswerIndex,userAnswerIndex}})
            responseWithStatus(200, res, "updated Succussfuly");
        }
        catch(ex){
            responseWithStatus(500, res, "Missing Data");
        }

})


router.delete('/:identifier',(req,res)=>{
    const {identifier} = req.params; 
     console.log(identifier);
    if (!identifier)responseWithStatus(200, res, "Missing Data");
    try{ 
        collection.deleteOne({identifier:+identifier});
        responseWithStatus(200, res, "deleted Succussfuly");
        }
        catch(ex){
            responseWithStatus(500, res, "Missing Data");
        }

})


function responseWithStatus(status, response, message) {
    response.status(status).send({
        message
    });
}


}



mongo.MongoClient.connect(dbUrl, onConnect);



module.exports = router;