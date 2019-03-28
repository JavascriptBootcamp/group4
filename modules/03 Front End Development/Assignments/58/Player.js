var Player = (function(){
    var play = function(name,  picSrc) {
        document.getElementById("player-pic").src = picSrc;
        document.getElementById("player-name").innerText = name;
     
    }

    return {
        play: play
    }
})();