
var details = document.querySelectorAll(".details");
var pargraph = document.querySelectorAll(".search p");
var hideExpandBtn = document.querySelector(".hide-expand-btn");
var num = 0;

hideExpandBtn.addEventListener("click", function(){



    if(hideExpandBtn.innerHTML.trim() == "Collapse All".trim()) {
        for(let i = 0 ; i < details.length;i++)
           details[i].classList.add("hide");

        hideExpandBtn.innerHTML = "Expand All";
     

    }
    

        if(hideExpandBtn.innerHTML.trim() == "Expand All".trim()) {
        for(let i = 0 ; i < details.length;i++)
        details[i].classList.remove("hide");

        hideExpandBtn.innerHTML = "Collapse All";
        }
 
});



for(let i = 0 ; i < details.length;i++)  {

    pargraph[i].addEventListener("click", function(){
        details[i].classList.toggle("hide");
}); 

}
