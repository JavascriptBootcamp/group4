const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
app.use(express.json());
app.use(cors());

const port = 8000;

const con = mysql.createConnection({
    database: 'likes',
    host: 'localhost',
    user: 'root',
    password: '123456'
});

con.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
});


app.post('/author', (req, res) => {
    con.query("delete from author;", function (err, result) {
        if (err) throw err;
    });
    let data = req.body;
    data.forEach(element => {
        let id = element.author.id,
            description = element.author.desc,
            facebook = element.author.facebook,
            name = element.author.name,
            profilePic = element.author.profilePic,
            likes = element.like,
            src = element.src;
            try {
                const sql = "insert into author (id , description , facebook , name , profilePic , likes, src) VALUES (" + mysql.escape(id) + " , " + mysql.escape(description) + " , " + mysql.escape(facebook) + " , " + mysql.escape(name) + " , " + mysql.escape(profilePic) + " , " + mysql.escape(likes) + " , " + mysql.escape(src) + ");"
                con.query(sql, function (err, result) {
                    if (err) throw err;
                });
            } catch (error) {
                resp(500, res, "error" + error);
            }
    });
    resp(200, res, "recoreds inserted");
});

function resp(status, res, message) {
    res.status(status).send({
        message
    });
}

app.listen(port, () => { console.log(`listen to port ${port}`) }); 