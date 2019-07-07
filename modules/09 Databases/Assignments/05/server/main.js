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


  

    app.get('/album/Pictures', (req, res, next) => {
        console.log("id:", req.query)
        const { id } = req.query;
        if (!id) responseWithStatus(500, response, "Missing Data");
        try {
            const sql = `select * from Pictures where albumId=${id}`;
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


    app.get('/albums', (request, response, next) => {
        try {
            const sql = `select * from Albums`;
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