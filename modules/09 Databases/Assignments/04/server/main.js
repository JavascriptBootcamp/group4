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


    app.put('/images/like', (request, response) => {

        const {likes,src} = request.body;
        if (!likes || !src ) responseWithStatus(500, response, "Missing Data");
        console.log(id, size, color, fit, price)
        try {
            const sql = `update images set likes = ${likes} where src=${src} )`;  
            con.query(sql, function (err, result) {
                if (err) return console.error("ERROR OCCURED:", err);
                console.log("Result: " + result);
                responseWithStatus(200, response, "updated Succussfuly");
            });
        }
        catch (ex) {
            responseWithStatus(500, response, "Missing Data");
        }
    })

    app.get('/images', (req, res, next) => {
        try {
            const sql = `select * from images`;
            con.query(sql, function (err, data) {
                if (err) return console.error("ERROR OCCURED:", err);
                console.log("data: " + data);
                res.status(200).send(data);
            });
        }
        catch (ex) {
            responseWithStatus(500, response, "ERROR OCCURED:" + ex);
        }


    })


    app.get('/authors', (request, response, next) => {
        try {
            const sql = `select * from authors`;
            con.query(sql, function (err, data) {
                if (err) return console.error("ERROR OCCURED:", err);
                console.log("data: " + data);
                res.status(200).send(data);
            });
        }
        catch (ex) {
            responseWithStatus(500, response, "ERROR OCCURED:" + ex);
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