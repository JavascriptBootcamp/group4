
const imgList = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq4TU1tb90RD7iLO2SvPfoD-wERzhEUoy8vhHt-aDP_6L3QEHV",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhFu2t_xvtxdNH8x9vmC06ymGvO9__o4-zp4NbiE_OvoVwJo5org",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUwdJufZzlpXHm7P8HHCWyecoaKr-hRTsINpg33Rq6Xs29A576",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmW5B7IdlKU57zwdJauuIkSltFQw0Q-cUDjj-Xg87WmSFXD1Kd",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT3e6w60gx17oYUiz6vnPD3xWQ7byDAvNXd4BTgG-GGb8KWDbngA",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7TBc12xHKa3zHIBbcVjF1YPmaBq7kgRELdVu3W3hqiGYj0Tr",
    "http://i.imgur.com/ck2sNoY.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEDSD8DxzN4Q3AUQgRWzOa0eUXSRAhDdQudfnVsL1X-aPPoRkr",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDiBI3YndHWhnCRXysUKuniGedzcKHDbo-QcXowfk2rvD9zW3yCw",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4SwMl2nSoli9LHbzseENOPXLFfXF8rP-suNNxNOV810gDO5Op"
];
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
    else{
        filler(indexStartEnd[0], indexStartEnd[1], isFillCalled);
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

mainFiller = (start, end) => {
    sessionStorage.setItem("start", start);
    sessionStorage.setItem("end", end);
    for (let i = start; i < end; i++) {
        let img = document.createElement("img");
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
    }
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

