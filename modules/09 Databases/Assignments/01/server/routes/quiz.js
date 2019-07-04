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
    if (!Title || !answers || !correctAnswerIndex || !userAnswerIndex )responseWithStatus(200, response, "Missing Data");
    try{
        collection.insertOne({Title,answers,correctAnswerIndex,userAnswerIndex});
        responseWithStatus(200, response, "Added Succussfuly");
        }
        catch(ex){
            responseWithStatus(500, response, "Missing Data");
        }

})

router.put('/:id',(req,res)=>{

  
        const {id} = req.params;  
        const {Title,answers,correctAnswerIndex,userAnswerIndex} = req.body;
        if (!Title || !answers || !correctAnswerIndex || !userAnswerIndex )responseWithStatus(200, response, "Missing Data");
        try{
            collection.updateOne({_id:id},{$set:{Title,answers,correctAnswerIndex,userAnswerIndex}})
            responseWithStatus(200, response, "updated Succussfuly");
        }
        catch(ex){
            responseWithStatus(500, response, "Missing Data");
        }

})


router.delete('/:id',(req,res)=>{
    const {id} = req.params; 
    if (!id)responseWithStatus(200, response, "Missing Data");
    try{ 
        collection.deleteOne({id});
        responseWithStatus(200, response, "deleted Succussfuly");
        }
        catch(ex){
            responseWithStatus(500, response, "Missing Data");
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