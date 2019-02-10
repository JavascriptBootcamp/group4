var pics = [ { url: "https://upload.wikimedia.org/wikipedia/commons/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg", wiki: "https://en.wikipedia.org/wiki/Amsterdam"},
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/631px-FullMoon2010.jpg", wiki: "https://en.wikipedia.org/wiki/Moon"},
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Tel_Aviv_Promenade_panoramics.jpg/800px-Tel_Aviv_Promenade_panoramics.jpg", wiki: "https://en.wikipedia.org/wiki/Tel_Aviv"},
    { url: "https://upload.wikimedia.org/wikipedia/commons/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg", wiki: "https://en.wikipedia.org/wiki/Amsterdam"},
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/631px-FullMoon2010.jpg", wiki: "https://en.wikipedia.org/wiki/Moon"},
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Tel_Aviv_Promenade_panoramics.jpg/800px-Tel_Aviv_Promenade_panoramics.jpg", wiki: "https://en.wikipedia.org/wiki/Tel_Aviv"},
    { url: "https://upload.wikimedia.org/wikipedia/commons/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg", wiki: "https://en.wikipedia.org/wiki/Amsterdam"},
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/631px-FullMoon2010.jpg", wiki: "https://en.wikipedia.org/wiki/Moon"},
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Tel_Aviv_Promenade_panoramics.jpg/800px-Tel_Aviv_Promenade_panoramics.jpg", wiki: "https://en.wikipedia.org/wiki/Tel_Aviv"},
    { url: "https://upload.wikimedia.org/wikipedia/commons/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg", wiki: "https://en.wikipedia.org/wiki/Amsterdam"},
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/631px-FullMoon2010.jpg", wiki: "https://en.wikipedia.org/wiki/Moon"},
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Tel_Aviv_Promenade_panoramics.jpg/800px-Tel_Aviv_Promenade_panoramics.jpg", wiki: "https://en.wikipedia.org/wiki/Tel_Aviv"}
];

var picDiv = document.querySelector("#pics");

function onPageInit() {
    picDiv.innerHTML = "";
    pics.forEach(function(pic) {
        var link = document.createElement("a");
        link.href = pic.wiki;
        var img = document.createElement("img");
        img.src = pic.url;
        link.appendChild(img);
        picDiv.appendChild(link);
    }); 
}

function addPic(formInput){
    var newPic = {url: formInput.url.value, wiki: formInput.wiki.value};
    pics.push(newPic);
    onPageInit();
    formInput.reset();
}

onPageInit();