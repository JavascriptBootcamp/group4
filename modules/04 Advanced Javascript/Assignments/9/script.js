const imgList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const indexStartEnd = [0, imgList.length / 2];
let isSessionStorage;

moveLeft = () => {
    if (indexStartEnd[0] > 0) {
        indexStartEnd[0]--;
        indexStartEnd[1]--;
        sessionStorage.setItem("start", indexStartEnd[0]);
        sessionStorage.setItem("end", indexStartEnd[1]);
        document.querySelectorAll("#img-row img").forEach(img => img.remove());
        filler(indexStartEnd[0], indexStartEnd[1]);
    }
}
moveRight = () => {
    if (indexStartEnd[1] < imgList.length - 1) {
        indexStartEnd[0]++;
        indexStartEnd[1]++;
        sessionStorage.setItem("start", indexStartEnd[0]);
        sessionStorage.setItem("end", indexStartEnd[1]);
        document.querySelectorAll("#img-row img").forEach(img => img.remove());
        filler(indexStartEnd[0], indexStartEnd[1]);
    }
}
fill = () => {
    if (sessionStorage.getItem("start")) {
        let start = sessionStorage.getItem("start");
        let end = sessionStorage.getItem("end");
        isSessionStorage = true;
        filler(start, end, isSessionStorage);
    }
    else {
        isSessionStorage = false;
        filler(indexStartEnd[0], indexStartEnd[1], isSessionStorage);

    }
}

filler = (start, end, isSessionStorage) => {
    if (sessionStorage.getItem("img") && isSessionStorage) {
        isSessionStorage = false;
        if (document.querySelector("#main-img")) {
            document.querySelector("#main-img").remove();
        }
        let img = document.createElement("img");
        img.src = sessionStorage.getItem("img")
        img.id = "main-img";
        document.querySelector("#big-image").appendChild(img);
        sessionStorageFiller();
    }
    else {
        mainFiller(start, end);
        ////////////////
        if (document.querySelector("#main-img")) {
            document.querySelector("#main-img").remove();
        }
        let mainImg = document.createElement("img");
        mainImg.src = imgList[start + 2];
        mainImg.id = "main-img"
        sessionStorage.setItem("img", mainImg.src);
        document.querySelector("#big-image").appendChild(mainImg);
    }
    sessionStorage.setItem("start", start);
    sessionStorage.setItem("end", end);
}

sessionStorageFiller = () => {

    let start = sessionStorage.getItem("start");
    let end = sessionStorage.getItem("end");
    mainFiller(start, end);
}


// Changes for q9
mainFiller = (start, end) => {
    fetch("https://picsum.photos/list").then((stream) => {
        stream.json().then((json) => {
            sessionStorage.setItem("start", start);
            sessionStorage.setItem("end", end);
            let tmpImgIndex = 0
            //debugger
            for (let i = start; i < end; i++) {
                fetch("https://picsum.photos/200/300?image=" + json[Math.floor(Math.random() * json.length)].id)
                    .then(res => {
                        document.querySelector("#temp" + tmpImgIndex++).remove();
                        imgList[i] = res.url;
                        img.src = imgList[i];
                        img.width = "250";
                        img.height = "250";
                        img.onclick = (event) => {
                            let img = event.srcElement.cloneNode(true);
                            img.width = "";
                            img.height = "";
                            img.id = "main-img";
                            document.querySelector("#main-img").remove();
                            document.querySelector("#big-image").appendChild(img);
                            sessionStorage.setItem("img", img.src);
                        }
                        document.querySelector("#img-holder").appendChild(img);
                        if (tmpImgIndex === 3) {
                            document.querySelector("#main-img").remove();
                            bigImg = img.cloneNode(true)
                            bigImg.id = "main-img";
                            document.querySelector("#big-image").appendChild(bigImg);
                        }
                    })
                let img = document.createElement("img");
            }
        })
        for (let i = 0; i < 5; i++) {
            img = document.createElement("img")
            img.id = "temp" + i;
            img.src = "https://loading.io/spinners/microsoft/lg.rotating-balls-spinner.gif"
            img.width = "250"
            img.height = "250"
            document.querySelector("#img-holder").appendChild(img);
        }
        if (document.querySelector("#main-img")) {
            document.querySelector("#main-img").remove();
            bigImg = img.cloneNode(true)
            bigImg.id = "main-img";
            document.querySelector("#big-image").appendChild(bigImg);
        }

    })
}





repeatWhileMouseOver = (element, action, time) => {
    var interval = null;
    element.addEventListener('mouseover', function () {
        interval = setInterval(action, time);
    });

    element.addEventListener('mouseout', function () {
        clearInterval(interval);
    });
}

repeatWhileMouseOver(document.querySelector("#left-row-btn"), moveLeft, 500);
repeatWhileMouseOver(document.querySelector("#right-row-btn"), moveRight, 500);





