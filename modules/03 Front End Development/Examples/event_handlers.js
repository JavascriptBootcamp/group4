function convertToUpperCase(event) {
    var username = document.getElementById("username").value;
    document.getElementById("username").value = username.toUpperCase();
}

function convertToLowerCase(event) {
    var username = document.getElementById("username").value;
    document.getElementById("username").value = username.toLowerCase();
}

function submitForm(e, username) {
    e.preventDefault();
    console.log('Hello ' + username, e);
}

// document.querySelector("#btnClickHere").onclick = convertToUpperCase;

// document.querySelector("#btnClickHere").addEventListener("click", convertToUpperCase);