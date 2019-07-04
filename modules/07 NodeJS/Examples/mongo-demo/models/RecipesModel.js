const mongoose = require("mongoose");

const ModelSchema = new mongoose.Schema({
    name: { type: String } ,
    ingredients: { type: Array },
    price: { 
        type: Number,
        required: true,
        validate: {
            validator: () => true,
            message: props => `${props.value} is not a number`
        }
     }
});

module.exports = mongoose.model('recipes', ModelSchema);