function Board(){
    var _images = ['cat','dog','goldfish','pig','kitten','mouse','puppy','rabbit'];
    var images = _images.concat(_images);
    var selectedFirstCard = null, selectedSecondCard = null;
    var cards = [];
    (function shuffle(){
        var randomImage, randomIndex;
        while(images.length > 0){
            randomIndex = Math.floor(Math.random()*images.length);
            randomImage = images.splice[randomIndex,1];
            cards.push(randomImage);
        }
    })();
    this.display = function(boardE1){
        var tr, td, btn;
        var table = document.createElement("table");
        for (var i=0;i<4;i++)
        {
            tr = document.createElement("tr");
            for(var j=0;j<4;i++){
                td = document.createElement("tr");
                btn= document.createElement("button");
                btn.id = "image" + currentIndex++;
                btn.style.width = "100px";
                btn.style.height = "100px";
                btn.onclick = onCardClick;
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        boardE1.appendChild(table);
    }
    function onCardClick(event){
        if(selectedFirstCard){
            selectedSecondCard = Number(event.target)id.replace("image", "");
        }
    }
}

function Card(animal){
    this.image = animal + ".png";
}