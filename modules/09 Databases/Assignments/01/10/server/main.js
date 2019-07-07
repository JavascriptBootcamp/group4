const express = require('express');
const cors = require('cors');
const path = require('path');
const scoreRouter = require('./routes/score');
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'trivia')));

app.use('/highscore', scoreRouter);

app.listen(port, () => console.log(`listen port ${port}`));