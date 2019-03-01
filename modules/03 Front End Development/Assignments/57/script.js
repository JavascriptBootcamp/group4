function image(image) {
    this.image = image
    this.countLikes = 0;
}
var imageList = [];

function fill() {
    document.querySelectorAll(".img").forEach(img => {
        imageList.push(new image(img));
    })
    image.prototype.likes = function () {
        this.countLikes++;
    }
    // Saving likes data in local storage
    document.querySelectorAll(".count").forEach((likes,index) =>{
        if(localStorage.getItem(index) === null){
            likes.innerHTML = 0;    
        }
        else{
            likes.innerHTML = localStorage.getItem(index);
        }
    })
}
function like(e, index) {
    imageList[index].likes();
    e.srcElement.nextElementSibling.innerHTML = imageList[index].countLikes;
    localStorage.setItem(index, imageList[index].countLikes);

}
function blurr(e){
    div = document.createElement("div");
    imgElement = document.createElement("img");
    closeBtn =  document.createElement("button");
    closeBtn.innerHTML = "X"
    closeBtn.setAttribute("id","closeBtn");
    closeBtn.onclick = function(){
        location.reload();
    }
    imgElement.src = e.srcElement.src;
    imgElement.id = "center-image";
    div.appendChild(imgElement);
    div.appendChild(closeBtn);
    console.log(div)
    document.body.appendChild(div);
    document.querySelector("#picHolder").style = "filter: blur(8px);"
    document.querySelectorAll(".img, .likeBtn").forEach(elem => elem.onclick = null);
}