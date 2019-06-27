const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'trivia')));


let highscore = [];

app.get('/highscore', (req, res) => {
    highscore.sort((a, b) => Number(a.score) < Number(b.score) ? 1 : -1);
    res.send(highscore);
});

app.post('/score', (req, res, next) => {
    const maxScores = 10;
    if (highscore.length < maxScores) {
        const { name, score } = req.body;
        Number(score)
        highscore.push({ name, score });
        highscore.sort((a, b) => Number(a.score) < Number(b.score) ? 1 : -1);
        res.send(highscore);
    }
    else {
        next();
    }
});

app.post('/score', (req, res) => {
    highscore.sort((a, b) => Number(a.score) < Number(b.score) ? 1 : -1);
    const { name, score } = req.body;
    if (highscore.some(item => Number(score) > Number(item.score))) {
        highscore.pop();
        highscore.push({ name, score })
    }
    highscore.sort((a, b) => Number(a.score) < Number(b.score) ? 1 : -1);
    res.send(highscore);
});

app.listen(port, () => console.log(`listen port ${port}`));