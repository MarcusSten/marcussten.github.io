let quantityCards = 0;
let square = 0;
let arr = [];
let step = 0;
let score = 0;
let cardOne;
let cardTwo;
let cardOneWinner;
let cardTwoWinner;
let number = 0;
let theme = '';

//Вставка картинок в меню
let themesIcons = document.querySelectorAll('.box');
for(let i = 0; i < themesIcons.length; i++){
    themesIcons[i].style.backgroundImage = 'url(./img/' + themesIcons[i].id + '.png)';
}

//Выбор темы и кол-ва карт
let inpTheme = document.querySelectorAll('[name="theme"]');
for(let i = 0; i < inpTheme.length; i++){
    inpTheme[i].onclick = function() {
        let o = document.querySelector('[name="theme"]:checked');
        theme = o.value;
    }
};
let inpSquare = document.querySelectorAll('[name="square"]');
for(let i = 0; i < inpSquare.length; i++){
    inpSquare[i].onclick = function() {
        let o = document.querySelector('[name="square"]:checked');
        number = o.value;
        square = o.alt;
    }
};

//Создание доски и массива картинок
function createCards(number, square){
    score = 0;
    arr = [];
    if (theme == 'words-img'){
        for (let i = 0; i < number; i++){
            arr.push('./img/' + theme + '/icon' + (i + 1) + '_1.png');
            arr.push('./img/' + theme + '/icon' + (i + 1) + '_2.png');
        }
    } else {
        for (let i = 0; i < number; i++){
            arr.push('./img/' + theme + '/icon' + (i + 1) + '.png');
            arr.push('./img/' + theme + '/icon' + (i + 1) + '.png');
        }
    }

    if (theme == '' || square == 0) {
        error();
    } else {
        hideMenu();
        let board = document.getElementById('Cards');
        board.style.width = (71 * square) + 'px';
        board.style.height = (71 * square) + 'px';
        square = 0;
        quantityCards = number;

        shuffling();
    }
}

//Отрисовка карт
function render(){
    let memoryCards = document.getElementById('Cards');
    memoryCards.innerHTML = "";
    arr.forEach((element, index) => {
        const img = document.createElement("div");
        img.style.width = '70px';
        img.style.height = '70px';
        img.style.backgroundSize = 'contain';
        img.style.backgroundImage = 'url(./img/rub.png)';
        img.className = 'memory-card';
        img.id = index;
        img.setAttribute("onClick", "checkStep(this)");
        document.getElementById("Cards").appendChild(img);
    });
}

//Тасование Фишера — Йетса
function shuffling(){
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    render();
}

//Проверка открытых карт
function checkStep(obj){
    switch(step) {
        case 0:
            obj.style.backgroundImage = 'url(' + arr[obj.id] + ')';
            cardOne = obj.style.backgroundImage.split('_')[0];
            cardOneWinner = obj;
            obj.onclick = null;
            step++;
            break;

        case 1:
            obj.style.backgroundImage = 'url(' + arr[obj.id] + ')';
            cardTwo = obj.style.backgroundImage.split('_')[0];
            cardTwoWinner = obj;
            obj.onclick = null;
            if (cardOne == cardTwo){
                step = 0;
                score++;
                cardOneWinner.className = ' winnerCard';
                cardTwoWinner.className = ' winnerCard';

                if (score == quantityCards){
                    congratulations();
                    score = 0;
                    quantityCards = 0;
                }
            } else {
                step++;
                setTimeout(reverseCards, 1000)
            }
            break;
    }
}

//Скрытие карт
function reverseCards(){
    let elem = document.querySelectorAll('div.memory-card');
    for (let i = 0; i <elem.length; i++){
        elem[i].style.backgroundImage = 'url(./img/rub.png)';
        elem[i].setAttribute("onClick", "checkStep(this)")
    }
    step = 0;
}

function hideMenu(){
    document.getElementById('changeBoard').classList.toggle('hide');
    document.getElementById('returnMenu').classList.toggle('hide');
}

function returnMenu(){
    document.getElementById('changeBoard').classList.toggle('hide');
    document.getElementById('returnMenu').classList.toggle('hide');
    arr = [];
    render();
}

//Модальное окно
let close_modal = document.getElementById('close_modal');
let close_modalError = document.getElementById('close_modal_err');
let modal = document.getElementById('modal');
let modalError = document.getElementById('modal_err');
let body = document.getElementsByTagName('body')[0];

function congratulations() {
    modal.classList.add('modal_vis'); // добавляем видимость окна
    modal.classList.remove('bounceOutDown'); // удаляем эффект закрытия
    body.classList.add('body_block'); // убираем прокрутку
};

function error() {
    modalError.classList.add('modal_vis'); // добавляем видимость окна
    modalError.classList.remove('bounceOutDown'); // удаляем эффект закрытия
    body.classList.add('body_block'); // убираем прокрутку
};

close_modal.onclick = function() { // клик на закрытие
    modal.classList.add('bounceOutDown'); // добавляем эффект закрытия
    window.setTimeout(function() { // удаляем окно через полсекунды (чтобы увидеть эффект закрытия).
        modal.classList.remove('modal_vis'); 
        body.classList.remove('body_block'); // возвращаем прокрутку
        returnMenu();
    }, 500);
};

close_modalError.onclick = function() { // клик на закрытие
    modalError.classList.add('bounceOutDown'); // добавляем эффект закрытия
    window.setTimeout(function() { // удаляем окно через полсекунды (чтобы увидеть эффект закрытия).
        modalError.classList.remove('modal_vis'); 
        body.classList.remove('body_block'); // возвращаем прокрутку
    }, 500);
};