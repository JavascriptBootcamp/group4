const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, 'search')));
app.use(express.json());

app.get('/book', (req, res) => {
    res.sendStatus(200);
})

app.listen(port, () => console.log(`Server is running on ${port}`));