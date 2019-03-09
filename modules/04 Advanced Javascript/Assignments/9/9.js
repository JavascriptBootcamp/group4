var pics = ["imgs/loading.gif", "imgs/loading.gif", "imgs/loading.gif", "imgs/loading.gif"];
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
    var clone_lastImg = creatImgElement(lastImg.src, "small_pic");
    clone_lastImg.classList.add("animate_left_to_right");
    lastImg.classList.add("hide");
    slider.prepend(clone_lastImg);


    //change the big img in the ui
    var lastImg_big = big_pic_container.lastChild;
    lastImg_big.classList.add("hide");
    var newImg = creatImgElement(pics[0], "big_pic");
    newImg.classList.add("animate_left_to_right");
    big_pic_container.prepend(newImg);

    //save pics arr in the local storage
    localStorage.setItem("ex56_pics", pics);
}

function move_right() {
    remove_hidden_Imgs();
    remove_animation_from_Imgs();

    //change the pic array to be like the slider
    var movedPic = pics.shift();
    pics.push(movedPic);

    //change the slider in the ui
    var firstImg = slider.firstChild;
    var clone_firstImg = creatImgElement(firstImg.src, "small_pic");
    firstImg.classList.add("hide");
    slider.appendChild(clone_firstImg);

    //change the big img in the ui
    var firstImg_big = big_pic_container.firstChild;
    firstImg_big.classList.add("hide");
    var newImg = creatImgElement(pics[0], "big_pic");
    big_pic_container.appendChild(newImg);

    //save pics arr in the local storage
    localStorage.setItem("ex56_pics", pics);
}

function replace_big_img_src(event) {
    let src = event.target.src;
    //selecting the first big pictuer that not hidden
    document.querySelector(".big_pic:not(.hide)").src = src;
    //replace in the array
    let oldFirstImg = pics[0];
    let index =pics.indexOf(src);
    pics[0] = src;
    pics[index] = oldFirstImg;

    //save pics arr in the local storage
    localStorage.setItem("ex56_pics", pics);
}

function creatImgElement(src, css_class) {
    var picEl = document.createElement("img");
    picEl.src = src;
    picEl.classList.add(css_class);
    if (css_class === "small_pic") {
        picEl.onclick = replace_big_img_src;
    }

    return picEl;
}


function set_imges_on_screen() {
    pics.forEach(src => {
        var picEl = creatImgElement(src, "small_pic");
        slider.appendChild(picEl);
    });

    var bigPic = creatImgElement(pics[0], "big_pic");
    big_pic_container.appendChild(bigPic);

}

function onPageInit() {
    //set loading gif first
    set_imges_on_screen();
    //getting pictuers from server
    fetch("https://picsum.photos/list")
        .then(function (response) {
            return response.json();
        })
        .then(function (server_Json) {
            //clear the pictur arr from the loading src && clear the screen from the loading pics
            pics = [];
            slider.innerHTML = "";
            big_pic_container.innerHTML = "";
            //check if the pics array allredy in local storage
            let pics_src = localStorage.getItem("ex56_pics");
            if (pics_src) {
                pics = pics_src.split(",");
            }
            else {
                for (let imgEl of server_Json) {
                    let img_src = `https://picsum.photos/400/400?image=${imgEl.id}`;
                    pics.push(img_src);
                }
            }
            //set the imges after we end the loading fase
            set_imges_on_screen();
        });
}

onPageInit();