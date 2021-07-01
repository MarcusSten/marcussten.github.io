export {  }

function changeSquare(obj) {
    obj.innerText = obj.innerText == "Переключиться на Калькулятор дат" ? "Переключиться на Таймер" : "Переключиться на Калькулятор дат";
    let elem = document.querySelector('#change');
    elem.classList.toggle('disabled');
}


