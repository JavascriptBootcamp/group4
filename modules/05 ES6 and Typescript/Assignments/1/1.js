//group4/Modules/01 JavaScript Programming/Assignments/16 in ES6
//befor :
// var books = [
//     {title: "The Hobbit",author: "J.R.R. Tolkien",alreadyRead: true},
//     {title: "Harry Potter",author: "J.K Rolling",alreadyRead: false},
//     {title: "The Lord Of The Rings",author: "Yakir Solomon",alreadyRead: true},
// ]

// for (var i=0;i<books.length;i++){
//     console.log(books[i].title + " by " + books[i].author);
// }

// for (var i=0;i<books.length;i++){
//     if(books[i].alreadyRead)
//         console.log("You already read " + "''" + books[i].title + "'' by " + books[i].author);
//     else
//         console.log("You still need to read " + "''" + books[i].title + "'' by " + books[i].author);
// }

let books = [
    { title: "The Hobbit", author: "J.R.R. Tolkien", alreadyRead: true },
    { title: "Harry Potter", author: "J.K Rolling", alreadyRead: false },
    { title: "The Lord Of The Rings", author: "Yakir Solomon", alreadyRead: true },
]

//new function to demonstreat deconstraction
const printToFirstBooksName = (arr) => {
    let [firstBook, secondBook] = arr;
    console.log(`

    first book in your list is ${firstBook.title}
    Second book in your list is ${secondBook.title}

    `);
}

printToFirstBooksName(books);

for (book of books) {
    console.log(`${book.title} by ${book.author}`);
}

for (book of books) {
    book.alreadyRead ? console.log(`You already read "${book.title}" by ${book.author}`) :
        console.log(`still need to read "${book.title}" by ${book.author}`);
}


//group4/Modules/01 JavaScript Programming/Assignments/21 in ES6

//befor :
// function max(arr) {
//     var maxValue;
//     for (var i = 0; i < arr.length; i++) {
//         if (i === 0) {
//             maxValue = arr[0];
//         } else {
//             if (arr[i] > maxValue) {
//                 maxValue = arr[i];
//             }
//         }
//     }
//     return maxValue;
// }
// console.log(max([-12, -34, 0, -56, -1]));

const max = (...args) => {
    let maxValue = args[0];
    for (item of args) {
        maxValue = (item > maxValue) ? item : maxValue;
    }
    return maxValue;
}

console.log(max(-12, -34, 0, -56, -1));