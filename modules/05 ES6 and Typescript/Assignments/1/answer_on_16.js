var books = [
    {
        title: 'book1',
        author: 'writer1',
        alreadyRead: true
    },
    {
        title: 'book2',
        author: 'writer2',
        alreadyRead: false
    },
    {
        title: 'book3',
        author: 'writer3',
        alreadyRead: true
    }
];


// for (var i = 0; i < books.length; i++) {
//     if (books[i].alreadyRead) console.log('You already read ', books[i].title, ' by ', books[i].author);
//     else console.log('You still need to read ', books[i].title, ' by ', books[i].author);
// }

// ES6
for (let book of books) {
    if(book.alreadyRead) console.log(`You already read '${book.title}' by ${book.author}`);     
    else console.log(`You still need to read '${book.title}' by ${book.author}`);      
} 
