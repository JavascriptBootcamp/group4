var tm1 = new Thumbnails("tm1", "https://media.wired.com/photos/59bafdf204afdc5248726f5c/master/w_2400,c_limit/BMW-TA.jpg", 0);
var tm2 = new Thumbnails("tm2", "https://media.wired.com/photos/5b86fce8900cb57bbfd1e7ee/master/pass/Jaguar_I-PACE_S_Indus-Silver_065.jpg", 0);
var tm3 = new Thumbnails("tm3", "https://cdn.vox-cdn.com/uploads/chorus_image/image/59319581/A182669_medium.0.jpg", 0);
var tm4 = new Thumbnails("tm1", "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/01/104623144-New-Ford-Mustang.1910x1000.jpg", 0);
var tm5 = new Thumbnails("tm2", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEK6B96lBYzg9Ioj4AseQUKM7AxaJNhn1sLzliYA64dX-dIObH", 0);
var tm6 = new Thumbnails("tm3", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaTpUIk2Rfd83riQDrZ5Zg8vMf6RlhLX5JLuV57ETpisWupD6y", 0);
var tm7 = new Thumbnails("tm1", "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/01/104623144-New-Ford-Mustang.1910x1000.jpg", 0);
var tm8 = new Thumbnails("tm2", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrno0DFImNi60kWqf4zpiVnjqp--HPeD0YACixwBMMmRrKqHfjNg", 0);
var tm9 = new Thumbnails("tm3", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfChu9QuX-Mv-og1yF7zTfEbgrUT9kQt9zKE9reOPEnxDnj1iA", 0);
var tm10 = new Thumbnails("tm3", "https://www.cdn.renault.com/content/dam/Renault/master/concept-cars/renault-concept-car-014.jpg.ximg.s_12_h.smart.jpg", 0);
var obj = { tm1, tm2, tm3, tm4, tm5, tm6, tm7, tm8, tm9, tm10 };
var wrapper = document.getElementById("wrapper");

var data = getData();
if (data) {
    data = data.split(',');
    var index = 0;
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            obj[key].numberoflikes = data[index];
            index++;
        }
    }
    fillContent();
}
else {
    fillContent();
}

function fillContent() {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            var imgwrapper = document.createElement("div");
            var img = document.createElement("img");
            var btnlike = document.createElement("button");
            var numberoflikes = document.createElement("div");
            btnlike.id = key;
            btnlike.className = "btn-like";
            btnlike.innerText = "LIKE";
            btnlike.onclick = function (e) {
                var name = e.target.id;
                obj[name].like(e);
            }
            img.src = obj[key].src;
            img.onclick = openImage;
            numberoflikes.className = "number-of-likes";
            numberoflikes.innerText = obj[key].numberoflikes;
            imgwrapper.className = "img-wrapper";
            imgwrapper.appendChild(img);
            imgwrapper.appendChild(btnlike);
            imgwrapper.appendChild(numberoflikes);
            wrapper.appendChild(imgwrapper);
        }
    }
}

function openImage(e) {
    var instush = document.getElementById("instush");
    var overlayer = document.getElementById("overlayer");
    overlayer.style.display = "block";
    overlayer.style.backgroundImage = "url(" + e.target.src + ")";
    instush.style.filter = "blur(2px)";
    overlayer.onclick = closeWindow;
}
function closeWindow(e) {
    var instush = document.getElementById("instush");
    var overlayer = document.getElementById("overlayer");
    overlayer.style.display = "none";
    instush.style.filter = "none";
}
function Thumbnails(name, src, numberoflikes) {
    this.name = name;
    this.src = src;
    this.numberoflikes = numberoflikes;
}
Thumbnails.prototype.like = function (e) {
    e.target.nextSibling.innerText = ++this.numberoflikes;
    saveNumberOfLikes();
}

function saveNumberOfLikes() {
    var arr = [];
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            arr.push(obj[key].numberoflikes);
        }
    }
    saveData(arr);
}

window.onbeforeunload = function (event) {
    //saveNumberOfLikes();
}
