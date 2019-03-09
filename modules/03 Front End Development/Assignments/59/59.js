const collaps_toggle = (i_element) => {
    let legend_element = i_element.parentElement;
    let content_id = "#"+legend_element.attributes.for.value;
    let content_element = document.querySelector(content_id);

    i_element.classList.toggle("fa-minus");
    i_element.classList.toggle("fa-plus");
    content_element.classList.toggle("hide");
}


document.querySelectorAll("i").forEach(element => {
    element.addEventListener("click", (event) => {
        collaps_toggle(event.target);
    });
});

document.querySelector("#btn_collaps_all").addEventListener("click", function () {
    if(this.innerHTML==="Collapse All") {
        this.innerHTML="Expand All";
        document.querySelectorAll("i.fa-plus").forEach(element => {
            collaps_toggle(element);
        });
    }
    else {
        this.innerHTML="Collapse All";
        document.querySelectorAll("i.fa-minus").forEach(element => {
            collaps_toggle(element);
        });
    }
})




function onPageInit() {
    let i_elements = document.querySelectorAll("i");
    let content_elements = document.querySelectorAll(".content"); 
    for (const i of i_elements) {
        i.classList.add("fas");
        i.classList.add("fa-minus");
    }
    
    for (const content of content_elements) {
        content.classList.add("hide");
    }  
}

onPageInit();