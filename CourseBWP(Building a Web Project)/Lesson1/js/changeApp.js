export const change = document.getElementById('changeApp');
change.addEventListener("click", changeSquare);

function changeSquare() {
    change.innerText = change.innerText == "Переключиться на Калькулятор дат" ? "Переключиться на Таймер" : "Переключиться на Калькулятор дат";
    const el1 = document.getElementById('datecalc');
    const el2 = document.getElementById('timer');
    el1.style.display === 'none' ? el1.style.display = 'initial' : el1.style.display = 'none';
    el2.style.display === 'initial' ? el2.style.display = 'none' : el2.style.display = 'initial';
};