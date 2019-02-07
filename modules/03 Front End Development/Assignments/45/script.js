var Pictures = [];

function Picture(url, imageUrl){
    this.url = url;
    this.imageUrl = imageUrl;
}

function paging(){
    document.getElementById("paging").innerHTML="";
    for (var i = 0; i < Pictures.length / 12; i++) {
        document.getElementById("paging").innerHTML += "<a href='#' onclick='page_click("+ i +")'>" + (i+1) + "</a> ";
    }
}

function addPicture(){
    var url = document.getElementById("txtURL").value;
    var imageUrl = document.getElementById("txtPictureUrl").value;
    var pic = new Picture(url,imageUrl);
    Pictures.push(pic);
    console.log(Pictures);
    paging();
}

for (var i = 0; i < 40; i++) {
    var pic = new Picture("https://images.pexels.com/photos/68147/waterfall-thac-dray-nur-buon-me-thuot-daklak-68147.jpeg","https://images.pexels.com/photos/68147/waterfall-thac-dray-nur-buon-me-thuot-daklak-68147.jpeg")
    Pictures.push(pic);
}

paging();

function page_click(page){
    document.getElementById("pictures_list").innerHTML = "";
    for (i = page * 12 ; i < (page * 12) + 12; i++) {
        if (Pictures[i]) {
            document.getElementById("pictures_list").innerHTML += "<a href='" + i + "'><img src='" + Pictures[i].imageUrl + "'/></a> ";           
        }
    }
}