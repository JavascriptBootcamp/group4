
var imagesArr = [];
function Image(src, post_url) {
    this._src = src;
    this._post_url = post_url
}
function insertPicToArr(jsonData) {
    var currImg, post_url, src;
    for (const index in jsonData) {
        if (jsonData.hasOwnProperty(index)) {
            const element = jsonData[index];
            post_url = element.post_url;
            src = "https://picsum.photos/200/300?image=" + index;

            currImg = new Image(src, post_url);
            imagesArr.push(currImg);
        }
    }
    // console.log(imagesArr);
    fillBigPic()

}
function fillBigPic() {
    var largePicDiv = document.getElementById("largePic");

    var imsgeDiv = document.createElement("div");
    var imageEl = document.createElement("img");
    imageEl.id = "largeImg";
    // console.log(imagesArr)
    imageEl.src = imagesArr[getLargePic()]._src;
    imsgeDiv.appendChild(imageEl);
    largePicDiv.appendChild(imageEl);
}
function init() {
    // localStorage.clear()
    fetch('https://picsum.photos/list')
        .then(res => res.json())//response type
        .then(jsonData => {
            insertPicToArr(jsonData);
            DisplayPic();
        });
    //console.log(data)); //log the data;

    // insertPicToArr();
    var largePicDiv = document.getElementById("largePic");
    var arrowLeftDiv = document.createElement("div");
    arrowLeftDiv.className = "arrow-left";
    arrowLeftDiv.onclick = prevPic;
    largePicDiv.appendChild(arrowLeftDiv);



    var arrowRightDiv = document.createElement("div");
    arrowRightDiv.className = "arrow-right";
    arrowRightDiv.onclick = nextPic;
    largePicDiv.appendChild(arrowRightDiv);
    DisplayPic();

}
function DisplayPic() {
    var restPicDiv = document.getElementById("restPic");
    for (let index = 0; index < imagesArr.length; index++) {
        var imageEl = document.createElement("img");
        imageEl.id = index;
        imageEl.alt = index;
        imageEl.src = imagesArr[index]._src;
        imageEl.onclick = setPic;

        imageEl.addEventListener('error', function () {
            this.src='loading-indicator-dribbble2.gif'
        })
        // imageEl.onerror=function () {
        //     this.src='loading-indicator-dribbble2.gif'
        // }
        // "this.onerror=null;this.src='loading-indicator-dribbble2.gif';"
        // imageEl.onerror="this.src='loading-indicator-dribbble2.gif'"
        // onerror="this.onerror=null;this.src='https://placeimg.com/200/300/animals';"

        restPicDiv.appendChild(imageEl);
    }
}

function setLargePic(picIndex) {
    localStorage.setItem("bigPic", picIndex)

}
function getLargePic() {
    return localStorage.getItem('bigPic') ? Number(localStorage.getItem('bigPic')) : 0;//imagesArr[0]._src;

}
function setPic(params) {

    console.log(params);
    var picIndex = params.target.id;
    setLargePic(picIndex)
    // setLargePic(imagesArr[picIndex]);
    console.log(picIndex);
    document.getElementById("largeImg").src = imagesArr[picIndex]._src;

}
function nextPic(params) {

    console.log(getLargePic());

    var nextIndexPic = (getLargePic() + 1) % imagesArr.length;
    setLargePic(nextIndexPic)

    // setLargePic(imagesArr[nextIndexPic]);
    console.log(nextIndexPic);
    document.getElementById("largeImg").src = imagesArr[nextIndexPic]._src

}
function prevPic(params) {

    var prevIndexPic = getLargePic() - 1 > 0 ? getLargePic() - 1 : 0;
    setLargePic(prevIndexPic)

    // setLargePic(imagesArr[nextIndexPic]);
    console.log(prevIndexPic);
    document.getElementById("largeImg").src = imagesArr[prevIndexPic]._src;

}
