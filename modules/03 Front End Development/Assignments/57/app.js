
function Thumbnails(src,likeCounter){
    this.src = src;
    this.likeCounter = likeCounter;

    this.getSrc = function(){
        return this.src;
    };

    this.getLikeCounter = function(){
        return this.likeCounter;
    };
}

Thumbnails.prototype.incLike = function(){
    this.likeCounter++;
    return 1;
}

// Element.prototype.getSrc = function(){
//     return this.src;
// }

// Element.prototype.getLikeCounter = function(){
//     return this.likeCounter;
// }

var src1 = "https://media.wired.com/photos/59bafdf204afdc5248726f5c/master/w_2400,c_limit/BMW-TA.jpg";
var src2 = "https://media.wired.com/photos/5b86fce8900cb57bbfd1e7ee/master/pass/Jaguar_I-PACE_S_Indus-Silver_065.jpg";
var src3 = "https://cdn.vox-cdn.com/uploads/chorus_image/image/59319581/A182669_medium.0.jpg";
var src4 = "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/01/104623144-New-Ford-Mustang.1910x1000.jpg";
var src5 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEK6B96lBYzg9Ioj4AseQUKM7AxaJNhn1sLzliYA64dX-dIObH";
var src6 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaTpUIk2Rfd83riQDrZ5Zg8vMf6RlhLX5JLuV57ETpisWupD6y";  
var src7 = "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/01/104623144-New-Ford-Mustang.1910x1000.jpg"; 
var src8 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrno0DFImNi60kWqf4zpiVnjqp--HPeD0YACixwBMMmRrKqHfjNg";
var src9 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfChu9QuX-Mv-og1yF7zTfEbgrUT9kQt9zKE9reOPEnxDnj1iA";
var src10 = "https://www.cdn.renault.com/content/dam/Renault/master/concept-cars/renault-concept-car-014.jpg.ximg.s_12_h.smart.jpg";

var element1 = new Thumbnails(src1,0);
var element2 = new Thumbnails(src2,0);
var element3 = new Thumbnails(src3,0);
var element4 = new Thumbnails(src4,0);
var element5 = new Thumbnails(src5,0);
var element6 = new Thumbnails(src6,0);
var element7 = new Thumbnails(src7,0);
var element8 = new Thumbnails(src8,0);
var element9 = new Thumbnails(src9,0);
var element10 = new Thumbnails(src10,0);


var elements = [element1,element2,element3,element4,element5,element6,element7,element8,element9,element10];

window.onbeforeunload = function(){
    for(var i= 0; i< elements.length;i++){
        localStorage.setItem("element"+ i, elements[i].getLikeCounter());
    }
}

function getData(){
    for(var i= 0; i< elements.length;i++){
        elements[i].likeCounter = localStorage.getItem("element"+ i);
    }
}

function fillScreen(){
    var content = document.getElementById("content");
    var i = 0;
    elements.forEach(item => {
        var element = createElement(item.getSrc(),i++);
        // console.log(item.getSrc(),item);
        content.appendChild(element);
    });
}

function createElement(srcInput, index){
    var element = document.createElement("div");
    element.className = "element";

    var image = document.createElement("img");
    image.className = "image_element";
    image.alt = "No Image";
    image.src = srcInput;

    var button = document.createElement("button");
    button.className = "like_button_element";
    button.innerText = "LIKE";

    var sibling = button.nextSibling;
    button.onclick = incLikes.bind(sibling,index);

    var counter = document.createElement("div");
    counter.className = "counter_element";
    counter.innerText = 0;

    element.appendChild(image);
    element.appendChild(button);
    element.appendChild(counter);

    var sibling = button.nextSibling;
    button.onclick = incLikes.bind(sibling,index);

    return element;
}

function incLikes(index){
     thumbnail = elements[index];
     console.log(this,index);
     thumbnail.incLike();
     this.innerText = thumbnail.getLikeCounter();
}

fillScreen();

