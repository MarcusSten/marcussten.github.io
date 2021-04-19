function myScript1(){

    
	
    var table = document.createElement("table");
    var shapesWhite = ["&#9817;", "&#9814;", "&#9816;","&#9815;", "&#9813;", "&#9812;"];
    var shapesBlack = ["&#9823;", "&#9820;", "&#9822;", "&#9821;", "&#9819;", "&#9818;"];
  
	table.style.border = "2px solid black";
    table.style.width = "700px";
    table.style.height = "700px";
    table.style.margin = "0 auto";
	var tr, td, i;
	for(i = 0; i < 10; i++){
		tr = document.createElement("tr");
		table.append(tr);
		for(j = 0; j < 10; j++){
			td = document.createElement("td");
			td.style.backgroundColor = ((i + 1) + (j+1)) % 2 ? "#8B4513": "#FFE4C4";
			tr.append(td);
		}
    };

    document.getElementById("x").append(table);
    //Белые фигуры
    table.rows[7].cells[1].innerHTML = shapesWhite[0];
    table.rows[7].cells[2].innerHTML = shapesWhite[0];
    table.rows[7].cells[3].innerHTML = shapesWhite[0];
    table.rows[7].cells[4].innerHTML = shapesWhite[0];
    table.rows[7].cells[5].innerHTML = shapesWhite[0];
    table.rows[7].cells[6].innerHTML = shapesWhite[0];
    table.rows[7].cells[7].innerHTML = shapesWhite[0];
    table.rows[7].cells[8].innerHTML = shapesWhite[0];
    table.rows[8].cells[1].innerHTML = shapesWhite[1];
    table.rows[8].cells[2].innerHTML = shapesWhite[2];
    table.rows[8].cells[3].innerHTML = shapesWhite[3];
    table.rows[8].cells[4].innerHTML = shapesWhite[5];
    table.rows[8].cells[5].innerHTML = shapesWhite[4];
    table.rows[8].cells[6].innerHTML = shapesWhite[3];
    table.rows[8].cells[7].innerHTML = shapesWhite[2];
    table.rows[8].cells[8].innerHTML = shapesWhite[1];
    //Черные фигуры
    table.rows[2].cells[1].innerHTML = shapesBlack[0];
    table.rows[2].cells[2].innerHTML = shapesBlack[0];
    table.rows[2].cells[3].innerHTML = shapesBlack[0];
    table.rows[2].cells[4].innerHTML = shapesBlack[0];
    table.rows[2].cells[5].innerHTML = shapesBlack[0];
    table.rows[2].cells[6].innerHTML = shapesBlack[0];
    table.rows[2].cells[7].innerHTML = shapesBlack[0];
    table.rows[2].cells[8].innerHTML = shapesBlack[0];
    table.rows[1].cells[1].innerHTML = shapesBlack[1];
    table.rows[1].cells[2].innerHTML = shapesBlack[2];
    table.rows[1].cells[3].innerHTML = shapesBlack[3];
    table.rows[1].cells[4].innerHTML = shapesBlack[4];
    table.rows[1].cells[5].innerHTML = shapesBlack[5];
    table.rows[1].cells[6].innerHTML = shapesBlack[3];
    table.rows[1].cells[7].innerHTML = shapesBlack[2];
    table.rows[1].cells[8].innerHTML = shapesBlack[1];
    //Разметка верт.
    table.rows[1].cells[0].innerHTML = "8";
    table.rows[2].cells[0].innerHTML = "7";
    table.rows[3].cells[0].innerHTML = "6";
    table.rows[4].cells[0].innerHTML = "5";
    table.rows[5].cells[0].innerHTML = "4";
    table.rows[6].cells[0].innerHTML = "3";
    table.rows[7].cells[0].innerHTML = "2";
    table.rows[8].cells[0].innerHTML = "1";
    table.rows[1].cells[9].innerHTML = "8";
    table.rows[2].cells[9].innerHTML = "7";
    table.rows[3].cells[9].innerHTML = "6";
    table.rows[4].cells[9].innerHTML = "5";
    table.rows[5].cells[9].innerHTML = "4";
    table.rows[6].cells[9].innerHTML = "3";
    table.rows[7].cells[9].innerHTML = "2";
    table.rows[8].cells[9].innerHTML = "1";
    //Разметка гор.
    table.rows[0].cells[1].innerHTML = "A";
    table.rows[0].cells[2].innerHTML = "B";
    table.rows[0].cells[3].innerHTML = "C";
    table.rows[0].cells[4].innerHTML = "D";
    table.rows[0].cells[5].innerHTML = "E";
    table.rows[0].cells[6].innerHTML = "F";
    table.rows[0].cells[7].innerHTML = "G";
    table.rows[0].cells[8].innerHTML = "H";
    table.rows[9].cells[1].innerHTML = "A";
    table.rows[9].cells[2].innerHTML = "B";
    table.rows[9].cells[3].innerHTML = "C";
    table.rows[9].cells[4].innerHTML = "D";
    table.rows[9].cells[5].innerHTML = "E";
    table.rows[9].cells[6].innerHTML = "F";
    table.rows[9].cells[7].innerHTML = "G";
    table.rows[9].cells[8].innerHTML = "H";

    table.rows[0].cells[0].className = "markup-rotate";
    table.rows[0].cells[1].className = "markup-rotate";
    table.rows[0].cells[2].className = "markup-rotate";
    table.rows[0].cells[3].className = "markup-rotate";
    table.rows[0].cells[4].className = "markup-rotate";
    table.rows[0].cells[5].className = "markup-rotate";
    table.rows[0].cells[6].className = "markup-rotate";
    table.rows[0].cells[7].className = "markup-rotate";
    table.rows[0].cells[8].className = "markup-rotate";
    table.rows[9].cells[0].className = "markup";
    table.rows[9].cells[1].className = "markup";
    table.rows[9].cells[2].className = "markup";
    table.rows[9].cells[3].className = "markup";
    table.rows[9].cells[4].className = "markup";
    table.rows[9].cells[5].className = "markup";
    table.rows[9].cells[6].className = "markup";
    table.rows[9].cells[7].className = "markup";
    table.rows[9].cells[8].className = "markup";

    table.rows[1].cells[0].className = "markup";
    table.rows[2].cells[0].className = "markup";
    table.rows[3].cells[0].className = "markup";
    table.rows[4].cells[0].className = "markup";
    table.rows[5].cells[0].className = "markup";
    table.rows[6].cells[0].className = "markup";
    table.rows[7].cells[0].className = "markup";
    table.rows[8].cells[0].className = "markup";
    table.rows[0].cells[9].className = "markup-rotate";
    table.rows[1].cells[9].className = "markup-rotate";
    table.rows[2].cells[9].className = "markup-rotate";
    table.rows[3].cells[9].className = "markup-rotate";
    table.rows[4].cells[9].className = "markup-rotate";
    table.rows[5].cells[9].className = "markup-rotate";
    table.rows[6].cells[9].className = "markup-rotate";
    table.rows[7].cells[9].className = "markup-rotate";
    table.rows[8].cells[9].className = "markup-rotate";
    table.rows[9].cells[9].className = "markup-rotate";

  
}