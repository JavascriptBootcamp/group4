function Video(title, artistName, description, videoSrc, imgSrc){
    this.title = title;
    this.artistName = artistName;
    this.description = description;
    this.videoSrc = videoSrc;
    this.imgSrc = imgSrc;

    var divVideo = document.createElement("div");
    divVideo.className = "video";

    var linkVideo = document.createElement("a");
    linkVideo.href = "#";
    linkVideo.addEventListener('click', function(){
        Player.play(title, artistName, description, videoSrc);
    });

    var imgVideo = document.createElement("img");
    imgVideo.src = imgSrc;

    var divVideoTitle = document.createElement("div");
    divVideoTitle.className = "video-title";
    divVideoTitle.innerText = title;

    var divVideoArtist = document.createElement("div");
    divVideoArtist.className = "video-artist";
    divVideoArtist.innerText = artistName;

    linkVideo.appendChild(imgVideo);
    divVideo.appendChild(linkVideo);
    divVideo.appendChild(divVideoTitle);
    divVideo.appendChild(divVideoArtist);

    document.getElementById("menu").appendChild(divVideo);
}