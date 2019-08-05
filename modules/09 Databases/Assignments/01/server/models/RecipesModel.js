const mongoose = require("mongoose");

const ModelSchema = new mongoose.Schema({
   
    players: { 
        score: Number,
        name: String,
       
     }
});

module.exports = mongoose.model('score', ModelSchema);
