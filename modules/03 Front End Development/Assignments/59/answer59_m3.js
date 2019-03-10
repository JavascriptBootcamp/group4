
var details = document.querySelectorAll(".details");
var pargraph = document.querySelectorAll(".search p");
var hideExpandBtn = document.querySelector(".hide-expand-btn");
var num = 0;

for(let i = 0 ; i < details.length;i++)  {
    details[i].classList.add("hide");
}

hideExpandBtn.addEventListener("click", function(){

    if(hideExpandBtn.innerHTML == "Collapse All") {
        for(let i = 0 ; i < details.length;i++) {
           details[i].classList.add("hide");

        }

        hideExpandBtn.innerHTML = "Expand All";
     

    }
    

        else {
        if(hideExpandBtn.innerHTML == "Expand All") {
        for(let i = 0 ; i < details.length;i++)
        details[i].classList.remove("hide");

        hideExpandBtn.innerHTML = "Collapse All";
        }
    }
 
});



for(let i = 0 ; i < details.length;i++)  {

    pargraph[i].addEventListener("click", function(){
        details[i].classList.toggle("hide");
}); 

}
