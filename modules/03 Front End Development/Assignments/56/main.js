function getLastImgStorage() {
    if (window.localStorage.getItem("key") === null) {
        var mainPicture = document.getElementById("selected-img");
        mainPicture.src = "https://upload.wikimedia.org/wikipedia/commons/c/c7/Puppy_on_Halong_Bay.jpg";
    } else {
        var src = window.localStorage.getItem("key");
        var mainPicture = document.getElementById("selected-img");
        mainPicture.src = src;
    }
}

function previous() {
    var mainPicture = document.getElementById("selected-img");
    var allPictures = document.querySelectorAll('.gallery img');
    for (var i = 0; i < allPictures.length; i++) {
        if (allPictures[i].src === mainPicture.src) {
            window.localStorage.setItem("key", allPictures[i].src);

            if (i === 0) {
                mainPicture.src = allPictures[allPictures.length - 1].src;
                window.localStorage.setItem("key", allPictures[allPictures.length - 1].src);
                break;
            } else {
                mainPicture.src = allPictures[i - 1].src;
                window.localStorage.setItem("key", allPictures[i - 1].src);
                break;
            }
        }
    }
}

function next() {
    var mainPicture = document.getElementById("selected-img");
    var allPictures = document.querySelectorAll('.gallery img');
    for (var i = 0; i < allPictures.length; i++) {
        if (allPictures[i].src === mainPicture.src) {
            window.localStorage.setItem("key", allPictures[i].src);

            if (i === allPictures.length - 1) {
                mainPicture.src = allPictures[0].src;
                window.localStorage.setItem("key", allPictures[0].src);
                break;
            } else {
                mainPicture.src = allPictures[i + 1].src;
                window.localStorage.setItem("key", allPictures[i + 1].src);
                break;
            }
        }
    }
}

function store(event) {
    var mainPicture = document.getElementById("selected-img");
    mainPicture.src = event.target.src;
    window.localStorage.setItem("key", mainPicture.src);
}
