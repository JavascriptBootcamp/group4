let books = [
    {title: "The Hobbit",author: "J.R.R. Tolkien",alreadyRead: true},
    {title: "Harry Potter",author: "J.K Rolling",alreadyRead: false},
    {title: "The Lord Of The Rings",author: "Yakir Solomon",alreadyRead: true},
]

const  showBooks = (...books)=>{
    for (let i of books){
        console.log(`${i.title} by ${i.author}`);
    }
}
showBooks(...books)
const hasRead = (...books)=>{
    for (let i of books){
        if(i.alreadyRead)
            console.log(`You already read ${i.title} by  ${i.author}`);
        else
            console.log(`You still need to read ${i.title} by ${i.author}`);
    }
}
hasRead(...books)

//21
let orgarr = [-12,-34,0,-56,-1];
const max = (...arr)=>{let maxValue=arr[0];
for(let i of arr){
    i>maxValue?maxValue=i:{}
}
return maxValue;
}

console.log(max(...orgarr));
    
