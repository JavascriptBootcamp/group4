
let arrOfBooks = [{
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    alreadyRead: true
},
{
    title: "The Hobbit 2",
    author: "J.R.R. Tolkien 2",
    alreadyRead: false
},
{
    title: "The Hobbit 3",
    author: "J.R.R. Tolkien 3",
    alreadyRead: true
},
];

let [b1, b2, b3] = arrOfBooks
console.log(`deconstructing sample ${b1.title}`);

arrOfBooks.forEach((item) => {
    if (item.alreadyRead === true) {
        console.log("You already read", item.title, "by", item.author);
    }
    else {
        console.log("You still need to read", item.title, "by", item.author);
    }
});
