// const app = require('express')();
const express = require('express');
const app = express();
const booksRouter = require('./routes/books');
const authorsRouter = require('./routes/authors');

const port = 8888;

// const authors = [
//     {firstName: "firstName1", lastName: "lastName1"}
// ];

app.use('/books', booksRouter);

app.use('/', authorsRouter);

// app.get('/books', (req, res) => {
//     res.json(books);
// });

// app.get('/authors', (req, res) => {
//     res.json(authors);
// });

app.listen(port, () => console.log(`listening on port ${port}`));