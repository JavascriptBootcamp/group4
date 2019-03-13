var count = 0;
var data = null;
var tm1 = new Thumbnails();
var tm2 = new Thumbnails();
var tm3 = new Thumbnails();
var tm4 = new Thumbnails();
var tm5 = new Thumbnails();
var tm6 = new Thumbnails();
var tm7 = new Thumbnails();
var tm8 = new Thumbnails();
var tm9 = new Thumbnails();
var tm10 = new Thumbnails();
var obj = {};
function saveData(bigPic) {
    localStorage.setItem('instush', bigPic);
}

function getData() {
    return localStorage.getItem('instush');
}

function saveName(bigPicName) {
    localStorage.setItem('name', bigPicName);
}

function getName() {
    return localStorage.getItem('name');
}

function saveLink(anc) {
    localStorage.setItem('anchor', anc);
}

function getLink() {
    return localStorage.getItem('anchor');
}

function toggleLoading(show) {
    document.getElementById("placeholder").innerHTML = show ? "<img src='https://cdn.dribbble.com/users/1092116/screenshots/2857934/loading-indicator-dribbble2.gif' />" : "";
}
function Thumbnails() {
    var self = this;
    this.name = null;
    this.src = null;
    this.link = null;
    (function fetchTheImage() {
        toggleLoading(true);
        fetch('https://picsum.photos/list').then(
            function (stream) {
                stream.json().then(
                    function (json) {
                        self.link = json[count].post_url;
                        self.src = 'https://picsum.photos/200/300?image=' + json[count++].id;
                        console.log(self.src);
                        self.name = 'tm' + count;
                        console.log(self.name);
                        obj[self.name] = self;
                        console.log('object:', obj);

                        if (count === 10) {
                            toggleLoading(false);
                            data = getData();
                            if (data !== 'http://127.0.0.1:5500/group4/modules/04%20Advanced%20Javascript/Assignments/9/answer.html') {
                                console.log('not nullll', data);
                                var pic = document.getElementById("big-picture-img");
                                var anchor = pic.parentNode;
                                pic.src = data;
                                pic.setAttribute("imgnumber", getName());
                                anchor.setAttribute('href', getLink());
                                initialThumbnails();
                            }
                            else {
                                var Img = document.getElementById("big-picture-img");
                                var anchor = Img.parentNode;
                                console.log('ffff:', obj['tm1']);
                                Img.src = obj['tm1'].src;
                                Img.setAttribute("imgnumber", 'tm1');
                                anchor.setAttribute('href', obj['tm1'].link);
                                initialThumbnails();
                            }
                        }
                    }
                )
            }
        );
    })();
}
Thumbnails.prototype.setimage = function (e) {
    var pic = document.getElementById("big-picture-img");
    var newImg = e.target.attributes[1].nodeValue;
    pic.src = e.target.src;
    pic.setAttribute("imgnumber", newImg);
}
