const express = require('express');
const mysql = require('mysql');  
const cors = require('cors');
const chalk = require('chalk');

const app = express();
app.use(express.json());
app.use(cors());


const mysqlConnection = mysql.createConnection({
    host      : 'localhost',
    user      : 'root',
    password  : '',
    database : 'images_slides'
});


mysqlConnection.connect( (err, result) => {
    if(!err) console.log('MySQL Connection succeed');
    else console.log('MySQL Connection failed \n Error: ' + JSON.stringify(err, undefined, 2));
});



app.get('/album', (req, resp) => {
    let { albumName } = req.query;
    
    try {
        const sql = `SELECT src FROM pictures WHERE name='${albumName}'`;
        mysqlConnection.query(sql, (err, result) => {
            if (err) throw err;
            responseWithStatus(200, resp, result);
        });
    } catch (error) {
        responseWithStatus(500, resp, "Error:" + error);
    }
})


function responseWithStatus(status, response, message) {
    response.status(status).send({
        message
    });
}


port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server running on port " + port));
