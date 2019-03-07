const books = [
    {title: "The Hobbit",author: "J.R.R. Tolkien",alreadyRead: true},
    {title: "Harry Potter",author: "J.K Rolling",alreadyRead: false},
    {title: "The Lord Of The Rings",author: "Yakir Solomon",alreadyRead: true},
]


let [bb1,bb2,bb3] = books;
console.log(`the books are : ${bb1.title} , ${bb2.title} , ${bb3.title}`);

const show_books = (b1,b2,b3) =>{

for (let i=0;i<books.length;i++){
    console.log(`${books[i].title} by ${books[i].author}`);
}

for (let i=0;i<books.length;i++){
    if(books[i].alreadyRead)
        console.log(`You already read ${books[i].title}  by ${books[i].author}`);
    else
        console.log(`You still need to read ${books[i].title} by ${books[i].author}`);
}


}

show_books(...books);


const max = (...arr) =>{

    let maxValue;
    for(let i=0; i< arr.length; i++){
        if(i===0){
            maxValue = arr[0];
        }else{
            if(arr[i] > maxValue){
                maxValue = arr[i];
            }
        }
    }
    return maxValue;
}

console.log(max([-12,-34,0,-56,-1]));
