const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = 8000;

let highscore = [];

app.get('/highscore', (req, res) => {
    highscore.sort((a, b) => Number(a.score) < Number(b.score) ? 1 : -1);
    res.send(highscore);
});

app.post('/score', (req, res, next) => {
    const maxScores = 10;
    if (highscore.length < maxScores) {
        const { name, score } = req.body;
        highscore.push({ name, score });
        res.send("ok");
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
    res.send("ok");
});

app.listen(port, () => console.log(`listen port ${port}`));