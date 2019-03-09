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

function remove_animation_from_Imgs() {
    slider.querySelectorAll(".animate_left_to_right").forEach(pic => {
        pic.classList.remove("animate_left_to_right");
    });

    big_pic_container.querySelectorAll(".animate_left_to_right").forEach(pic => {
        pic.classList.remove("animate_left_to_right");
    });
}

function move_left() {
    remove_hidden_Imgs();
    remove_animation_from_Imgs();

    //change the pic array to be like the slider
    var movedPic = pics.pop();
    pics.unshift(movedPic);  


    //change the slider in the ui     creatImgElement(src, css_class)
    var lastImg = slider.lastChild;
    var clone_lastImg = creatImgElement(lastImg.src,"small_pic");
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

function move_right() {
    remove_hidden_Imgs();
    remove_animation_from_Imgs();

    //change the pic array to be like the slider
    var movedPic = pics.shift();
    pics.push(movedPic);

    //change the slider in the ui
    var firstImg = slider.firstChild;
    var clone_firstImg = creatImgElement(firstImg.src,"small_pic");
    firstImg.classList.add("hide");
    slider.appendChild(clone_firstImg);

    //change the big img in the ui
    var firstImg_big = big_pic_container.firstChild;
    firstImg_big.classList.add("hide");
    var newImg = creatImgElement(pics[0], "big_pic");
    big_pic_container.appendChild(newImg);
}

function replace_big_img_src(event) {
    console.log(event.target);
    let src = event.target.src;
    //selecting the first big pictuer that not hidden
    document.querySelector(".big_pic:not(.hide)").src = src;
}

function creatImgElement(src, css_class) {
    var picEl = document.createElement("img");
    picEl.src = src;
    picEl.classList.add(css_class);
    if (css_class === "small_pic") {
        picEl.onclick = replace_big_img_src;
    }

    //save pics arr in the local storage
    localStorage.setItem("ex56_pics", pics);

    return picEl;
}

function onPageInit() {
    //check if the pics array allredy in local storage
    var pics_src = localStorage.getItem("ex56_pics");
    if(pics_src) {
        pics = pics_src.split(",");
    }

    pics.forEach(src => {
        var picEl = creatImgElement(src, "small_pic");
        slider.appendChild(picEl);
    });
    
    var bigPic = creatImgElement(pics[0], "big_pic");
    big_pic_container.appendChild(bigPic);
}

onPageInit();