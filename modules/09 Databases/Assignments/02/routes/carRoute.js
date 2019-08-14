const express = require('express');
const router = express.Router();

const CarModel = require('../models/CarModel');

router.get('/', (req, res) => {
    CarModel.find({}, (error, car) => res.send(car));
});

router.post('/', (req, res) => {
    const recipesModel = new RecipesModel({
        name: "Cake",
        ingredients: ["Chocolate", "Milk"],
        price: 100
    });
    CarModel.save((err, result) => res.send(result));
});

module.exports = router;