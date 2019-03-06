var pics = ["imgs/pic1.jpg", "imgs/pic2.jpg", "imgs/pic3.jpg", "imgs/pic4.jpg", "imgs/pic5.jpg"];
var slider = document.querySelector("#slider");
var big_pic_container = document.querySelector("#big_pic_container");


function move_left() {

}

function move_right() {
    //change the pic array to be like the slider
    var movedPic = pics.shift();
    pics.push(movedPic);

    //check if the first img is hidden - if hidden remove from the list
    if (slider.childNodes[0].classList.value.includes("hide")) {
        slider.removeChild(slider.childNodes[0]);
    }

    //change the slider in the ui
    var firstImg = slider.childNodes[0];
    var clone_firstImg = firstImg.cloneNode();
    firstImg.classList.add("hide");
    slider.appendChild(clone_firstImg);

    //check if the first big img is hidden - if hidden remove from the list
    if (big_pic_container.childNodes[0].classList.value.includes("hide")) {
        big_pic_container.removeChild(big_pic_container.childNodes[0]);
    }

    //change the big img in the ui
    var firstImg = big_pic_container.childNodes[0];
    firstImg.classList.add("hide");
    var newImg = creatImgElement(pics[0], "big_pic");
    big_pic_container.appendChild(newImg);
}

function creatImgElement(src, css_class) {
    var picEl = document.createElement("img");
    picEl.src = src;
    picEl.classList.add(css_class);
    return picEl;
}

function onPageInit() {
    pics.forEach(src => {
        var picEl = creatImgElement(src, "small_pic");
        slider.appendChild(picEl);
    });

    var bigPic = creatImgElement(pics[0], "big_pic");
    big_pic_container.appendChild(bigPic);
}

onPageInit();