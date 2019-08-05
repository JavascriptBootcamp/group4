const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
app.use(express.json());
app.use(cors());

const port = 8000;

const con = mysql.createConnection({
    database: 'myimages',
    host: 'localhost',
    user: 'root',
    password: '123456'
});

con.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
});


app.get('/album', (req, res) => {
    let { id } = req.query;
    id = mysql.escape(id);
    try {
        const sql = "select * from albums inner join pictures on albums.id = pictures.albumid where albums.id=" + id + ";"
        con.query(sql, function (err, result) {
            if (err) throw err;
            resp(200, res, result);
        });
    } catch (error) {
        resp(500, res, "error" + error);
    }
});

function resp(status, res, message) {
    res.status(status).send({
        message
    });
}

app.listen(port, () => { console.log(`listen to port ${port}`) });  