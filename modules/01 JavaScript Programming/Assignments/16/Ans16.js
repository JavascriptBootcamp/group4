// let isRead = (booksObj) =>{
//     if(booksObj.alreadyRead)
//         console.log("You already read " + booksObj.author + " by " + booksObj.author);
//     else{
//         console.log("You still need to read " + booksObj.author + " by " + booksObj.author);
//     }
// }

let Books = [
    {
        title: "Harry Poter",
        author: "Avi",
        alreadyRead : false

    },
    {
        title: "BamBam",
        author: "Dana",
        alreadyRead : true

    }

];

Books.forEach((elem) =>{
    console.log("The " + elem.title + " by " + elem.author + ".");

})
Books.forEach((elem) =>{ 
    if(elem.alreadyRead)
        console.log("You already read " + elem.author + " by " + elem.author);
    else{
        console.log("You still need to read " + elem.author + " by " + elem.author);
}

} )

