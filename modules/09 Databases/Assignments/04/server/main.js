const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(express.json());
app.use(cors());

const port = 5000;
const database = 'pictures';
const table = 'likes';

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database
});

con.connect((err)=>{
    if(err)
        throw err;
    console.log("Connected!");

    app.get('/likes',(req,res,next)=>{
        const counterID = req.query.counterID;
        if(!counterID){
            next();
            return;
        }
        const query = `select counter from ${table} where id = ${counterID}`;
        con.query(query,(err,result)=>{
            if(err)
                res.status(500).send(err);
            res.status(200).send(result);
        });
    });

    app.put('/like',(req,res)=>{
        const counterID = req.query.counterID;
        const { likeCounter }  = req.body;
        if(!counterID || !likeCounter){
            return;
        }
        const query = `update ${table} set counter = ${likeCounter} where id = ${counterID}`;
        con.query(query,(err,result)=>{
            if(err)
                res.status(500).send(err);
            res.status(200).send(result);
        });
    });

    app.post('/like',(req,res)=>{
        const { counterID, likeCounter}  = req.body;
        if(!counterID || !likeCounter){
            return;
        }
        const query = `insert into ${table} values(${counterID},${likeCounter})`;
        con.query(query,(err,result)=>{
            if(err)
                res.status(500).send(err);
            res.status(200).send(result);
        });
    });
});

app.listen(port,()=>console.log(`Server is running in port ${port}`));



