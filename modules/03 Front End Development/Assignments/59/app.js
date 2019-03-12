function openOrCloseCat(e){
    let action = e.target.innerText;
    let sign = "+";
    if(action === "Expand All"){
        e.target.innerText = "Collapse All";
        sign = "-";
    }
    else{
        e.target.innerText = "Expand All";
        sign = "+";
    }
    let legends = document.getElementsByTagName("legend");

    for(var legend in legends){
        if(legends.hasOwnProperty(legend)){
            let contentDiv = legends[legend].nextElementSibling;
            if(sign === "-"){
                contentDiv.className = "negative";
            }
            else{
                contentDiv.className = "positive";
            }
        }
    }
}

function hideOrShow(event){
    let contentDiv = event.target.nextElementSibling;
    if(contentDiv.className === "positive"){
        contentDiv.className = "negative";
    }
    else{//(contentDiv.className === "negative"){
        contentDiv.className = "positive";
    }
}
