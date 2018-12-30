//Question
//Create an array of objects, where each object describes a book and has properties for the title (a string),
// author (a string), and alreadyRead (a boolean indicating if you read it yet).<br />
//Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".<br />
//Now use an if/else statement to change the output depending on whether you read it yet or not.
//If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not,
//log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

//answer
var Laibary = [
    book1 = {
        title: "Harry Potter",
        author: "J.K rolling",
        alreadyRead: false
    },
    book2 = {
        title: "Bible",
        author: "GOD",
        alreadyRead: true
    }
];

Laibary.forEach(function(item){
    item.alreadyRead ? console.log(`You already read ${item.title} by ${item.author}`) : console.log(`You still need to read ${item.title} by ${item.author}`);
});

