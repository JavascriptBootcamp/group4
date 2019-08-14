const express = require('express');

const router = express.Router();

const quizFunc = require('../models/quiz_Func');
const data = require('../models/data');


router.get('/quiz',(req,res)=>{

try{
res.status(200).json(data.quiz);
}
catch(ex){
    res.status(500);
}

})

router.post('/',(req,res)=>{

    try{
        const newQuestion = req.body;
        data.quiz.push(newQuestion);
        res.status(200).json(data.quiz);
        }
        catch(ex){
            res.status(500);
        }

})

router.put('/:id',(req,res)=>{

    try{
        const {id} = req.params;  
        const newQuestion = req.body;
        const index = quizFunc.getIndex(data.quiz,+id);
        data.quiz[index] = newQuestion;
        res.status(200).json(data.quiz);
        }
        catch(ex){
            res.status(500);
        }

})


router.delete('/:id',(req,res)=>{

    try{
        const {id} = req.params;  
        const index = quizFunc.getIndex(data.quiz,+id);
        data.quiz.splice(index,1);
        res.status(200).json(data.quiz);
        }
        catch(ex){
            res.status(500);
        }

})







module.exports = router;