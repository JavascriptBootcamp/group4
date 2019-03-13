function toggleLoading(show) {
    show ? document.getElementById("placeholder").innerHTML = "<img src='https://cdn.dribbble.com/users/1092116/screenshots/2857934/loading-indicator-dribbble2.gif' />" : document.getElementById("placeholder").innerHTML = "";
}
toggleLoading(true); // show "Loading..."
fetch("https://picsum.photos/list").then(function (stream) {
    stream.json().then(function (json) {
        toggleLoading(false);
        imagesArr = [];
        for (var i = 0; i < json.length; i++) {
            var imageSrc = "https://picsum.photos/200/300?image=" + json[i].id;
            imagesArr.push(imageSrc);
        }
        for (var i = 0; i < 10; i++) {
            var image = document.createElement("img");
            image.src = imagesArr[Math.floor(Math.random() * imagesArr.length)];
            image.setAttribute("onclick","store(event)")
            document.querySelector(".gallery").appendChild(image);
        }
    })
}
).catch(function (error) {
    console.log("Error: " + error);
})

function getLastImgStorage() {
    if (window.localStorage.getItem("key") === null) {
        var mainPicture = document.getElementById("selected-img");
        mainPicture.src = "https://picsum.photos/200/300?image=0";
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
