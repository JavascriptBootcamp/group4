var pics = [{ url: "https://upload.wikimedia.org/wikipedia/commons/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg", wiki: "https://en.wikipedia.org/wiki/Amsterdam" },
{ url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/631px-FullMoon2010.jpg", wiki: "https://en.wikipedia.org/wiki/Moon" },
{ url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Tel_Aviv_Promenade_panoramics.jpg/800px-Tel_Aviv_Promenade_panoramics.jpg", wiki: "https://en.wikipedia.org/wiki/Tel_Aviv" },
{ url: "https://upload.wikimedia.org/wikipedia/commons/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg", wiki: "https://en.wikipedia.org/wiki/Amsterdam" },
{ url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/631px-FullMoon2010.jpg", wiki: "https://en.wikipedia.org/wiki/Moon" },
{ url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Tel_Aviv_Promenade_panoramics.jpg/800px-Tel_Aviv_Promenade_panoramics.jpg", wiki: "https://en.wikipedia.org/wiki/Tel_Aviv" },
{ url: "https://upload.wikimedia.org/wikipedia/commons/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg", wiki: "https://en.wikipedia.org/wiki/Amsterdam" },
{ url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/631px-FullMoon2010.jpg", wiki: "https://en.wikipedia.org/wiki/Moon" },
{ url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Tel_Aviv_Promenade_panoramics.jpg/800px-Tel_Aviv_Promenade_panoramics.jpg", wiki: "https://en.wikipedia.org/wiki/Tel_Aviv" },
{ url: "https://upload.wikimedia.org/wikipedia/commons/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg", wiki: "https://en.wikipedia.org/wiki/Amsterdam" },
{ url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/631px-FullMoon2010.jpg", wiki: "https://en.wikipedia.org/wiki/Moon" },
{ url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/631px-FullMoon2010.jpg", wiki: "https://en.wikipedia.org/wiki/Moon" },
];

var picDiv = document.querySelector("#pics");
var pagesDiv = document.querySelector("#pages");
var page = 1;

function showPagePicters(pageNumber) {
    picDiv.innerHTML = "";
    start = 12 * (pageNumber - 1);
    end = pics.length < (12 * pageNumber) ? pics.length : 12 * pageNumber;

    for (let i = start; i < end; i++) {
        var link = document.createElement("a");
        link.href = pics[i].wiki;
        link.target = "_blank";
        var img = document.createElement("img");
        img.src = pics[i].url;
        link.appendChild(img);
        picDiv.appendChild(link);

    }
}

function addPic(formInput) {
    var newPic = { url: formInput.url.value, wiki: formInput.wiki.value };
    pics.push(newPic);
    showPagePicters(page);
    
    if (pics.length/12 > pagesDiv.childElementCount){
        var newPage = document.createElement("span");
        newPage.innerText = pagesDiv.childElementCount+1;
        newPage.onclick = (event) => {
            pageClicked(event.target);
        }
        pagesDiv.appendChild(newPage);
    }
    console.log(pics.length/12);
    console.log(pagesDiv.childElementCount);
    formInput.reset();
}

function pageClicked(pageBtn) {
    page = Number(pageBtn.innerText);
    pageBtn.classList = "clicked";
    showPagePicters(page);
}

showPagePicters(page);