




var anchorsCollection = document.getElementsByTagName("a");

for (var key in anchorsCollection) {
    if( anchorsCollection.hasOwnProperty(key) ) {
        anchorsCollection[key].href = "javascript:void(0);"; 
        
        anchorsCollection[key].onclick = function () {
            this.style.visibility = "hidden";
        }
    }
    
}