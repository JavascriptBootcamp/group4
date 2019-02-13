
var linkImgList = [];
var page;


function addImg() {
    var wiki = document.querySelector("#wiki").value;
    var img = document.querySelector("#img").value;
    var aElem = document.createElement("a");
    aElem.href = wiki;
    var imgElem = document.createElement("img");
    imgElem.src = img;
    imgElem.width = "300";
    imgElem.height = "200";
    var imgHolder = document.querySelector("#imgHolder");
    aElem.appendChild(imgElem);
    linkImgList.push(aElem);
    if (linkImgList.length > 12 * page) {
        page++;
        footer = document.querySelector("#paging");
        a = document.createElement("a");
        a.href = "#"
        a.innerHTML = " , " + page;
        a.onclick = function (event) {
            pageClick(event)
        }
        footer.appendChild(a);
        paging(linkImgList, page, aElem);
    }
    else
        imgHolder.appendChild(aElem);


}
function load() {
    page = 1;
    imgHolder = document.querySelector("#imgHolder").children;
    for (var i = 0; i < imgHolder.length; i++) {
        linkImgList.push(imgHolder[i])
    }
}
function paging(imgList, page, aElem) {
    document.querySelector("#imgHolder").remove();
    var newImgHolder = document.createElement("div");
    newImgHolder.id = "imgHolder";
    for (var i = 12 * (page - 1); i < imgList.length; i++) {
        newImgHolder.appendChild(aElem)
    }
    document.querySelector("#container").appendChild(newImgHolder)
}
function pageClick(e) {
    if (e.srcElement.parentElement.id === "paging") {
        var selectedPage = Number(e.srcElement.innerHTML.replace(' , ', ''))
        if (page > selectedPage) {
            document.querySelector("#add").style.display = "none";
        }
        else {
            document.querySelector("#add").style.display = "block";
        }
        document.querySelector("#imgHolder").remove();
        imgHolder = document.createElement("div");
        imgHolder.id = "imgHolder";
        if (page > selectedPage) {
            for (var i = (12 * (selectedPage - 1)); i < (12 * selectedPage); i++) {
                imgHolder.appendChild(linkImgList[i])
            }
        }
        else {
            for (var i = (12 * (selectedPage - 1)); i < linkImgList.length; i++) {
                imgHolder.appendChild(linkImgList[i])
            }
        }
        document.querySelector("#container").appendChild(imgHolder);
    }
}