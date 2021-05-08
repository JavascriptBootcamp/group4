var maxImageIndex;
const VISIBLE_SLIDER_IMAGES_LENGTH = 3;
var firstVisibleSlideImageIndex = 0;
var lastVisibleSlideImageIndex = VISIBLE_SLIDER_IMAGES_LENGTH - 1;

var imagesURLsArr = [];


async function onSelectAlbum(e) {
  e.preventDefault();
  let albumName = document.getElementById('album-selector').value;

  const res = await fetch('http://localhost:5000/album?albumName=' + albumName);
  const data = await res.json();
  const imagesURLsArr = await data.message;
  maxImageIndex = imagesURLsArr.length-1;

  loadAlbumImages(imagesURLsArr);

}

function loadAlbumImages(imagesURLs) {
  displayMainImage(imagesURLs);
  displaySlideImages(imagesURLs);
}


function displayMainImage(imagesURLs) {
  imagesURLsArr = imagesURLs;

  var mainImageElem = document.getElementById("main-image");
  if(localStorage.getItem("mainImage")) mainImageElem.src = localStorage.getItem("mainImage");
  else mainImageElem.src = imagesURLs[0].src;
}


function displaySlideImages(imagesURLs) {
  var slideImagesContainer = document.getElementById("slide-images-container");
  while (slideImagesContainer.firstChild) {
    slideImagesContainer.removeChild(slideImagesContainer.firstChild);
  }

  var leftArrowImageElem = document.createElement("img");
  leftArrowImageElem.className = "arrow-near-slide-images flex-item";
  leftArrowImageElem.src = "https://requestreduce.org/images/left-facing-arrow-10.jpg";
  slideImagesContainer.appendChild(leftArrowImageElem);
  leftArrowImageElem.addEventListener("click", onclickSliderLeftArrow);

  for(var i = 0; i < VISIBLE_SLIDER_IMAGES_LENGTH; i++) {
    var imageInSlideElem = document.createElement("img");
    imageInSlideElem.className = "image-in-slide flex-item";
    imageInSlideElem.src = imagesURLs[i].src;
    slideImagesContainer.appendChild(imageInSlideElem);

    imageInSlideElem.addEventListener("click", displayClickedSlideImageAsMainImage);
  }

  var rightArrowImageElem = document.createElement("img");
  rightArrowImageElem.className = "arrow-near-slide-images flex-item";
  rightArrowImageElem.src = "https://vector.me/files/images/1/6/169930/green_right_arrow_clip_art.jpg";
  slideImagesContainer.appendChild(rightArrowImageElem);
  rightArrowImageElem.addEventListener("click", onclickSliderRightArrow);
}


function displayClickedSlideImageAsMainImage() {
  var mainImageElem = document.getElementById("main-image");
  mainImageElem.className = "main-image-active";
  mainImageElem.src = this.src;

  localStorage.setItem('mainImage', mainImageElem.src);
}


function onclickMainRightArrow() {
  var mainImageElem = document.getElementById("main-image");

  var imageNum = getImageNumber();

  if(imageNum === imagesURLsArr.length) mainImageElem.src = imagesURLsArr[0].src;
  else mainImageElem.src = imagesURLsArr[imageNum].src;

  localStorage.setItem('mainImage', mainImageElem.src);
}


function onclickMainLeftArrow() {
  var mainImageElem = document.getElementById("main-image");

  var imageNum = getImageNumber();

  if(imageNum === 1) mainImageElem.src = imagesURLsArr[imagesURLsArr.length - 1].src;
  else mainImageElem.src = imagesURLsArr[imageNum-2].src;

  localStorage.setItem('mainImage', mainImageElem.src);
}


function onclickSliderRightArrow() {
  var slideImagesContainer = document.getElementById("slide-images-container");
  var firstChildInSlider = slideImagesContainer.children[0];  // = slideImagesContainer.firstChild
  var lastChildInSlider = slideImagesContainer.children[slideImagesContainer.children.length-1];

  while(slideImagesContainer.firstChild) {
    slideImagesContainer.removeChild(slideImagesContainer.firstChild);
  }
  
  if(lastVisibleSlideImageIndex < maxImageIndex) {
    firstVisibleSlideImageIndex++;
    lastVisibleSlideImageIndex++;
  }

  slideImagesContainer.appendChild(firstChildInSlider);
  
  for(let i = firstVisibleSlideImageIndex; i <= lastVisibleSlideImageIndex; i++) {
    let imageInSlideElem = document.createElement("img");
    imageInSlideElem.className = "image-in-slide flex-item";
    imageInSlideElem.src = imagesURLsArr[i].src;
    slideImagesContainer.appendChild(imageInSlideElem);

    imageInSlideElem.addEventListener("click", displayClickedSlideImageAsMainImage);
  }

  slideImagesContainer.appendChild(lastChildInSlider);

  firstChildInSlider.addEventListener("click", onclickSliderLeftArrow);
  lastChildInSlider.addEventListener("click", onclickSliderRightArrow);
}


function onclickSliderLeftArrow() {
  var slideImagesContainer = document.getElementById("slide-images-container");
  var firstChildInSlider = slideImagesContainer.children[0];  // = slideImagesContainer.firstChild
  var lastChildInSlider = slideImagesContainer.children[slideImagesContainer.children.length-1];

  while(slideImagesContainer.firstChild) {
    slideImagesContainer.removeChild(slideImagesContainer.firstChild);
  }

  if(firstVisibleSlideImageIndex > 0) {
    firstVisibleSlideImageIndex--;
    lastVisibleSlideImageIndex--;
  }

  slideImagesContainer.appendChild(firstChildInSlider);
  
  for(var i = firstVisibleSlideImageIndex; i <= lastVisibleSlideImageIndex; i++) {
    var imageInSlideElem = document.createElement("img");
    imageInSlideElem.className = "image-in-slide flex-item";
    imageInSlideElem.src = imagesURLsArr[i].src;
    slideImagesContainer.appendChild(imageInSlideElem);

    imageInSlideElem.addEventListener("click", displayClickedSlideImageAsMainImage);
  }

  slideImagesContainer.appendChild(lastChildInSlider);

  firstChildInSlider.addEventListener("click", onclickSliderLeftArrow);
  lastChildInSlider.addEventListener("click", onclickSliderRightArrow);

}


function getImageNumber() {
  let mainImageElem = document.getElementById("main-image");

  let imageNum;
  for(let i = 0; i < imagesURLsArr.length; i++) {
    if(imagesURLsArr[i].src === mainImageElem.src) imageNum = i + 1;
  }
  
  return imageNum;
}


//localStorage.clear();