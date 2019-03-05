var collaps = document.getElementsByClassName("collapsible");

for (var i = 0; i < collaps.length; i++) {
    collaps[i].addEventListener("click", function () {
        var content = this.nextElementSibling;
        this.classList.toggle("active");
        if (content.style.display === "table-row") {
            content.style.display = "none";
        }
        else {
            content.style.display = "table-row";
        }
    });
}

function sortBy(value) {
    var table, rows, switching, currentRow, nextRow, shouldSwitch;
    table = document.getElementById("contacts-table");
    switching = true;

    while (switching) {
        switching = false;
        rows = table.rows;
        for (var i = 1; i < rows.length - 1; i++) {
            shouldSwitch = false;

            currentRow = rows[i].getElementsByTagName("TD")[value];
            nextRow = rows[i + 1].getElementsByTagName("TD")[value];

            if (currentRow.innerHTML.toLowerCase() > nextRow.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }

        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
} 