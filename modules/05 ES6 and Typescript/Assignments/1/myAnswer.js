const books = [
    {title: "The Hobbit",author: "J.R.R. Tolkien",alreadyRead: true},
    {title: "Harry Potter",author: "J.K Rolling",alreadyRead: false},
    {title: "The Lord Of The Rings",author: "Yakir Solomon",alreadyRead: true},
]

for (let i=0;i<books.length;i++){
    let {title,author,alreadyRead}=books[i];
    console.log(`${title}  by  ${author}`);
}

for (let i=0;i<books.length;i++){
    let {title,author,alreadyRead}=books[i];
    if(alreadyRead)
        console.log(`You already read ${title}  by ${author}`);
    else
    
        console.log(`You still need to read  ${title} by  ${author}`);
}

const max =(arr)=>
{

    let maxValue;
    arr.forEach((value,...args) => {
        
        
     if(args[0]===0){
         
     maxValue=value;
     }
     else{
            if(value> maxValue)
            {
                maxValue = value;
            }
        }
    });
    return maxValue;
}

console.log(max([2,-34,0,-56,-1]));
