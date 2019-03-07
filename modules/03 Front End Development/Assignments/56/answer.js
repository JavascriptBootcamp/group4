var imagesURLsArr = [
    "https://upload.wikimedia.org/wikipedia/commons/8/87/TVE_La1_-_Logo_2008.png",
    "http://nebula.wsimg.com/cfb133246fb6949808b53af3421575e9?AccessKeyId=5F480AA257F587756A6D&disposition=0&alloworigin=1",
    "https://cdn.dribbble.com/users/271641/screenshots/1531994/num3.gif",
    "https://steamuserimages-a.akamaihd.net/ugc/932690417985966398/2E1D48DE5B5F4D5CBCA137E9772474BD9098BC16/",
    "https://static.planetminecraft.com/files/resource_media/screenshot/1249/5_4330267_lrg.jpg",
    "https://blog.solidsignal.com/wp-content/uploads/2012/07/number6.jpg",
    "https://steemitimages.com/DQmfCYiikJ7zeJLoRTD14xWwJ3r9mdUErf43tBwGf1ve9La/php-7.jpg",
    "http://denigear.com/wp-content/uploads/sites/2/2011/10/8_key_person_skills.jpg",
    "http://mathematics-in-europe.eu/wp-content/uploads/2016/02/3_playing_cards-3.jpg",
    "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/04/windows-10-redmond-796x448.jpg" 
  ];
  
  const MAX_IMAGE_INDEX = 9;
  const VISIBLE_SLIDER_IMAGES_LENGTH = 3;
  var firstVisibleSlideImageIndex = 0;
  var lastVisibleSlideImageIndex = VISIBLE_SLIDER_IMAGES_LENGTH - 1;
  
  
  function displayMainImage() {
    var mainImageElem = document.getElementById("main-image");
  
    if(localStorage.getItem("mainImage")) mainImageElem.src = localStorage.getItem("mainImage");
    else mainImageElem.src = imagesURLsArr[0];
  }
  
  
  function displaySlideImages() {
    var slideImagesContainer = document.getElementById("slide-images-container");
  
    // Display slide left arrow image
    var leftArrowImageElem = document.createElement("img");
    leftArrowImageElem.className = "arrow-near-slide-images flex-item";
    leftArrowImageElem.src = "https://requestreduce.org/images/left-facing-arrow-10.jpg";
    slideImagesContainer.appendChild(leftArrowImageElem);
    leftArrowImageElem.addEventListener("click", onclickSliderLeftArrow);
  
    for(var i = 0; i < VISIBLE_SLIDER_IMAGES_LENGTH; i++) {
      var imageInSlideElem = document.createElement("img");
      imageInSlideElem.className = "image-in-slide flex-item";
      imageInSlideElem.src = imagesURLsArr[i];
      slideImagesContainer.appendChild(imageInSlideElem);
  
      imageInSlideElem.addEventListener("click", displayClickedSlideImageAsMainImage);
    }
  
    // Display slide right arrow image
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
  
    if(imageNum === imagesURLsArr.length) mainImageElem.src = imagesURLsArr[0];
    else mainImageElem.src = imagesURLsArr[imageNum];
  
    localStorage.setItem('mainImage', mainImageElem.src);
  }
  
  
  function onclickMainLeftArrow() {
    var mainImageElem = document.getElementById("main-image");
  
    var imageNum = getImageNumber();
  
    if(imageNum === 1) mainImageElem.src = imagesURLsArr[imagesURLsArr.length - 1];
    else mainImageElem.src = imagesURLsArr[imageNum-2];
  
    localStorage.setItem('mainImage', mainImageElem.src);
  }
  
  
  function onclickSliderRightArrow() {
    var slideImagesContainer = document.getElementById("slide-images-container");
    var firstChildInSlider = slideImagesContainer.children[0];  // = slideImagesContainer.firstChild
    var lastChildInSlider = slideImagesContainer.children[slideImagesContainer.children.length-1];
  
    //Empty the slider
    while(slideImagesContainer.firstChild) {
      slideImagesContainer.removeChild(slideImagesContainer.firstChild);
    }
    
    if(lastVisibleSlideImageIndex < MAX_IMAGE_INDEX) {
      firstVisibleSlideImageIndex++;
      lastVisibleSlideImageIndex++;
    }
  
    slideImagesContainer.appendChild(firstChildInSlider);
    
    for(var i = firstVisibleSlideImageIndex; i <= lastVisibleSlideImageIndex; i++) {
      var imageInSlideElem = document.createElement("img");
      imageInSlideElem.className = "image-in-slide flex-item";
      imageInSlideElem.src = imagesURLsArr[i];
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
      imageInSlideElem.src = imagesURLsArr[i];
      slideImagesContainer.appendChild(imageInSlideElem);
  
      imageInSlideElem.addEventListener("click", displayClickedSlideImageAsMainImage);
    }
  
    slideImagesContainer.appendChild(lastChildInSlider);
  
    firstChildInSlider.addEventListener("click", onclickSliderLeftArrow);
    lastChildInSlider.addEventListener("click", onclickSliderRightArrow);
  
  }
  
  
  function getImageNumber() {
    var mainImageElem = document.getElementById("main-image");
  
    var imageNum;
    for(var i = 0; i < imagesURLsArr.length; i++) {
      if(imagesURLsArr[i] === mainImageElem.src) imageNum = i + 1;
    }
  
    return imageNum;
  }
  
  
  function startApplication() {
    displayMainImage();
    displaySlideImages();
  }
  
  startApplication();
  
  
  
  //localStorage.clear();