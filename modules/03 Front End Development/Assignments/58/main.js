(function init(){
    // var video1 = new Video("title1", "name1", "description1", "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4", "https://www.nordic.media/wp-content/uploads/2017/02/Nordic-Media-Icon.png");
    // var video2 = new Video("title2", "name2", "description2", "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4", "http://icons.iconarchive.com/icons/cornmanthe3rd/metronome/512/Media-wmp-icon.png");

    for (var i=1; i<=10;i++){
        loadVideo()
    }

    function loadVideo() {
        fetch("https://random.dog/woof.json").then(response => response.json()).then(data => {
            if (data.url.indexOf(".mp4") > -1){
                addVideo(data.url)
            }
            else {
                loadVideo();
            }
        })
    }

    function addVideo(url){
        var video = new Video("title" + Math.random(10), "name" + Math.random(10), "description1", url, "https://www.nordic.media/wp-content/uploads/2017/02/Nordic-Media-Icon.png");
    }
})();