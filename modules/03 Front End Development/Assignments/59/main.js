var coll = document.getElementsByClassName("collapsible");
for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function (event) {
        event.preventDefault();
        var img = this.childNodes[0];
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
            img.src = "https://cdn3.iconfinder.com/data/icons/glypho-generic-icons/64/plus-big-512.png";
        } else {
            content.style.display = "block";
            img.src = "https://cdn2.iconfinder.com/data/icons/interface-part-2/32/minus-512.png";
        }
    });
}

function expandAll(event) {
    event.preventDefault();
    var action = event.target.innerText;
    var coll = document.getElementsByClassName("collapsible");
    for (var i = 0; i < coll.length; i++) {
        var img = coll[i].childNodes[0];
        if (action === "Expand All") {
            event.target.innerText = "Collapse All";
            coll[i].nextElementSibling.style.display = "block";
            if (coll[i].childNodes[0].src === "https://cdn3.iconfinder.com/data/icons/glypho-generic-icons/64/plus-big-512.png") {
                img.src = "https://cdn2.iconfinder.com/data/icons/interface-part-2/32/minus-512.png";
            }
        } else {
            event.target.innerText = "Expand All";
            coll[i].nextElementSibling.style.display = "none";
            if (coll[i].childNodes[0].src === "https://cdn2.iconfinder.com/data/icons/interface-part-2/32/minus-512.png") {
                img.src = "https://cdn3.iconfinder.com/data/icons/glypho-generic-icons/64/plus-big-512.png";
                if (coll[i].id === "sellers") {
                    coll[i].nextElementSibling.style.display = "block";
                    coll[i].childNodes[0].src = "https://cdn2.iconfinder.com/data/icons/interface-part-2/32/minus-512.png";
                }
            }

        }
    }
}
