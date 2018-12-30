var book1 = {title: "Harry poter1", author: "J.K.ROLLING", alreadyRead:false}
var book2 = {title: "Algebra", author: "Yoel Geva", alreadyRead:true}
var book3 = {title: "Giometry", author: "Beni Goren", alreadyRead:true}
var book4 = {title: "Harry poter2", author: "J.K.ROLLING", alreadyRead:true}

var books = [book1,book2,book3,book4];

books.forEach(function(element) {
    var readMassage = element.alreadyRead ? "You already read" : "You still need to read";
    console.log(readMassage, element.title,"by",element.author);
}, this);
