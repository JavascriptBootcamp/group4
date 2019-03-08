picsLinksContainer = document.getElementById("pics-links-container");
picsLinksContainer.innerText = 'Loading Images...';

fetch("https://picsum.photos/list")

.then( data => { 
    data.json()
    
    
.then( json => {
    picsLinksContainer.innerText = "";

    for(let i in json) {
        const imageElem = document.createElement("img");
        const linkElem = document.createElement("a");
        linkElem.href = json[i]["post_url"];
        linkElem.target = '_blank';
        imageElem.src = `https://picsum.photos/200/300?image=${json[i]["id"]}`
        linkElem.appendChild(imageElem);
        picsLinksContainer.appendChild(linkElem);
    }
})

})
.catch( error => {
    console.log(error);
})
