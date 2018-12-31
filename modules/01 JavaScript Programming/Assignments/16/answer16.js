
var arrOfBooks = [
    book1 = {
        title : "The Hobbit",
        author : "J.R.R. Tolkien",
        alreadyRead : true
    },
    book2 = {
        title : "The Hobbit 2",
        author : "J.R.R. Tolkien 2",
        alreadyRead : false
    },
    book3 = {
        title : "The Hobbit 3",
        author : "J.R.R. Tolkien 3",
        alreadyRead : true
    },
]; 

arrOfBooks.forEach(function(item){
    if(item.alreadyRead === true){
        console.log("You already read",item.title,"by",item.author);
    }
    else{
        console.log("You still need to read",item.title,"by",item.author);
    }
});