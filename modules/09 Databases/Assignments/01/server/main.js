const express = require('express');

const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

const scoreRouter = require('./routes/score');
const quizRouter = require('./routes/quiz');

app.use('/',scoreRouter);


app.use('/quiz',quizRouter);




app.listen(8000, () => console.log('server is running!!'));