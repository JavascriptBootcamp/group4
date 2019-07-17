const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(express.json());
app.use(cors());

const port = 5000;
const database = 'clothes';
const table = "shirt";

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database
});

con.connect(async function (err) {
    if (err) 
        throw err;
    console.log("Connected!");

    app.get('/shirt',(req,res,next)=>{
        const id = req.query.id;
        if(!id){
            next();
            return;
        }
        const query = `select * from ${table} where id = ${id};`;
        con.query(query,(err,result)=>{
            if(err)
                res.status(500).send(err);
            res.status(200).send(result);
        });
    });

    app.get('/shirts',(req,res,next)=>{
        const priceFrom = req.query.priceFrom;
        const priceTo = req.query.priceTo;

        if(!priceFrom || !priceTo){
            next();
            return;
        }
        const query = `select distinct * from ${table} where price >= ${priceFrom} and price <= ${priceTo};`;
        con.query(query,(err,result)=>{
            if(err)
                res.status(500).send(err);
            console.log(result);
            res.status(200).send(result);
        });
    });

    app.get('/shirts',(req,res,next)=>{
        const size = req.query.size;

        if(!size){
            next();
            return;
        }
        const query = `select distinct color from ${table} where size = '${size}';`;
        con.query(query,(err,result)=>{
            if(err)
                res.status(500).send(err);
            console.log(result);
            res.status(200).send(result);
        });
    });

    app.get('/shirts',(req,res,next)=>{
        const fit = req.query.fit;

        if(!fit){
            next();
            return;
        }
        const query = `select distinct size,color from ${table} where fit = '${fit}';`;
        con.query(query,(err,result)=>{
            if(err)
                res.status(500).send(err);
            console.log(result);
            res.status(200).send(result);
        });
    });

    app.get('/shirt',(req,res,next)=>{
        const id1 = req.query.id1;
        const id2 = req.query.id2;

        if(!id1 || !id2){
            next();
            return;
        }
        const query = `select id from ${table} where id in(${id1},${id2}) order by price asc limit 1;`;
        con.query(query,(err,result)=>{
            if(err)
                res.status(500).send(err);
            console.log(result);
            res.status(200).send(result);
        });
    });

    app.get('/shirts',(req,res)=>{
        const query = `select * from ${table};`;
        con.query(query,(err,result)=>{
            if(err)
                res.status(500).send(err);
            res.status(200).send(result);
        });
    });

    app.post('/shirt',(req,res)=>{
        const { size, color, fit, price} = req.body; 
        console.log({ size, color, fit, price} );
        const query = `INSERT INTO ${table} (size,color,fit,price) VALUES('${size}','${color}','${fit}',${price});`;
        console.log(query);
        con.query(query,(err,result)=>{
            if(err)
                res.status(500).send(err);
            console.log(result);
            res.status(200).send(result);
        });

    });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));