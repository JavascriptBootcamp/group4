function addBook(e) {
    e.preventDefault();

    var bookTitle = document.getElementById('bookTitle').value;
    var bookAuthor = document.getElementById('bookAuthor').value;
    var publicationDate = document.getElementById('publicationDate').value;
    var publishersNames = document.getElementById('publishersNames').value;
    var pagesNum = document.getElementById('pagesNum').value;
    var comments = document.getElementById('comments').value;

    var divElem = document.createElement("div");
    divElem.className = "bookDetails";

    var h1 = document.createElement("h1");
    h1.innerText = `Title: ${bookTitle}`;
    divElem.appendChild(h1);

    var h2 = document.createElement("h2");
    h2.innerText = `Author: ${bookAuthor}`;
    divElem.appendChild(h2);

    var h3 = document.createElement("h3");
    h3.innerHTML = `Publication date: <date>${publicationDate}</date>`;
    divElem.appendChild(h3);

    var h4 = document.createElement("h4");
    h4.innerText = `Publisher: ${publishersNames}`;
    divElem.appendChild(h4);

    var h5 = document.createElement("h5");
    h5.innerText = `Pages: ${pagesNum}`;
    divElem.appendChild(h5);

    var p = document.createElement("p");
    p.innerText = `comments: ${comments}`;
    divElem.appendChild(p);

    var booksList = document.getElementById("booksList");
    booksList.appendChild(divElem);
}



function getSortingByDates(){
    var selectSortingByDateElem = document.getElementById('selectSortingByDate');
    var bookPulicationDatesElems = document.getElementsByTagName('date');

    var bookPulicationDatesArr = [];

    for(var item in bookPulicationDatesElems) {
        if(bookPulicationDatesElems.hasOwnProperty(item)) {
            bookPulicationDatesArr.push(bookPulicationDatesElems[item]);
        }
    }

    if(selectSortingByDateElem.value === 'oldest to newest') {
        bookPulicationDatesArr.sort(ascendingDateSort);
    }
    else if(selectSortingByDateElem.value === 'newest to oldest') {
        bookPulicationDatesArr.reverse();
    }

    var booksList = document.getElementById("booksList");
    booksList.innerHTML = '';

    for(var i = 0; i < bookPulicationDatesArr.length; i++) {
        
        var dateSpanElem = bookPulicationDatesArr[i];
        var h3Elem = dateSpanElem.parentElement;
        var divElem = h3Elem.parentElement;
        booksList.appendChild(divElem);
    }
}


var ascendingDateSort = function (date1, date2) {
    if (date1 > date2) return 1;
    if (date1 < date2) return -1;
    return 0;
  };
  
  var descendingDateSort = function (date1, date2) {
    if (date1 > date2) return -1;
    if (date1 < date2) return 1;
    return 0;
  };