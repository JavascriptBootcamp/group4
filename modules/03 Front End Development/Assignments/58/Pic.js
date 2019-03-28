function Pic(name, videoSrc){
    this.name = name;
    this.videoSrc = videoSrc;
    // this.imgSrc = imgSrc;

    var divVideo = document.createElement("div");
    divVideo.className = "video";

    var linkVideo = document.createElement("a");
    linkVideo.href = "#";
    linkVideo.addEventListener('click', function(){
        Player.play(name,  videoSrc);
    });

    var imgVideo = document.createElement("img");
    imgVideo.src = videoSrc;

    var divVideoname = document.createElement("div");
    divVideoname.className = "video-name";
    divVideoname.innerText = name;


    linkVideo.appendChild(imgVideo);
    divVideo.appendChild(linkVideo);
    divVideo.appendChild(divVideoname);

    document.getElementById("menu").appendChild(divVideo);
}