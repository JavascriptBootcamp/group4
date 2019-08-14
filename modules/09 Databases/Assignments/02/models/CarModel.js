const mongoose = require("mongoose");

const ModelSchema = new mongoose.Schema({
    LicenseNumber: { type: String } ,
    Manufacturer : { type: String } ,
    Model : { type: String } ,
    year : { type: Number } ,
    KM : { type: Number } ,
    price : { type: Number } 
 
});

module.exports = mongoose.model('car', ModelSchema);