var pics = ["imgs/pic1.jpg", "imgs/pic2.jpg", "imgs/pic3.jpg", "imgs/pic4.jpg", "imgs/pic5.jpg"];
var slider = document.querySelector("#slider");
var big_pic_container = document.querySelector("#big_pic_container");

function remove_hidden_Imgs() {
    slider.querySelectorAll(".hide").forEach(hiddenImg => {
        slider.removeChild(hiddenImg);
    });

    big_pic_container.querySelectorAll(".hide").forEach(hiddenImg => {
        big_pic_container.removeChild(hiddenImg);
    });
}

//animate_left_to_right
function move_left() {
    remove_hidden_Imgs();

    //change the pic array to be like the slider
    var movedPic = pics.pop();
    pics.unshift(movedPic);  


    //change the slider in the ui
    var lastImg = slider.lastChild;
    var clone_lastImg = lastImg.cloneNode();
    clone_lastImg.classList.add("animate_left_to_right");
    lastImg.classList.add("hide");
    slider.prepend(clone_lastImg);


    //change the big img in the ui
    var lastImg_big = big_pic_container.lastChild;
    lastImg_big.classList.add("hide");
    var newImg = creatImgElement(pics[0], "big_pic");
    newImg.classList.add("animate_left_to_right");
    big_pic_container.prepend(newImg);
}

//animate_right_to_left
function move_right() {
    remove_hidden_Imgs();

    //change the pic array to be like the slider
    var movedPic = pics.shift();
    pics.push(movedPic);

    //change the slider in the ui
    var firstImg = slider.firstChild;
    var clone_firstImg = firstImg.cloneNode();
    firstImg.classList.add("hide");
    slider.appendChild(clone_firstImg);

    //change the big img in the ui
    var firstImg_big = big_pic_container.firstChild;
    firstImg_big.classList.add("hide");
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