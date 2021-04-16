function myScript1(){

    var table = document.createElement('table');
    table.style.border = "2px solid black";
    table.style.width = "700px";
    table.style.height = "700px";
    table.style.margin = "0 auto";
    var tr, td, i, j;
    for (i = 0; i < 8; i++){
        tr = document.createElement("tr");
        table.append(tr);
        for (j = 0; j < 8; j++){
            td = document.createElement("td");
            td.style.backgroundColor = (i + j) % 2 ? "black": "white";
            tr.append(td);
        }

    }

    var block = document.getElementById("x");
    document.body.prepend(table);
}