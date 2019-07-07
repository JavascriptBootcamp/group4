const express = require('express');
const mysql = require('mysql');
const cors = require('cors')
const app = express();

const port = 5000;

app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword",
    database: 'mydb'
});


const onConnect = (err) => {

    if (err) return console.error("ERROR OCCURED:", err);
    console.log("Connected!");


    app.post('/shirt', (request, response) => {

        const { id, size, color, fit, price } = request.body;
        if (!id || !size || !color || !fit || !price) responseWithStatus(500, response, "Missing Data");
        console.log(id, size, color, fit, price)
        try {
            const sql = `insert into shirts(id, size, color, fit, price) values(${id}, ${size},${color},${fit},${price})`;  
            con.query(sql, function (err, result) {
                if (err) return console.error("ERROR OCCURED:", err);
                console.log("Result: " + result);
                responseWithStatus(200, response, "Added Succussfuly");
            });
        }
        catch (ex) {
            responseWithStatus(500, response, "Missing Data");
        }
    })

    app.get('/shirt', (req, res, next) => {
        console.log("id:", req.query)
        const { id } = req.query;
        if (!id) responseWithStatus(500, response, "Missing Data");
        try {
            const sql = `select * from shirts where id=${id}`;
            con.query(sql, function (err, data) {
                if (err) return console.error("ERROR OCCURED:", err);
                console.log("data: " + data);
                res.status(200).send(data);
            });
        }
        catch (ex) {
            responseWithStatus(500, response, "Missing Data");
        }


    })


    app.get('/shirts', (request, response, next) => {
        const { minPrice, maxPrice } = request.query;
        console.log("prices", request.query)
        if (!minPrice || !maxPrice) responseWithStatus(500, response, "Missing Data");
        try {
            const sql = `select * from shirts where price between ${minPrice} and ${maxPrice}`;
            con.query(sql, function (err, data) {
                if (err) return console.error("ERROR OCCURED:", err);
                console.log("data: " + data);
                res.status(200).send(data);
            });
        }
        catch (ex) {
            responseWithStatus(500, response, "Missing Data");
        }

    })


    app.get('/shirts/colors', (request, response, next) => {
        const { size } = request.query;
        if (!size) responseWithStatus(500, response, "Missing Data");
        try {
            const sql = `select color from shirts where size=${size}`;
            con.query(sql, function (err, data) {
                if (err) return console.error("ERROR OCCURED:", err);
                console.log("data: " + data);
                res.status(200).send(data);
            });
        }
        catch (ex) {
            responseWithStatus(500, response, "Missing Data");
        }

    })


    app.get('/shirts/sizes/colors', (request, response, next) => {
        const { fit } = request.query;
        //console.log("Model", Model)
        if (!fit) responseWithStatus(500, response, "Missing Data");
        try {
            const sql = `select size,color from shirts where fit=${fit}`;
            con.query(sql, function (err, data) {
                if (err) return console.error("ERROR OCCURED:", err);
                console.log("data: " + data);
                res.status(200).send(data);
            });
        }
        catch (ex) {
            responseWithStatus(500, response, "Missing Data");
        }

    })

    app.get('/shirt/:firstId/:secondId', (request, response) => {
        const { firstId, secondId } = request.params;
        console.log("ids", request.params)
        if (!firstId || !secondId) responseWithStatus(500, response, "Missing Data");
        try {
            const sql = `select from shirts where id=${firstId} or id=${secondId} order by price desc LIMIT 1`;
            con.query(sql, function (err, data) {
                if (err) return console.error("ERROR OCCURED:", err);
                console.log("data: " + data);
                res.status(200).send(data);
            });
        }
        catch (ex) {
            responseWithStatus(500, response, "Missing Data");
        }

    })

    function responseWithStatus(status, response, message) {
        response.status(status).send({
            message
        });
    }

}




connection.connect(onConnect);

app.listen(port, () => console.log("Server is running on port: " + port));


