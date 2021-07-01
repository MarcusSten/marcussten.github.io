export let change = document.getElementById('changeApp');
change.addEventListener("click", changeSquare);
let take = document.getElementById('change1');

function changeSquare() {
    change.innerText = change.innerText == "Переключиться на Калькулятор дат" ? "Переключиться на Таймер" : "Переключиться на Калькулятор дат";
    let el1 = document.getElementById('change1');
    let el2 = document.getElementById('change2');
    el1.style.display === 'none' ? el1.style.display = 'initial' : el1.style.display = 'none';
    el2.style.display === 'initial' ? el2.style.display = 'none' : el2.style.display = 'initial';
};