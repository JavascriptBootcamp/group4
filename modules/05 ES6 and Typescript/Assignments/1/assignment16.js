let books = [
    {title: "The Hobbit",author: "J.R.R. Tolkien",alreadyRead: true},
    {title: "Harry Potter",author: "J.K Rolling",alreadyRead: false},
    {title: "The Lord Of The Rings",author: "Yakir Solomon",alreadyRead: true},
]

const showBooks = (...books) => {
    for (let i of books){
        console.log(`${i.title} by ${i.author}`);
    }
}
showBooks(...books);

const hasRead = (...books) => {
    for (let i of books){
        if(i.alreadyRead)
            console.log(`You already read ${i.title} by ${i.author}`);
        else
            console.log(`You still need to read ${i.title} by ${i.author}`);
    }
}

hasRead(...books);
