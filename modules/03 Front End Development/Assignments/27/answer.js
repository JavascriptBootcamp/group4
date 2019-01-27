document.getElementById("titleName").innerText = "Instush";


var listItems = document.getElementsByTagName("li");


// Append 3 child nodes (using Javascript) to each list item 
for(var i=0; i < listItems.length; i++) {
    listItems[i].appendChild(document.createElement("button")).innerText = 'Like';
    listItems[i].appendChild(document.createElement("button")).innerText = 'Comment';
    listItems[i].appendChild(document.createElement("button")).innerText = 'Share';    
}
