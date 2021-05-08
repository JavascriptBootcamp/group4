const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(express.json());
app.use(cors());

const port = 5000;
const database = 'shirt_sch';
const table = "shirts";

const mysqlconnecion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    port:'3306',
    database:'shirt_sch'
});

mysqlconnecion.connect(function (err) {
    if (err) 
        throw err;

    app.get('/shirt',(req,res,next)=>{
        // const id = req.query.id;
        // console.log("243");
        // if(!id){
        //     next();
        //     return;
        // }
        //const query = `select * from ${table} where id = ${id};`;
        const query = `select * from ${table} `;
        mysqlconnecion.query(query,(err,result)=>{
            console.log(result)
            if(err)
                res.status(500).send(err);
            res.status(200).send(result);
        });
    });

    app.get('/shirts',(req,res,next)=>{
        const priceFrom = req.query.priceFrom;
        const priceTo = req.query.priceTo;

        if(!priceFrom && !priceTo){
            next();
            return;
        }
        const query = `select * from ${table} where price >= ${priceFrom} and price <= ${priceTo};`;
        mysqlconnecion.query(query,(err,result)=>{
            if(err)
                res.status(500).send(err);
            res.status(200).send(result);
        });
    });

    app.get('/shirts',(req,res,next)=>{
        const size = req.query.size;

        if(!size){
            next();
            return;
        }
        const query = `select color from ${table} where size = '${size}';`;
        mysqlconnecion.query(query,(err,result)=>{
            if(err)
                res.status(500).send(err);
            res.status(200).send(result);
        });
    });

    app.get('/shirts',(req,res,next)=>{
        const fit = req.query.fit;

        if(!fit){
            next();
            return;
        }
        const query = `select size,color from ${table} where fit = '${fit}';`;
        mysqlconnecion.query(query,(err,result)=>{
            if(err)
                res.status(500).send(err);
            console.log(result);
            res.status(200).send(result);
        });
    });

    app.get('/shirt',(req,res,next)=>{
        const id1 = req.query.id1;
        const id2 = req.query.id2;

        if(!id1 && !id2){
            next();
            return;
        }
        const query = `select id from ${table} where id in(${id1},${id2}) order by price asc limit 1;`;
        mysqlconnecion.query(query,(err,result)=>{
            if(err)
                res.status(500).send(err);
            res.status(200).send(result);
        });
    });

    app.get('/shirts',(req,res)=>{
        const query = `select * from ${table};`;
        mysqlconnecion.query(query,(err,result)=>{
            if(err)
                res.status(500).send(err);
            res.status(200).send(result);
        });
    });

    app.post('/shirt',(req,res)=>{
        const { size, color, fit, price} = req.body; 
        const query = `INSERT INTO ${table} (size,color,fit,price) VALUES('${size}','${color}','${fit}',${price});`;
        mysqlconnecion.query(query,(err,result)=>{
            if(err)
                res.status(500).send(err);
            res.status(200).send('Shirt added successfully!');
        });

    });
});

app.listen(port, () => console.log(`Server is running on port ${port}`)); 