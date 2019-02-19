function addBook(event) {
    event.preventDefault();
    var newBook = document.getElementById('books');
    var name = document.getElementById('bookName').value;
    var author = document.getElementById('author').value;
    var date = document.getElementById('date').value;
    var publisher = document.getElementById('publisher').value;
    var pages = document.getElementById('pages').value;
    var comments = document.getElementById('comments').value;

    var book = document.createElement('div');
    book.setAttribute('id', date);
    book.setAttribute('class', "book");
    var h1 = document.createElement('h1');
    h1.innerText = 'Title: ' + name;
    var h2 = document.createElement('h2');
    h2.innerText = 'Author: ' + author;
    var h3 = document.createElement('h3');
    h3.innerText = 'Publication date: ' + date;
    var h4 = document.createElement('h4');
    h4.innerText = 'Publisher: ' + publisher;
    var h5 = document.createElement('h5');
    h5.innerText = 'Pages: ' + pages;
    var p = document.createElement('p');
    p.innerText = 'Comments: ' + comments;
    book.appendChild(h1);
    book.appendChild(h2);
    book.appendChild(h3);
    book.appendChild(h4);
    book.appendChild(h5);
    book.appendChild(p);
    newBook.appendChild(book);
}

function sortBooks() {
    var select = document.getElementById('sort');
    var descORasc = select.selectedIndex;
    var toSort = document.getElementById('books').children;
    toSort = Array.prototype.slice.call(toSort, 0);

    function date_sort_desc(date1, date2) {  // sort newest to oldest
        if (date1.id > date2.id) return -1;
        if (date1.id < date2.id) return 1;
        return 0;
    };
    function date_sort_asc(date1, date2) { // sort oldest to newest
        if (date1.id > date2.id) return 1;
        if (date1.id < date2.id) return -1;
        return 0;
    };

    if (descORasc)
        toSort.sort(date_sort_desc);
    else
        toSort.sort(date_sort_asc);

    var newSort = '';
    toSort.forEach((book) => {
        newSort += book.outerHTML;
    });

    var newS = document.getElementById('books');
    newS.innerHTML = newSort;

}
