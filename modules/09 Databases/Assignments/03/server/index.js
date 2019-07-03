const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
app.use(express.json());
app.use(cors());

const port = 8000;

const con = mysql.createConnection({
    database: 'clothes',
    host: 'localhost',
    user: 'root',
    password: '123456'
});

con.connect((err) => {
    if (err) throw err;
    console.log("Connected!");

});


app.post('/shirt', (req, res) => {
    let { size, color, fit, price } = req.body;
    price = +price;
    if (!size || !color || !fit || !price) {
        resp(500, res, "data is missing");
    }
    else {
        try {
            const sql = "insert into shirt (Size , Color , Fit , Price) VALUES ('" + mysql.escape(size) + "' , '" + mysql.escape(color) + "' , '" + mysql.escape(fit) + "' , '" + mysql.escape(price) + "');"
            con.query(sql, function (err, result) {
                if (err) throw err;
                resp(200, res, "record inserted");
            });
        } catch (error) {
            resp(500, res, "error" + error);
        }
    }
});


app.get('/shirt', (req, res, next) => {
    let { id } = req.query;
    if (!id) {
        next();
    }
    else {
        try {
            const sql = "select * from shirt WHERE ID='" + mysql.escape(id) + "';"
            con.query(sql, function (err, result) {
                if (err) throw err;
                resp(200, res, result);
            });
        } catch (error) {
            resp(500, res, "error" + error);
        }
    }
});

app.get('/shirts', (req, res, next) => {
    let { fromprice, toprice } = req.query;
    if (!fromprice || !toprice) {
        next();
    }
    else {
        try {
            const sql = "select * from shirt WHERE price >='" + mysql.escape(fromprice) + "' and price <= '" + mysql.escape(toprice) + "';"
            con.query(sql, function (err, result) {
                if (err) throw err;
                resp(200, res, result);
            });
        } catch (error) {
            resp(500, res, "error" + error);
        }
    }
});

app.get('/shirts', (req, res, next) => {
    let { size } = req.query;
    if (!size) {
        next();
    }
    else {
        try {
            const sql = "select * from shirt WHERE size ='" + mysql.escape(size) + "';"
            con.query(sql, function (err, result) {
                if (err) throw err;
                resp(200, res, result);
            });
        } catch (error) {
            resp(500, res, "error" + error);
        }
    }
});


app.get('/shirts', (req, res) => {
    let { fit } = req.query;
    if (!fit) {
        resp(500, res, "data is missing");
    }
    else {
        try {
            const sql = "select size , color from shirt WHERE fit ='" + mysql.escape(fit) + "';"
            con.query(sql, function (err, result) {
                if (err) throw err;
                resp(200, res, result);
            });
        } catch (error) {
            resp(500, res, "error" + error);
        }
    }
});


app.get('/shirt', (req, res) => {
    let { firstid, secondid } = req.query;
    if (!firstid || !secondid) {
        resp(500, res, "data is missing");
    }
    else {
        try {
            
            const sql = "select * from shirt where id in (" + mysql.escape(firstid) + ", " + mysql.escape(secondid) + ") order by price ASC limit 1;"
            con.query(sql, function (err, result) {
                if (err) throw err;
                resp(200, res, result);
            });
        } catch (error) {
            resp(500, res, "error" + error);
        }
    }
});

function resp(status, res, message) {
    res.status(status).send({
        message
    });
}

app.listen(port, () => { console.log(`listen to port ${port}`) });