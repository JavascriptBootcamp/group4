arr = [];
startIndex = 0;
endIndex = 12;
numOfPages = 1;
page = 1;
function add(e) {
    e.preventDefault();
    var url = document.getElementById("url").value;
    var link = document.getElementById("link").value;

    var obj = {
        url: url,
        link: link
    }
    arr.push(obj);
    showNumOfPages();
    load(page);
}

function showNumOfPages() {
    numOfPages = Math.ceil(arr.length / 12);
    var footer = document.getElementById("footer");
    footer.innerHTML = "";
    for (var i = 0; i < numOfPages; i++) {
        var span = document.createElement("span");
        span.style.cursor = "pointer";
        if (i > 0) {
            var sp = document.createElement("span");
            sp.innerText = ">>>";
            sp.style.color = "blue";
            footer.appendChild(sp);
        }
        span.innerText = Number(i) + 1;
        span.onclick = function () {
            page = this.innerText[0];
            load(this.innerText[0]);
        }
        footer.appendChild(span);
    }
}

function load(page) {
    if (arr.length === 0) { return; }
    endIndex = page * 12;
    startIndex = endIndex - 12;
    var ph = document.getElementById("ph");
    ph.innerHTML = "";
    for (var i = startIndex; i < endIndex; i++) {
        if (arr[i] === undefined) {
            break;
        }
        var a = document.createElement("a");
        var img = document.createElement("img");
        a.href = arr[i].link;
        a.target = "_blank";
        img.src = arr[i].url;
        img.style.width = "300px";
        img.style.height = "200px";
        a.appendChild(img);
        ph.appendChild(a);
    }

}
