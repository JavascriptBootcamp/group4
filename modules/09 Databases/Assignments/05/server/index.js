const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors());
app.use(express.json());

const port = 5000;
const database = 'pictures';
const host = 'localhost';
const user = 'root';
const password = '123456';

const con = mysql.createConnection({
    host,
    user,
    password,
    database
});

con.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("Connected!");

    app.get('/album',(req,res)=>{
        const { albumName } = req.query;
        if(!albumName){
            return;
        }
        const query = `select p.name, p.src from Pictures p, Albums a where a.name = '${albumName}' and a.id = p.album_id`;
        con.query(query,(err,result)=>{
            if(err){
                throw err;
            }
            console.log(result);
            res.status(200).send(result);
        });
    });
});


app.listen(port,()=>console.log(`Server is running in port ${port}`));
