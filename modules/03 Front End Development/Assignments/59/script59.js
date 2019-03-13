function toggleView(e){
    var image = e.target;
    var div = image.parentNode;
    console.log(div); 
    div.nextElementSibling.classList.toggle('show');
}

function toggleViewDiv(e){
    if(e.target.nodeName !== 'IMG') {
        var div = e.target.nodeName==='LEGEND' ? e.target.parentNode:e.target;
        console.log(div); 
        div.nextElementSibling.classList.toggle('show');
    }
}