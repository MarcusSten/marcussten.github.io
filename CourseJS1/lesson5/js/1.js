function myScript1(){

    
	
    var table = document.createElement("table");
    var shapes = ["&#9823;", "&#9820;", "&#9822;", "&#9821;", "&#9819;", "&#9818;"];
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H"];

    table.style.border = "2px solid black";
    table.style.width = "700px";
    table.style.height = "700px";
    table.style.margin = "0 auto";
    var tr, td, i;
    for (i = 0; i < 10; i++) {
        tr = document.createElement("tr");
        table.append(tr);
        for (j = 0; j < 10; j++) {
            td = document.createElement("td");
            td.style.backgroundColor = ((i + 1) + (j + 1)) % 2 ? "#8B4513" : "#FFE4C4";
            tr.append(td);
        }
    }

    document.getElementById("x").append(table);

    //Расстановка пешек
    for (var i = 1; i <= 8; i++) {
    //Белые пешки
        table.rows[7].cells[i].innerHTML = shapes[0];
    // Черные пешки
        table.rows[2].cells[i].innerHTML = shapes[0];
    }

    //Покраска белых фигур
    for (var i = 1; i <= 8; i++) {
        table.rows[7].cells[i].className = "white";
        table.rows[8].cells[i].className = "white";
    }

    //Расстановка остальных фигур
    for (var i = 1, j = 8; i <= 3; i++, j--){
        //Белые фигуры
        table.rows[8].cells[i].innerHTML = shapes[i];
        table.rows[8].cells[j].innerHTML = shapes[i];
        //Черные фигуры
        table.rows[1].cells[i].innerHTML = shapes[i];
        table.rows[1].cells[j].innerHTML = shapes[i];
    }
    //Белые король и ладья
    table.rows[8].cells[5].innerHTML = shapes[5];
    table.rows[8].cells[4].innerHTML = shapes[4];
    //Черные король и ладья
    table.rows[1].cells[4].innerHTML = shapes[4];
    table.rows[1].cells[5].innerHTML = shapes[5];

    //Разметка верт.
    for (var i = 1, j = 8; i <= 8; i++, j--) {
        table.rows[i].cells[0].innerHTML = String(j);
        table.rows[i].cells[9].innerHTML = String(j);
    }

    //Разметка гор.
    for (var i = 1; i <= 8; i++) {
        table.rows[0].cells[i].innerHTML = letters[i - 1];
        table.rows[9].cells[i].innerHTML = letters[i - 1];
    }

    //Развернутая разметка
    for (var i = 0; i <= 7; i++) {
    table.rows[0].cells[i+1].innerHTML = "<div>" + letters[i] + "</div>";
    }
    for (var i = 0; i <= 7; i++) {
        table.rows[i+1].cells[9].innerHTML = "<div>" + Math.abs(i-8) + "</div>";
    }

    //Классы для стилей CSS разметки
    for (var i = 0; i <= 9; i++) {
        table.rows[0].cells[i].className = "markup";
        table.rows[i].cells[9].className = "markup";
        table.rows[9].cells[i].className = "markup";
        table.rows[i].cells[0].className = "markup";
    }
}