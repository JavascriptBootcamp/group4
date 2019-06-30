const express = require('express');
const router = express.Router();

const RecipesModel = require('../models/RecipesModel');

router.get('/', (req, res) => {
    RecipesModel.find({}, (error, recipes) => res.send(recipes));
});

router.post('/', (req, res) => {
    const recipesModel = new RecipesModel({
        name: "Cake",
        ingredients: ["Chocolate", "Milk"],
        price: 100
    });
    recipesModel.save((err, result) => res.send(result));
});

module.exports = router;