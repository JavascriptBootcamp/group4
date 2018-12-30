
var BooksArray = [{title : "The Hobbit", author  : "J.R.R. Tolkien",alreadyRead : 1},{title : "The Lord of the Rings", author  : "J.R.R. Tolkien.",alreadyRead : 0}];
BooksArray.forEach(book => {
    book.alreadyRead === 1 ? console.log("You already read " + book.title + " by " + book.author ) : console.log("You still need to read " + book.title + " by " + book.author);
});
