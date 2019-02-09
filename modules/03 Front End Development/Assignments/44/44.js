var booksDiv = document.querySelector("#books");
var books = [{title : "IT", author: "Stephen King", date: new Date(1986, 9, 15), publisher: "Viking", pages: 1138, comment: "perfect author, perfect book." },
    {title : "The Dark Tower: The Gunslinger", author: "Stephen King", date: new Date(1982, 7, 10), publisher: "Grant", pages: 300, comment: "comments: perfect author, perfect series."},
    {title : "The Dark Tower Book II: The Drawing of the Three", author: "Stephen King", date: new Date(1986, 5, 11), publisher: "Grant", pages: 463, comment: "perfect author, perfect series."}
];

function Book (title, author, date, publisher, pages, comment) {
    this.title = title;
    this.author = author;
    this.date = date;
    this.publisher = publisher;
    this.pages = pages;
    this.comment = comment;
}

function creatEl(name, innerHtml) {
    var el = document.createElement(name);
    el.innerHTML = innerHtml;
    return el;
}

function creatBookEl(book){
    var div = document.createElement("div");
    div.className = "book";

    var h = creatEl("h1","Title: "+book.title);
    div.appendChild(h);

    h = creatEl("h2","Author: "+book.author);
    div.appendChild(h);

    h = creatEl("h3","Date: "+book.date.getDay()+"/"+book.date.getMonth()+"/"+book.date.getFullYear());
    div.appendChild(h);

    h = creatEl("h4","Publisher: "+book.publisher);
    div.appendChild(h);

    h = creatEl("h5","Pages: "+book.pages);
    div.appendChild(h);

    h = creatEl("p","Comment: "+book.comment);
    div.appendChild(h);

    return div;
}

function addBook(book) {
    var bookEl = creatBookEl(book);
    booksDiv.appendChild(bookEl); 
}

function addBookInput(formInput) {
    var book = new Book(formInput.title.value, formInput.author.value, formInput.date.value, formInput.publisher.value,
        formInput.pages.value, formInput.comment.value);

    books.push(book);
    addBook(book);
    formInput.reset();
}

function onPageInit() {
    booksDiv.innerHTML = "";
    books.forEach(book => {
        addBook(book);
    });
}

function sortDisplay(userChoice) {
    if (userChoice.value=== "new") {
        books.sort(function(a, b){return b.date.getFullYear() > a.date.getFullYear()});
        console.log("new");
    }
    else if (userChoice.value=== "old") {

    }

    onPageInit();
}

onPageInit();