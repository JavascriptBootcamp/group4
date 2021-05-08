const express = require('express');
const mysql = require('mysql');  
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());


const mysqlConnection = mysql.createConnection({
    host      : 'localhost',
    user      : 'root',
    password  : '',
    database : 'instush'
});


mysqlConnection.connect( (err, result) => {
    if(!err) console.log('MySQL Connection succeed');
    else console.log('MySQL Connection failed \n Error: ' + JSON.stringify(err, undefined, 2));
});


app.post('/addLike', (req, resp) => {
    const {imageSrc, likesNum} =  req.body;

    const sql = `INSERT INTO app_counts (image_src, likes_num) 
                 VALUES (${imageSrc}, ${likesNum})`;

    resp.status(200).send("Like has been added")
})

port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server running on port " + port));
