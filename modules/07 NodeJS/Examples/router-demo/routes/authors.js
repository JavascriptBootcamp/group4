const express = require('express');

const router = express.Router();

router.post('/authors', (req, res) => {
    res.sendStatus(200);
});

module.exports = router;