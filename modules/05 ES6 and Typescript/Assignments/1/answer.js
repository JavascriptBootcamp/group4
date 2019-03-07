const max2 = (arr) => {
    let maxValue;
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            maxValue = arr[0];
        } else {
            if (arr[i] > maxValue) {
                maxValue = arr[i];
            }
        }
    }
    return maxValue;
}

console.log(max2([-12, -34, 0, -56, -1]));



const books2 = [
    { title: "The Hobbit", author: "J.R.R. Tolkien", alreadyRead: true },
    { title: "Harry Potter", author: "J.K Rolling", alreadyRead: false },
    { title: "The Lord Of The Rings", author: "Yakir Solomon", alreadyRead: true },
]

for (var i = 0; i < books.length; i++) {
    console.log(books[i].title + " by " + books[i].author);
}
for (var i = 0; i < books.length; i++) {
    if (books[i].alreadyRead) {
        let print = `You already read ${books[i].title} by ${books[i].author}`;
        console.log(print);
    }
    else {
        let print2 = `You still need to read ${books[i].title} by ${books[i].author}`;
        console.log(print2);
    }
}


