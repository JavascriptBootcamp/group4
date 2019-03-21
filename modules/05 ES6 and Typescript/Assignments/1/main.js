// exercise 16
const books = [
    { title: "The Hobbit", author: "J.R.R. Tolkien", alreadyRead: true },
    { title: "Harry Potter", author: "J.K Rolling", alreadyRead: false },
    { title: "The Lord Of The Rings", author: "Yakir Solomon", alreadyRead: true },
]

for (let x of books) {
    let { title, author, } = x;
    console.log(`${title} by ${author}`);
}

for (let x of books) {
    let { title, author, alreadyRead } = x;
    if (alreadyRead)
        console.log(`You already read "${title}" by ${author}`);
    else
        console.log(`You still need to read "${title}" by ${author}`);
}

// exercise 21
const max = (...args) => {

    let maxValue;
    for (var i = 0; i < args.length; i++) {
        if (i === 0) {
            maxValue = args[0];
        } else {
            if (args[i] > maxValue) {
                maxValue = args[i];
            }
        }
    }
    return maxValue;
}

console.log(max(-12, -34, 0, -56, -1));
