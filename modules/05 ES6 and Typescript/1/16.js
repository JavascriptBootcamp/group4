const books = [
    {title: "The Hobbit",author: "J.R.R. Tolkien",alreadyRead: true},
    {title: "Harry Potter",author: "J.K Rolling",alreadyRead: false},
    {title: "The Lord Of The Rings",author: "Yakir Solomon",alreadyRead: true},
]

for (let book of books){
    console.log(`'${book.title}' by ${book.author}`);
}

for (let book of books){
    if(book.alreadyRead)
        console.log(`You already read '${book.title}' by ${book.author}`);
    else
        console.log(`You still need to read '${book.title}' by ${book.author}`);
    }