var tm1 = new Thumbnails("tm1", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqsw9q1gKQhk3M3krgRtn9vCgYaKDvQD_GgJdL-y-jNiJRLbgC");
var tm2 = new Thumbnails("tm2", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKIN7mbSbgvFXj2PXLzjXbC_NnVVOBoqHMgv9p8tw1KZuV-ngJGw");
var tm3 = new Thumbnails("tm3", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ82DqniYRM-q3SKuf-ziG1u9Fc4gGuD8O8exGkZazb6SurMllSmw");
var tm4 = new Thumbnails("tm4", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ4mFHp-axQIxtrs-yV_DRePjPn6C2tCT7EFnVAJUayne7ZfaG");
var tm5 = new Thumbnails("tm5", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf6ltr-w2OSqtk-nh4eVIpndpQncu3r6M3EfiVVR5s5cuEGVOk");
var tm6 = new Thumbnails("tm6", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0mrze3yjNQjIjRtfxVHYeRrDZwNrNV3Lq4FHq_l-Z1eKWrm71w");
var tm7 = new Thumbnails("tm7", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI7arfj-4VZnRls18ELncSRFACyqBCMcJLjZcxyCmr9DVC2qNrbA");
var tm8 = new Thumbnails("tm8", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfgKOVXDVIY2Yaq0a0rDLWoV0ks0zcQVDa6aCQVJVGcD6llupPPw");
var tm9 = new Thumbnails("tm9", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsQN-mcmQVIi2HLnAZhvJ-JCYZ1Yf7EtNlA1wVBf8gAYkh6T2r");
var tm10 = new Thumbnails("tm10", "https://www.barraquer.com/wp-content/uploads/2017/07/el-ojo-del-surfista-p-08-2017.jpg");
var arr = [ tm1, tm2, tm3, tm4, tm5, tm6, tm7, tm8, tm9, tm10 ]

var currentindex = 0;
var lsData = localStorage.getItem("currentindex");
if(lsData){
    console.log(lsData,currentindex)
    currentindex = lsData;
}
function Thumbnails(name, src) {
    this.name = name;
    this.src = src;
}

function fillData(){
    changeCurrentPicture(currentindex);


    var pictures = document.getElementById("pictures");
    var arrowLeft = document.getElementById("arrow-left");
    var arrowRight = document.getElementById("arrow-right");

    arrowLeft.onclick = onArrowLeftClicked;
    arrowRight.onclick = onArrowRightClicked;


    for(var i=0;i<arr.length;i++){
        var child = createImgElement(i);
        pictures.appendChild(child);
    }

}

function createImgElement(index){
    var wrapImg = document.createElement("div");
    var img = document.createElement("img");

    wrapImg.className = "wrap-img";
    img.src = arr[index].src;
    img.onclick = changeCurrentPicture.bind(null,index);
    
    wrapImg.appendChild(img);

    return wrapImg;
}

function onArrowLeftClicked(){
    if(currentindex > 0 ){
        currentindex--;
        changeCurrentPicture(currentindex);
    }
}

function onArrowRightClicked(){
    if(currentindex < 9 ){
        currentindex++;
        changeCurrentPicture(currentindex);
    }
}

function changeCurrentPicture(index){
    var src = arr[index].src;
    currentindex = index;
    document.getElementById("current-picture").childNodes[1].src = src;
}

function saveData(){
    localStorage.setItem("currentindex",currentindex);
}

function getData(){
    currentindex = localStorage.getItem("currentindex");
}

window.onbeforeunload = function(){
    saveData();
}





fillData();
