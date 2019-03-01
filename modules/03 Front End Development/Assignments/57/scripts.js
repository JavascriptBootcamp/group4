
var images = new Array(10);
var index = 0;
function Img(src) {
  this.src = src;
  this.like = 0;
  Img.prototype.countLike = function () {
    this.like++;
  }
}
images[0] = new Img("https://mayer-vet.com/wordpress-he/wp-contents/uploads/puppy-small-237x300.jpg");
images[1] = new Img("http://www.hod-hasharon.muni.il/html5/Web/2078/vat4.jpg");
images[2] = new Img("https://www.snakes.co.il/media/djcatalog2/images/item/1/--nymphicus-hollandicus_l.jpg");
images[3] = new Img("https://shooka.net/wp-content/uploads/2018/01/15-cm-22.jpg");
images[4] = new Img("https://market.marmelada.co.il/photos/570x0/1451816.jpg");
images[5] = new Img("https://img.wcdn.co.il/f_auto,w_700/1/2/3/1/1231339-46.jpg");
images[6] = new Img("http://taoos.co.il/wp-content/uploads/2017/03/3143.jpg");
images[7] = new Img("https://www.ken-hatuki.co.il/wp-content/uploads/2013/03/05052011074653.jpg");
images[8] = new Img("https://sc02.alicdn.com/kf/HTB1MlttjsbI8KJjy1zdq6ze1VXaD/Mother-Doe-Laying-Deer-Outdoor-Animal-Garden.jpg");
images[9] = new Img("https://d3m9l0v76dty0.cloudfront.net/system/photos/2324783/extra_large/ff1b53cb16cbc839349dd42e30bc8d00.jpg");
images[10] = new Img("https://www.snakes.co.il/media/djcatalog2/images/item/1/--nymphicus-hollandicus_l.jpg");
images[11] = new Img("https://www.snakes.co.il/media/djcatalog2/images/item/1/--nymphicus-hollandicus_l.jpg");


function start() {
  if (localStorage.getItem("likes") !== null) {
    document.getElementById("container").innerHTML = localStorage.getItem("likes");
  }
  else {
    var wraper = document.createElement("div");
    wraper.className = "wraper";
    for (var i = 1; i <= (images.length) - 1; i++) {

      // if (index == images.length) // range of index
      //     break;
      var divImg = document.createElement("div");
      divImg.className = "divImg";
      var img = document.createElement("img");
      img.src = images[index].src;
      img.setAttribute('onclick', 'clickImg(event);');
      var divLike = document.createElement("div");
      var btn = document.createElement("button");
      // btn.innerText = "like";
      btn.id = "I" + index;
      var span = document.createElement("span");
      span.innerText = images[index].like;
      btn.setAttribute('onclick', 'like(event);');
      divLike.appendChild(btn);
      divLike.appendChild(span);
      divImg.appendChild(img);
      divImg.appendChild(divLike);
      wraper.appendChild(divImg);
      index++;
    }
    document.getElementById("container").appendChild(wraper);
  }
}
function x() {  // close pick frame
  var p = document.getElementById("pick");
  var b = document.getElementById("imgClick");
  p.style.display = "none";
  b.style.display = "none";
}
function like(event) {
  id = (event.target.id)[1];
  images[id].like = document.querySelector("#" + event.target.id + "+ span").innerText;
  images[id].countLike();
  document.querySelector("#" + event.target.id + "+ span").innerText = images[id].like;
  localStorage.setItem("likes", document.getElementById("container").innerHTML);
}
function clickImg(event) {
  document.getElementById("imgClick").style.display = "block";
  document.getElementById("pick").style.display = "block";
  document.getElementById("pick").innerHTML =
    "<input type='button' id='x' onclick='x()'value='X'><img src='" + event.target.src + "' width='100%' height='100%'>";
}
