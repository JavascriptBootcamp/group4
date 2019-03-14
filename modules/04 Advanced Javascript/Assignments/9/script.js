var intervalScroll;
var ctrImg = 0;
var images = [];

function start() {
    fetch("https://picsum.photos/list").then(
        function (stream) {
            stream.json().then(
                function (json) {
                    for (var key in json) {
                        images.push("https://picsum.photos/200/300?image=" + json[key].id);
                        if (key == 120)
                            break;
                    }

                    if (localStorage.getItem("lastImg") !== null) {
                        document.getElementById("centerImg").src = localStorage.getItem("lastImg");
                        ctrImg = localStorage.getItem("lastImg").split("=")[1]; // save the index of img
                    }
                    else
                        document.getElementById("centerImg").src = images[ctrImg];

                    for (var i = 0; i < images.length; i++)
                        document.querySelector(".image_thumbnails").innerHTML += '<img class="img-tumbnail" id="' + i + '" src=' + images[i] + ' alt="" onclick="showImg(event)" >';

                        document.body.style.cursor = "default";1
                }
            )
        }
    ).catch(function (error) {
        console.log("error" + error);
    })

    document.body.style.cursor = "wait";  // page loading
}


function showImg(event) {
    document.getElementById("centerImg").src = event.target.src;
    ctrImg = event.target.id;
}

function preOrNext(show) {
    switch (show) {
        case (1):
            {
                if (ctrImg == (images.length - 1)) {
                    document.getElementById("centerImg").src = images[0];
                    ctrImg = 0;
                }
                else
                    document.getElementById("centerImg").src = images[++ctrImg];
                break;
            }
        case (-1):
            {
                if (ctrImg == 0) {
                    ctrImg = images.length - 1;
                    document.getElementById("centerImg").src = images[ctrImg];
                }
                else
                    document.getElementById("centerImg").src = images[--ctrImg];
                break;
            }
    }
    localStorage.setItem("lastImg", document.getElementById("centerImg").src); //save to localStorage
}

function scrlThumbnailRight() {
    var thumbnails = document.querySelector(".image_thumbnails");
    intervalScroll = setInterval(function () {
        thumbnails.scrollLeft += 1;
    }), 30;
}

function scrlThumbnailLeft() {
    var thumbnails = document.querySelector(".image_thumbnails");
    intervalScroll = setInterval(function () {
        thumbnails.scrollLeft -= 1;
    }), 30;
}

function stopScroll() {
    clearInterval(intervalScroll);
}
