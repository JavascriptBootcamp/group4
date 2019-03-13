function toggleView(e) {
    var image = e.target;
    var div = image.parentNode;
    if (image.src === 'http://wfarm4.dataknet.com/static/resources/icons/set70/f3c66f2a.png') {
        image.src = 'http://www.myiconfinder.com/uploads/iconsets/256-256-a32d9dd8e567dc5340d1606e87fc5703.png';
    } else {
        image.src = 'http://wfarm4.dataknet.com/static/resources/icons/set70/f3c66f2a.png';
    }
    div.nextElementSibling.classList.toggle('show');
}

function toggleViewDiv(e) {
    console.log(e.target);
    if (e.target.nodeName !== 'IMG') {
        var div = e.target.nodeName === 'LEGEND' ? e.target.parentNode : e.target;
        var image = div.getElementsByTagName('img')[0];
        if (image.src === 'http://wfarm4.dataknet.com/static/resources/icons/set70/f3c66f2a.png') {
            image.src = 'http://www.myiconfinder.com/uploads/iconsets/256-256-a32d9dd8e567dc5340d1606e87fc5703.png';
        } else {
            image.src = 'http://wfarm4.dataknet.com/static/resources/icons/set70/f3c66f2a.png';
        }
        if(div.nextElementSibling.classList.contains('show')){
            div.nextElementSibling.classList.remove('show');
        }else {
            div.nextElementSibling.classList.add('show');
        }
    }
}

function toggleViewAll(e) {
    var targetClass = e.target.classList;
    var contents =  document.body.getElementsByClassName('content');
    var images = document.body.querySelectorAll('.title>img');
    var image;
    for(var i=0; i<contents.length; i++) {
        image = images[i];
        if(!targetClass.contains('hideAll') && !contents[i].classList.contains('show')) {
            contents[i].classList.toggle('show');
            image.src = 'http://www.myiconfinder.com/uploads/iconsets/256-256-a32d9dd8e567dc5340d1606e87fc5703.png';
        }else if(targetClass.contains('hideAll') && contents[i].classList.contains('show')) {
            contents[i].classList.toggle('show');
            image.src = 'http://wfarm4.dataknet.com/static/resources/icons/set70/f3c66f2a.png';
        }
    }
    e.target.classList.toggle('hideAll');
}