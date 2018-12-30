var booksArr = [{

    title:"the Hobbit",
    author:"J.R.R. Tolkien",
    alreadyRead:false
},
{
    title:"Harry Poter",
    author:"someone",
    alreadyRead:true 
},
{
    title:"some book",
    author:"someone",
    alreadyRead:true 
},
{
    title:"games of thrown",
    author:"someone",
    alreadyRead:true 
},
]

for (var i=0;i<booksArr.length;i++){

    console.log(booksArr[i].title + " by " + booksArr[i].author )
}

for (var i=0;i<booksArr.length;i++){
    if(booksArr[i].alreadyRead){
        console.log("You already read",booksArr[i].title ," by ", booksArr[i].author )
    }
       else{
        console.log("You still need to read",booksArr[i].title ," by ", booksArr[i].author )
       } 
    }