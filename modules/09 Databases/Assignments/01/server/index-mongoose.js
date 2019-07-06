const express = require("express");
const cors = require('cors');

const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.use(cors());
const scoreRouter = require("./routes/score");

mongoose.connect('mongodb://127.0.0.1:27017/score');


app.use('/', scoreRouter);

app.listen(8000, () => "Server is running on port 8000");