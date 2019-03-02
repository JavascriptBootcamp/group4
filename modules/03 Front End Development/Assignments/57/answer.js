var flexItemNum = 0;

function FlexItem(imageSource, likesNum) {
    this.imageSource = imageSource;
    this.likesNum = likesNum;
}

FlexItem.prototype.addLike = function() {
    this.likesNum++;
}


var flexItem1 = new FlexItem("https://upload.wikimedia.org/wikipedia/commons/8/87/TVE_La1_-_Logo_2008.png", 0);
var flexItem2 = new FlexItem("http://nebula.wsimg.com/cfb133246fb6949808b53af3421575e9?AccessKeyId=5F480AA257F587756A6D&disposition=0&alloworigin=1", 0);
var flexItem3 = new FlexItem("https://cdn.dribbble.com/users/271641/screenshots/1531994/num3.gif", 0);
var flexItem4 = new FlexItem("https://steamuserimages-a.akamaihd.net/ugc/932690417985966398/2E1D48DE5B5F4D5CBCA137E9772474BD9098BC16/", 0);
var flexItem5 = new FlexItem("https://static.planetminecraft.com/files/resource_media/screenshot/1249/5_4330267_lrg.jpg", 0);
var flexItem6 = new FlexItem("https://blog.solidsignal.com/wp-content/uploads/2012/07/number6.jpg", 0);
var flexItem7 = new FlexItem("https://steemitimages.com/DQmfCYiikJ7zeJLoRTD14xWwJ3r9mdUErf43tBwGf1ve9La/php-7.jpg", 0);
var flexItem8 = new FlexItem("http://denigear.com/wp-content/uploads/sites/2/2011/10/8_key_person_skills.jpg", 0);
var flexItem9 = new FlexItem("http://mathematics-in-europe.eu/wp-content/uploads/2016/02/3_playing_cards-3.jpg", 0);
var flexItem10 = new FlexItem("https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/04/windows-10-redmond-796x448.jpg", 0);

var flexItemsObj = {flexItem1, flexItem2, flexItem3, flexItem4, flexItem5, flexItem6, flexItem7, flexItem8, flexItem9, flexItem10};


function addAllContent() {
    for (var key in flexItemsObj) {
        if(flexItemsObj.hasOwnProperty(key)) {
            flexItemNum++;
            
            var flexBoxElem = document.getElementById("inner-wrapper");

            var flexItemElem = document.createElement("div");
            flexItemElem.className = "flex-item";

            var imageInFlexItemElem = document.createElement("img");
            imageInFlexItemElem.className = "flex-item-image";
            imageInFlexItemElem.src  = flexItemsObj[key].imageSource;
            imageInFlexItemElem.onclick = displayImageOnMiddle;

            var likeButtonElem = document.createElement("button");
            likeButtonElem.className = "like-button";
            //likeButtonElem.id = key + "LikeButton";
            likeButtonElem.number = flexItemNum;
            likeButtonElem.innerText = "LIKE";
            //likeButtonElem.addEventListener("click", displayCurrentLikesNum);
            likeButtonElem.onclick = displayCurrentLikesNum;
            
            var displayLikesNumElem = document.createElement("input");
            displayLikesNumElem.disabled = true;
            displayLikesNumElem.className = "display-likes-num";
            displayLikesNumElem.number = flexItemNum;
            
            if( localStorage.getItem(displayLikesNumElem.number)) displayLikesNumElem.value =  localStorage.getItem(displayLikesNumElem.number);
            else displayLikesNumElem.value = flexItemsObj[key].likesNum;

            flexBoxElem.appendChild(flexItemElem);
            flexItemElem.appendChild(imageInFlexItemElem);
            flexItemElem.appendChild(likeButtonElem);
            flexItemElem.appendChild(displayLikesNumElem);
        }
    }
}
addAllContent();


function displayCurrentLikesNum() {
    var displayLikesNumElems = document.querySelectorAll(".display-likes-num");
    
    for(var i = 0; i < displayLikesNumElems.length; i++) {
        if(displayLikesNumElems[i].number === this.number) {
            displayLikesNumElems[i].value++;  

            localStorage.setItem(displayLikesNumElems[i].number, displayLikesNumElems[i].value);
        } 
    }
}


function displayImageOnMiddle(event) {
    var middleOfScreenElem = document.getElementById("middle-of-screen");
    var flexBoxElem = document.getElementById("inner-wrapper");

    middleOfScreenElem.style.display = "block";
    middleOfScreenElem.style.backgroundImage = "url(" + event.target.src + ")";
    middleOfScreenElem.onclick = undisplayImageOnMiddle;

    flexBoxElem.style.filter = "blur(3px)";
    // flexBoxElem.style.filter = "invert(100%)";
    flexBoxElem.style.filter = "opacity(20%)";
}

function undisplayImageOnMiddle(event) {
    var middleOfScreenElem = document.getElementById("middle-of-screen");
    var flexBoxElem = document.getElementById("inner-wrapper");

    middleOfScreenElem.style.display = "none";
    flexBoxElem.style.filter = "none";
}

//localStorage.clear();