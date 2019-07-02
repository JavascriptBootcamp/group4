const express = require('express');
const app = express();
const cors = require('cors');
const carRouter = require('./route/car');
const loginRouter = require('./route/login');
const port = 8000;
app.use(express.json());
app.use(cors());

app.use('/', carRouter);
app.use('/', loginRouter);

app.listen(port, () => console.log(`listen to ${port}`));