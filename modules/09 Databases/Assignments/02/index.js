const express = require("express");

const mongoose = require("mongoose");

const carRouter = require("./routes/carRoute");

mongoose.connect('mongodb://localhost/cars',{ useNewUrlParser: true });
 
const app = express();

app.use('/', carRouter);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    console.log("h");
  });
  
  exports.cars = function(req,res) {
    console.log("ssssssssh");
  };
  
app.listen(3000, () => "Server is running on port 3000");
 
