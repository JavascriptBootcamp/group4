const express = require('express');
const books = require('../data/books')
const router = express.Router();

router.get('/mybook', (req, res) => {
    res.json({
        book: "Book"
    })
});

module.exports = router;