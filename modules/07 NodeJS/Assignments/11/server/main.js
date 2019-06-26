const express = require('express');
const cors = require('cors');
const path = require('path');
const songsRouter = require('./routes/songs');

const port = 5000;

const app = express();

app.use(express.static(path.join(__dirname, './iTube')));
app.use(express.json());
app.use(cors());
app.use('/songs', songsRouter);

app.listen(port, () => console.log("server is running in port 5000"));