var imagesNum = 0;
var webPagesNum = 0;
var currentWebPage = 0;
var webPagesArr = [];


function addImage(e){
    e.preventDefault();

    var imageUrl = document.getElementById("imageUrl").value;
    var wikipediaURL = document.getElementById("wikipediaURL").value;

    var currentImageLinkDiv = createImageLinkDiv(imageUrl, wikipediaURL);
    appendImageDivToWebPage(currentImageLinkDiv);

    display();
}


function createImageLinkDiv(imageUrl, wikipediaUrl){
    var divElem = document.createElement("div");
    var linkElem = document.createElement("a");
    var imageElem = document.createElement("img");

    divElem.id = 'image' + imagesNum;
    divElem.className = 'imageLink';

    linkElem.href = wikipediaUrl;
    imageElem.src = imageUrl;
    imageElem.width="400";
    
    linkElem.appendChild(imageElem);
    divElem.appendChild(linkElem);

    return divElem;
}


function appendImageDivToWebPage(currentImageLinkDiv){
    if(imagesNum % 12 === 0) {
        createNewImagesWebPage();
        webPagesNum++;
    }

    imagesNum++;
    webPagesArr[webPagesNum - 1].appendChild(currentImageLinkDiv);

    return webPagesArr[webPagesNum-1];
}


function createNewImagesWebPage(){
    var newImagesPage = document.createElement("div");
    webPagesArr.push(newImagesPage);
    currentWebPage++;

    addPageNumButton();
}


function display(){
    document.getElementById("pageContent").innerHTML = webPagesArr[currentWebPage-1].innerHTML;
}


function addPageNumButton() {
    var pagesNavigatorContainer = document.getElementById("pagesNavigatorContainer");
    var buttonElem = document.createElement("button");
    buttonElem.innerText = webPagesNum+1;
    buttonElem.setAttribute("onclick", "changePage(this.innerText)");
    pagesNavigatorContainer.appendChild(buttonElem);
}


function changePage(toPage){
    currentWebPage = toPage;

    display();
}