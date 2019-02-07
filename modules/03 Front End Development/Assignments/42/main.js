var outputDiv = document.querySelector("#movies");
var outputDivAllMovies = document.querySelector("#allMovies");
var formsDiv = document.querySelector("#forms");
var movies = [];
id_count=0;

function creatForm() {
    var form = document.createElement("form");
    form.onsubmit = function (event) {
        event.preventDefault();
        sForm(event.target);
    }
    HTML='<fieldset>'; 
    HTML+='<legend>Add Your Vidoe</legend>';
    HTML+='<label for="title">Title:</label><input type="text" name="title" id="title"><br><br>';
    HTML+='<label for="uploader">Uploader:</label>';
    HTML+='<select name="uploader" id="uploader">';
    HTML+='<option value="Shai">Shai</option>';
    HTML+='<option value="Matan">Matan</option>';
    HTML+='<option value="Moshiko">Moshiko</option>';
    HTML+='<option value="Bob">Bob</option>';
    HTML+='<option value="Alice">Alice</option>';
    HTML+='</select><br><br>';
    HTML+='<label for="seconds">Seconds:</label><input type="number" name="seconds" id="seconds"><br><br>';
    HTML+='<button type="submit">Add</button>';
    HTML+='<button type="btn" onclick="plus(); return false;">+</button>';
    HTML+='</fieldset>';
    form.innerHTML = HTML;
    formsDiv.appendChild(form);
    id_count++;
    
}

function sForm(form) {
    var vidoe = new Video(form.title.value, form.uploader.value, form.seconds.value);
    movies.push(vidoe);
    var div = document.createElement("div");
    outputDiv.innerHTML="<h3>"+vidoe.watch()+"</h3>";
    form.reset();
    return false;
}

function plus() {
    creatForm();
}

function watchAll() {
    outputDivAllMovies.innerHTML="<h2>All the movies:</h2>";
    movies.forEach(function(vidoe) {
        var div = document.createElement("div");
        div.innerHTML="<h3>"+vidoe.watch()+"</h3>";
        outputDivAllMovies.appendChild(div);
    }); 
}

creatForm();