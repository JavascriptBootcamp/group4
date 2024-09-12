const express = require('express');
const mysql = require('mysql');  
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());


// Create configuration for connection to MySQL
const mysqlConnection = mysql.createConnection({
    host      : 'localhost',
    user      : 'root',
    password  : '',
    database : 'clothes'
    // port : '3306'
});


// Create connection to MySQL
mysqlConnection.connect( (err, result) => {
    if(!err) console.log('MySQL Connection succeed');
    else console.log('MySQL Connection failed \n Error: ' + JSON.stringify(err, undefined, 2));
});



// Adding a shirt
app.post('/addShirt', (req, resp) => {
    let {shirtCode, shirtSize, shirtColor, fit, shirtPrice, height} = req.body;

    if (!shirtCode || !shirtSize || !shirtColor || !fit || !shirtPrice) resp.status(500).send('Missing data');
        
    try {
        const sql = `
            INSERT INTO shirts (code,size,color,fit,price,height)
            VALUES ('${shirtCode}','${shirtSize}','${shirtColor}','${fit}','${shirtPrice}', '${height}')
        `;

        mysqlConnection.query(sql, (error, result) => {
            if(!!error) console.log('Error in the query:\n' + error);
            else resp.status(200).send('Shirt added successfully');
        });
    } catch(exception) {
        resp.status(500).send( "exception: " + exception);
    } 
});


app.get('/allShirtsData', (req, resp) => {
    const sqlQuery = "SELECT * FROM shirts";
    mysqlConnection.query(sqlQuery, (error, shirtsTableRowsData) => {
        if(!!error) console.log('Error in the query' + error);
        else  resp.send(shirtsTableRowsData);
    });
})


// Display shirt details by ID
app.get('/shirtDetailsById', (req, resp, next) => {
    let id = req.query.id;

    if (!id) resp.send('Please pass id!');
    else if(isNaN(Number(id))) resp.send(`ID must be a number, ${id} is not a number`);
    
    try {
        const sqlQuery = `SELECT * FROM shirts WHERE id=${id}`
        mysqlConnection.query(sqlQuery, (error, shirtDetails) => {
            if(!!error) console.log('Error in the query:\n' + error);
            else {
                if(shirtDetails.length === 0) {
                    resp.send(`No shirt with id ${id}`);
                    // next();
                }
                resp.send(shirtDetails);
            }   
        })
    } catch(exception) {
        resp.status(500).send( "exception: " + exception);
    }
     
})


// Display shirts details by price range
app.get('/shirtsDetailsByPriceRange', (req, resp, next) => {
    let { fromPrice, toPrice } = req.query;

    if (!fromPrice || !toPrice) {
        resp.send(" 'From Price' and 'To Price' are both required fields");
        //next();
    }   
    
    try {
        const sqlQuery = `SELECT * FROM shirts WHERE price>=${fromPrice} AND price<=${toPrice}`;
        mysqlConnection.query(sqlQuery, (error, shirtsDetails) => {
            if(!!error) console.log('Error in the query:\n' + error);
            else {
                if(shirtsDetails.length === 0) {
                    resp.send(`No shirts which price between ${fromPrice} and ${toPrice}`);
                }
                resp.status(200).send(shirtsDetails);
            }
            
        });
    } catch (exception) {
        resp.status(500).send( "exception: " + exception);
    }
    
});


// Display shirts colors by size
app.get('/shirtsColorsBySize', (req, resp, next) => {
    let { size } = req.query;
    if (!size) {
        resp.send('Size is required!');
        //next();
    }
    
    try {
        const sql = `SELECT color FROM shirts WHERE size=${size}`;
        mysqlConnection.query(sql,  (error, shirtsColors) => {
            if(!!error) console.log('Error in the query:\n' + error);
            else {
                if(shirtsColors.length === 0) {
                    resp.send(`There is no shirts which size is ${size}`);
                }
                resp.status(200).send(shirtsColors);
            }
            
        });
    } catch (exception) {
        resp.status(500).send( "exception: " + exception);
    }
    
});


// Display shirts sizes and colors by fit
app.get('/shirtsSizesAndColorsByFit', (req, resp) => {
    let { fit } = req.query;

    if (!fit) resp.send('Please choose a fit!');
        
    try {
        const sql = `SELECT size,color FROM shirts WHERE fit=${fit}`;
        mysqlConnection.query(sql, (error, shirtSizesAndColors) => {
            if(!!error) console.log('Error in the query:\n' + error);
            else {
                if(shirtSizesAndColors.length === 0) {
                    resp.send(`There is no shirts which fit is ${fit}`);
                }
                resp.status(200).send(shirtSizesAndColors);
            }
        });
    } catch (exception) {
        resp.status(500).send( "exception: " + exception);
    }
});

// Display less expensive shirt by receiving two shirt IDs
app.get('/lessExpensiveShirt', (req, resp) => {
    let { id1, id2 } = req.query;

    if (!id1 || !id2) resp.send('Please type 2 IDs');
    else if(id1 === id2) resp.send('Pleace type 2 different IDs');
       
    try {
        const sql = `SELECT * FROM shirts 
                     WHERE id=${id1} OR id=${id2} 
                     ORDER BY price ASC 
                     LIMIT 1`;
        mysqlConnection.query(sql, (error, result) => {
            if(!!error) console.log('Error in the query:\n' + error);
            resp.status(200).send(result);
        });
    } catch (exception) {
        resp.status(500).send( "exception: " + exception);
    }   
});



// Delete shirt by id
app.delete('/deleteShirtById', (req, resp) => {
    let id  = req.body.id;

    if (!id) resp.status(500).send('Please type id');

    try {
        const sql = `DELETE FROM shirts WHERE id=${id}`;
        mysqlConnection.query(sql, (error, result) => {
            if(!!error) console.log('Error in the query:\n' + error);
            resp.status(200).send('Shirt has been deleted successfully');
        });
    } catch (exception) {
        resp.status(500).send( "exception: " + exception);
    }     
})


port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server running on port " + port));
