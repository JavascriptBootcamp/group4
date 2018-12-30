var books = [];

const alreadyReadPrefix = "You already read";
const yetReadPrefix = "You still need to read";

var book1 =
{
    title : "Harry Potter and the goblet of fire",
    author : "J.K Rolling",
    alreadyRead : false,
}

var book2 =
{
    title : "Apartment to rent",
    author : "Lea Goldberg",
    alreadyRead : true,
}

var book3 =
{
    title : "The man who wasnt there",
    author : "Olga Zadorov",
    alreadyRead : true,
}

books.push(book1,book2,book3);

books.forEach(function(book)
{
    console.log(book.title + " by " + book.author);
});

books.forEach(function(book)
{
    var nameBookByAuthor = book.title + " by " + book.author;
    book.alreadyRead ? console.log(alreadyReadPrefix, nameBookByAuthor) : console.log(yetReadPrefix, nameBookByAuthor);
});
