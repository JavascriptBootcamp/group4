var books = [{
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    alreadyRead: false
},
{
    title: 'Harry Potter',
    author: 'J.K. Rowling',
    alreadyRead: true
},
{
    title: 'Diary of a Wimpy Kid',
    author: 'Jeffrey Patrick Kinney',
    alreadyRead: false
}];

books.forEach((book) => {
    console.log(book.title + ' by ' + book.author + '.');
    if(book.alreadyRead){
        console.log('You already read "' + book.title + '" by ' + book.author + '.');
    }else {
        console.log('You still need to read "' + book.title + '" by ' + book.author + '.');
    }
    console.log();
});

