const books = [
    { title: "The Hobbit", author: "J.R.R. Tolkien", alreadyRead: true },
    { title: "Harry Potter", author: "J.K Rolling", alreadyRead: false },
    { title: "The Lord Of The Rings", author: "Yakir Solomon", alreadyRead: true },
]

for (let i = 0; i < books.length; i++) {
    let {title, author, alreadyRead} = books[i];
    console.log(`${title} by ${author}`);
}

for (let i = 0; i < books.length; i++) {
    let {title, author, alreadyRead} = books[i];
    if (alreadyRead)
        console.log(`You already read ''${title}'' by " ${author}`);
    else
        console.log(`You still need to read ''${title}'' by ${author}`);
}
// exercise 21
const max = (arr) => {
    let maxValue;
    arr.forEach((...args) => {
        if(args[1] == 0){
            maxValue = args[0];
        } else {
            if (args[0] > maxValue) {
                maxValue = args[0];
            }
        }
    });
    return maxValue;
}

const max2 = (arr) => {
    let maxValue;
    arr.forEach((value, ...args) => {
        if(args[0] == 0){
            maxValue = value;
        } else {
            if (value > maxValue) {
                maxValue = value;
            }
        }
    });
    return maxValue;
}

console.log(max([-12, -34, 0, -56, -1]));
console.log(max2([-12, -34, 0, -56, -1]));