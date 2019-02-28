var tm1 = new Thumbnail("tm1", "http://d3us2i0tqwa7m7.cloudfront.net/pulses/5453380488410000/res_original.jpg", "https://www.youtube.com/embed/4q9UafsiQ6k", "The standard Lorem Ipsum passage, used since the 1500s", "artist1", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy artist1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the industry's standard dummy");
var tm2 = new Thumbnail("tm2", "http://images.mtvnn.com/46794961c405e888fe75a505b96a150f/630x354_.jpg", "https://www.youtube.com/embed/973ibay5504", "title2", "artist2", "description2");
var tm3 = new Thumbnail("tm3", "https://images-na.ssl-images-amazon.com/images/I/61StCk7Si8L._SY355_.jpg", "https://www.youtube.com/embed/rs6Y4kZ8qtw", "title3", "artist3", "description3");
var tm4 = new Thumbnail("tm4", "http://images.mtvnn.com/46794961c405e888fe75a505b96a150f/630x354_.jpg", "https://www.youtube.com/embed/973ibay5504", "title4", "artist4", "description4");
var tm5 = new Thumbnail("tm5", "http://d3us2i0tqwa7m7.cloudfront.net/pulses/5453380488410000/res_original.jpg", "https://www.youtube.com/embed/4q9UafsiQ6k", "title5", "artist5", "description5");
var tm6 = new Thumbnail("tm6", "https://images-na.ssl-images-amazon.com/images/I/61StCk7Si8L._SY355_.jpg", "https://www.youtube.com/embed/rs6Y4kZ8qtw", "title6", "artist6", "description6");
var tm7 = new Thumbnail("tm7", "http://d3us2i0tqwa7m7.cloudfront.net/pulses/5453380488410000/res_original.jpg", "https://www.youtube.com/embed/4q9UafsiQ6k", "title7", "artist7", "description7");
var tm8 = new Thumbnail("tm8", "http://images.mtvnn.com/46794961c405e888fe75a505b96a150f/630x354_.jpg", "https://www.youtube.com/embed/973ibay5504", "title2", "artist8", "description8");
var tm9 = new Thumbnail("tm9", "http://d3us2i0tqwa7m7.cloudfront.net/pulses/5453380488410000/res_original.jpg", "https://www.youtube.com/embed/4q9UafsiQ6k", "title9", "artist9", "description9");
var tm10 = new Thumbnail("tm10", "http://images.mtvnn.com/46794961c405e888fe75a505b96a150f/630x354_.jpg", "https://www.youtube.com/embed/973ibay5504", "title10", "artist10", "Lorem Ipsum has been the industry's standard dummy artist1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the industry's standard dummy");
var obj = { tm1, tm2, tm3, tm4, tm5, tm6, tm7, tm8, tm9, tm10 }
var data = getData();

function Thumbnail(name, image, video, title, artist, description) {
    this.name = name;
    this.image = image;
    this.video = video;
    this.title = title;
    this.artist = artist;
    this.description = description;
}

function initThumbnails() {
    var content = document.getElementById("content");
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            var video = document.createElement("div");
            var img = document.createElement("img");
            var videoDetails = document.createElement("div");
            var title = document.createElement("div");
            var description = document.createElement("div");
            var subdesc;
            title.className = "title";
            title.innerText = obj[key].title;
            description.className = "description";
            subdesc = obj[key].description.length;
            subdesc = subdesc > 200 ? obj[key].description.substring(0,200) + "...": obj[key].description;
            description.innerText = subdesc;
            videoDetails.className = "video-details";
            video.className = "video";
            img.src = obj[key].image;
            img.id = key;
            img.onclick = function (e) {
                var ins = e.target.id;
                obj[ins].replaceSource(e, ins);
            }
            videoDetails.appendChild(title);
            videoDetails.appendChild(description);
            video.appendChild(img);
            video.appendChild(videoDetails);
            content.appendChild(video);
        }
    }
}

Thumbnail.prototype.replaceSource = function (event, ins) {
    var title = document.querySelectorAll("#player .title")[0];
    var artist = document.querySelectorAll("#player .artist")[0];
    var description = document.querySelectorAll("#player .description")[0];
    var iframe = document.getElementsByTagName("iframe")[0];
    iframe.src = obj[ins].video;
    title.innerText = obj[ins].title;
    artist.innerText = obj[ins].artist;
    description.innerText = obj[ins].description;
}

window.onbeforeunload = function (event) {
    var iframe = document.getElementById("player").innerHTML;
    saveData(iframe);
};

if (data) {
    var iframe = document.getElementById("player").innerHTML = data;
}
initThumbnails();