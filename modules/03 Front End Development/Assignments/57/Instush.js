imgSrc = ["images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg",
"images/pic4.jpg", "images/pic5.jpg", "images/pic6.jpg", "images/pic7.jpg",
"images/pic8.jpg", "images/pic9.jpg", "images/pic10.jpg"];

imgsArr = [];

//Img class
function Img(src) {
    this.likeCounter = 0;
    this.src = src;

    Img.prototype.incres_likes = () => {
        this.likeCounter++;
    }

    Img.prototype.get_likes = () => {
        return this.likeCounter;
    }
}

function likeClick(like_span_id) {
    var index = like_span_id.split("_")[2];
    var imgObj = imgsArr[index];

    var span = document.querySelector("#"+like_span_id);
    imgObj.likeCounter++;
    span.innerText = imgObj.likeCounter;
}

function hide(selected_pic_div) {
    document.querySelector("#selected_pic").classList.add("hide");
    document.querySelector("header").classList.remove("bluer_effect");
    document.querySelector("#gallery").classList.remove("bluer_effect");
}

function creat_img_element(imgObj, arryIndex) {
    var src = imgObj.src;
    //<div class="img_container">
    var imgContainer = document.createElement("div");
    imgContainer.classList.add("img_container");

    //<img src="images/pic1.jpg" id="pic_arryIndex">
    var img = document.createElement("img");
    img.src = src;
    img.id = "pic_"+arryIndex;
    img.onclick = function (event) {
        document.querySelector("header").classList.add("bluer_effect");
        document.querySelector("#gallery").classList.add("bluer_effect");
        document.querySelector("#selected_pic").background = 'url("'+event.target.src+'")';
        document.querySelector("#selected_pic").classList.remove("hide");   
    }

    imgContainer.appendChild(img);

    //<div class="img_bottom">
    var imgBottom = document.createElement("div");
    imgBottom.classList.add("img_bottom");

    //<button class="like_btn">LIKE</button>
    var btn = document.createElement("button");
    btn.classList.add("like_btn");
    btn.innerText = "LIKE";
    btn.onclick = function () {
        likeClick("likes_pic_"+arryIndex);
    };

    //<div class="like_counter_container">
    var likeCounterContainer = document.createElement("div");
    likeCounterContainer.classList.add("like_counter_container");

    //<span id="like_pic_arryIndex" class="like_counter">imgObj.get_likes()</span>
    var likeCounter = document.createElement("span");
    likeCounter.classList.add("like_counter");
    likeCounter.id = "likes_pic_"+arryIndex;
    likeCounter.innerText = imgObj.get_likes();

    likeCounterContainer.appendChild(likeCounter);

    imgBottom.appendChild(btn);
    imgBottom.appendChild(likeCounterContainer);
    imgContainer.appendChild(imgBottom); 
    
    return imgContainer;
}

function drawGallery() {
    var galleryDiv = document.querySelector("#gallery");
    imgsArr.forEach((img, index) => {
        var imgEl = creat_img_element(img, index);
        galleryDiv.appendChild(imgEl);
    });
}


function onPageInit() {
    var imgs = localStorage.getItem("Instush_Imgs");
    if(imgs) {
        //get the imgs arr from the local storage
        imgsArr = imgs;
    }
    else {//init the first img arr
        imgSrc.forEach(src => {
            var img = new Img(src);
            imgsArr.push(img);
        });
    }

    drawGallery();
    
}

onPageInit();

