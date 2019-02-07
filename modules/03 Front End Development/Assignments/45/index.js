
arr = [];
startIndex=0;
endIndex=12 ;
numOfPages=1;
page = 1;
function add(e){
    e.preventDefault();
var url = document.getElementById("url").value;
var link = document.getElementById("link").value;

var obj = {
    url:url,
    link:link
}
arr.push(obj);
numOfPages = arr.length / 12;
for(var i=0;i<numOfPages;i++){
    var span = document.createElement("span");
    if(numOfPages===1){
        span.innerText = i;
    }
    else{
        span.innerText = i + ">>>";
    }
  //  span.onclick = function(){
   //     
    //  }
}

function load(page){
if(arr.length === 0){return;}
    endIndex = page * 12;
    startIndex = endIndex - 12;
    var ph = document.getElementById("ph")
    for(var i=startIndex;i<endIndex;i++){
        var a = document.createElement("a");
        var img = document.createElement("img");
        a.appendChild(img);
        a.href = arr[i].link;
        img.src = arr[i].url;
        ph.appendChild(img);

    }

}
