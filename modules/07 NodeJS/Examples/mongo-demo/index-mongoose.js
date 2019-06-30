const express = require("express");

const mongoose = require("mongoose");

const recipesRouter = require("./routes/recipesRoute");

mongoose.connect('mongodb://127.0.0.1:27017/restaurant');

const app = express();

app.use('/', recipesRouter);

app.listen(3000, () => "Server is running on port 3000");