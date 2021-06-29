function myScript1(){
    let btn = document.getElementById('form-date');
    btn.innerHTML = '<button onClick="changeSquare(this)">Переключиться на Таймер</button><br><br><div class="square" id="change">' +
    '<form id="datecalc">' +
    '<h3>Калькулятор дат</h3>' +
    '<label>' +
    '<strong>Первая дата:</strong>' +
    '<input type="date" name="firstDate" />' +
    '</label>' +
    '<label>' +
    '<strong>Вторая дата:</strong>' +
    '<input type="date" name="secondDate" />' +
    '</label>' +
    '<button type="submit">Расчитать промежуток</button>' +
    '<p id="datecalc__result"></p>' +
    '</form></div>';
}

function changeSquare(obj) {
    obj.innerText = obj.innerText == "Переключиться на Калькулятор дат" ? "Переключиться на Таймер" : "Переключиться на Калькулятор дат";
    let elem = document.querySelector('#change');
    elem.classList.toggle('disabled');
    }























function myScript2(){
    
}

