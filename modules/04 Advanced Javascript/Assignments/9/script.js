function showThisImg(){
    element = this; 
    var currentShown = document.getElementById("current-shown");
    var selected = document.getElementsByClassName("selected");
    currentShown.src=element.src;
    selected[0].classList.toggle("selected");
    element.setAttribute("class", "img selected");
    element.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
    localStorage.setItem("selectedID",element.id);
}
function moveLeft(){
    var selectedID = document.getElementsByClassName("selected")[0].id;
    var index = selectedID.replace("img","");
    index = Number(index);
    var images = document.getElementsByClassName("img");
    var newSelectedElement;
    if(index===0){
        newSelectedElement=document.getElementById("img"+(images.length-1))
    }
    else{
        newSelectedElement=document.getElementById("img"+(index-1));
    }
    showThisImg.call(newSelectedElement);
}
function moveRight(){
    var selectedID = document.getElementsByClassName("selected")[0].id;
    var index = selectedID.replace("img","");
    index = Number(index);
    var images = document.getElementsByClassName("img");
    var newSelectedElement;
    if(index===images.length-1){
        newSelectedElement=document.getElementById("img0")
    }
    else{
        newSelectedElement=document.getElementById("img"+(index+1));
    }
    showThisImg.call(newSelectedElement);
}
function scrollRight1(element){
    var lowerGallery = document.getElementById("lower-gallery");
    lowerGallery.scrollLeft += 4;
    scrolling = window.setTimeout(function() {
        scrollRight1();
    }, 10);
}
function scrollLeft1(element){
    var lowerGallery = document.getElementById("lower-gallery");
    lowerGallery.scrollLeft -= 4;
    scrolling = window.setTimeout(function() {
        scrollLeft1();
    }, 10);
}
function stop_scroll(){
    window.clearTimeout(scrolling);
}

class Img{
    constructor(id,src){
        this.id = id;
        this.src = src;
    }
    renderImg(){
        let imgElement = document.createElement("img");
        imgElement.src = this.src;
        console.log(this.src);
        imgElement.id = `img${this.id}`;
        imgElement.addEventListener("click",showThisImg);
        if(this.id===0)
            imgElement.className = 'img selected';
        else
            imgElement.className = 'img'
        return imgElement;
    }
}
class Gallery{
    constructor(){
        this.images = [];
    }
    insertToGallery(img){
        this.images.push(img);
    }
    renderGallery(){
        const container = document.getElementById("lower-gallery");
        for(let i of this.images){
            let imgElement = i.renderImg();
            container.appendChild(imgElement);
            if(i.id===0){
                showThisImg.call(imgElement);
            }
        }
    }
    loadSelectedFromLS(){
        let id = localStorage.getItem("selectedID");
        let selected = document.getElementById(id);
        showThisImg.call(selected);
    }
}

let gal = new Gallery;

fetch("https://picsum.photos/list")
.then(
    function(data){
        data.json().then(
            function(json){
                for(let i=0;i<json.length;i++){
                    let img = new Img(i,`https://picsum.photos/200/300?image=${json[i].id}`);
                    gal.images.push(img);
                }
                gal.renderGallery();
            }
        )
    }
)