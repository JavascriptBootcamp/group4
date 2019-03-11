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
    let posLegends = document.getElementsByClassName("positive");
    let negLegends = document.getElementsByClassName("negative");
    for(var legend in posLegends){
        if(posLegends.hasOwnProperty(legend)){
            if(sign === '+'){
                console.log(posLegends[legend].id,posLegends[legend].className);
                //posLegends[legend].className = "positive";
            }
            else{
                console.log(posLegends[legend].id,posLegends[legend].className);
                posLegends[legend].className = "negative";
            }
        }
    }

    // for(var legend in negLegends){
    //     if(negLegends.hasOwnProperty(legend)){
    //         if(sign === '+'){
    //             //negLegends[legend].className = "positive";
    //         }
    //         else{
    //             //negLegends[legend].className = "negative";

    //         }
    //     }
    // }
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
