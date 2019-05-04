var Player = (function(){
    var play = function(title, artistName, description, videoSrc) {
        document.getElementById("player-video").src = videoSrc;
        document.getElementById("player-title").innerText = title;
        document.getElementById("player-artist").innerText = artistName;
        document.getElementById("player-description").innerText = description;
    }

    return {
        play: play
    }
})();