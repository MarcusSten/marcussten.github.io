function myScript1(){
    let b = 0;
    let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 15, 18, 20];
    a.forEach(function(item, i, a){
        if(item%2 == 0) {
            b += Math.sqrt(item);
            alert("число " + item + ", его квадратный корень " + Math.sqrt(item) + " и сумма " + b);
        }
    });
}

function myScript2(){
    let a = 25;
    let b = 48;
    function summa() {
        alert("сумма чисел " + a + " и " + b + " равна " + (a+b));
    }
    summa();
}

function myScript3(){
    let name = "Marcus";
    let surname = "Sten";
    let year = 35;
    function getFIO() {
        alert("Привет " + name + " " + surname + " с возрастом " + year + " лет");
    }
    getFIO();
}

function myScript4(){
    let gender = prompt("Укажите ваш пол: ");
    function getGender() {
        if (gender == "m" || gender == "м" || gender == "male" || gender == "мужской") {
            alert("Ваш пол мужской")
        } else if (gender == "f" || gender == "female" || gender == "ж" || gender == "женский") {
            alert("Ваш пол женский")
        } else {
            alert("Ваш пол не определен")
        }
    }
    getGender();
}

function myScript5(){
    let day = prompt("Укажите номер дня недели: ");
    switch(day){
        case "1":
            alert("Понедельник");
            break;
        case "2":
            alert("Вторник");
            break;
        case "3":
            alert("Среда");
            break;
        case "4":
            alert("Четверг");
            break;
        case "5":
            alert("Пятница");
            break;
        case "6":
            alert("Суббота");
            break;
        case "7":
            alert("Воскресенье");
            break;
        default:
            alert("задан не верный номер дня недели");
    }
}

function myScript6(){
    function getDay(){
        let name = prompt("Укажите свое имя");
        let d = new Date();
        let hours = d.getHours();
        
        if (hours > 6 && hours < 12){
            alert("Доброе утро " + name);
        } else if (hours >= 12 && hours < 18){
            alert("Доброе день " + name);
        } else if (hours >= 18 && hours <= 23){
            alert("Доброе вечер " + name);
        } else {
            alert("Доброй ночи " + name);
        }
    }
    getDay();
}

function myScript7(){
    let year = 0;
    for (i = 0; i < 100; i++){
        if(year < 17){
            var p = document.createElement("p");
            p.innerText = ++year + " ребёнок";
            document.getElementById("app").append(p);
        } else if(year >= 17 && year < 29){
            var p = document.createElement("p");
            p.innerText = ++year + " молодой";
            document.getElementById("app").append(p);
        } else if(year >= 29 && year < 54){
            var p = document.createElement("p");
            p.innerText = ++year + " зрелый";
            document.getElementById("app").append(p);
        } else {
            var p = document.createElement("p");
            p.innerText = ++year + " старый";
            document.getElementById("app").append(p);
        }
    }
}

function myScript8(){
    let name = prompt("Введи свое имя");
    let year = prompt("Введи свой возраст");

    function getHello(){
        if(year < 17){
            alert(name + " имеет возраст " + year + " и он ребенок"); 
            myScriptNaN();
        } else if(year >= 17 && year < 29){
            alert(name + " имеет возраст " + year + " и он молодой");
            myScriptNaN();
        } else if(year >= 29 && year < 54){
            alert(name + " имеет возраст " + year + " и он зрелый"); 
            myScriptNaN();
        } else if(year >= 54 && year < 99){
            alert(name + " имеет возраст " + year + " и он старый"); 
            myScriptNaN();
        } else {
            alert(name + " имеет возраст " + year + " и он древний или не верно указал свой возраст");
            myScriptNaN();
        }
    }
    getHello();
}
function myScriptNaN(){
    let year = 0;
    for (i = 0; i < 100; i++){
        if(year < 17){
            var p = document.createElement("p");
            p.innerText = ++year + " ребёнок";
            document.getElementById("appNew").append(p);
        } else if(year >= 17 && year < 29){
            var p = document.createElement("p");
            p.innerText = ++year + " молодой";
            document.getElementById("appNew").append(p);
        } else if(year >= 29 && year < 54){
            var p = document.createElement("p");
            p.innerText = ++year + " зрелый";
            document.getElementById("appNew").append(p);
        } else {
            var p = document.createElement("p");
            p.innerText = ++year + " старый";
            document.getElementById("appNew").append(p);
        }
    }
}

function myScript9(){
    let nombers = [];
    for(i = 1; i < 6; i++){
        let nomber = +prompt("Введите пять чисел: " + i + "/5");
        nombers.push(nomber);
    }
    function parity(number){
        return (number % 2 == 0);
    };
    parity();
    alert( nombers.every(parity));
}

function myScript10(){
    let nombers = [];
    for(i = 0; i < 4; i++){
        let nomber = +prompt("Введите число");
        nombers.push(nomber);
    }
    function parity(number){
        return (number % 2 !== 0);
    };
    parity();
    alert( nombers.some(parity));
    }

function myScript11(){ 
    let nombers = [];
    for(i = 1; i < 6; i++){
        let nomber = +prompt("Введите пять чисел: " + i + "/5");
        nombers.push(nomber);
    }
    var nombers5 = nombers.filter(function(number) {
        return number % 5 == 0;
        });
    alert(nombers5);
}

function myScript12(){ 
    let nombers = [];
    for(i = 1; i < 6; i++){
        let nomber = +prompt("Введите пять чисел: " + i + "/5");
        nombers.push(nomber);
    }
    let summ = nombers.reduce(function(sum, current) {
        return sum + current;
    }, 0);
    alert("Сумма чисел массива равна: " + summ + ". Среднее арифметическое: " + summ / nombers.length.toFixed(1));
}

function myScript13(){
    let numbers = [];
    for(i = 1; i < 6; i++){
        let number = +prompt("Введите пять чисел: " + i + "/5");
        numbers.push(number);
    }
    alert("Твои числа: " + numbers);
    function conversion(){
        let number = numbers[0];
        alert("Первый элемент массива: " + number);
        numbers.shift();
        alert("Твои числа: " + numbers);
        numbers.push(number);
        alert("Перемещение первого элемента в конец массива: " + numbers);
    }
    conversion();
}

function myScript14(){
    let myNewJob = [];
    let myJob = [
        {name: 'Oleg', age: 35},
        {name: 'Job', age: 23},
        {name: 'Igor', age: 50},
        {name: 'Pavel', age: 30}
    ];
    for (var i = 0; i < myJob.length; i++) {
        (function(i) {
            this.print = function() {
                myNewJob.push("\nИмя: " + this.name + ', возраст: ' + this.age);
            }
            this.print();
        }).call(myJob[i], i);
    }
    alert(myNewJob);
    console.table(myNewJob);
}

function myScript15(){
    let myJob = [
        {name: 'Oleg', age: 35, salary: 700},
        {name: 'Givi', age: 23, salary: 1000},
        {name: 'Igor', age: 50, salary: 1100},
        {name: 'Pavel', age: 30, salary: 300}
    ];
    let sum = 0;
    function countSalary() {
        for (i = 0; i < myJob.length; i++) { 
            sum += myJob[i].salary;
        }
        return sum;
    }
    alert("Cумма зарплат сотрудников \n" + myJob[0].name + myJob[0].salary + "$\n" + myJob[1].name + myJob[1].salary + "$\n" + myJob[2].name + myJob[2].salary + "$\n" + myJob[3].name + myJob[3].salary + "$\n" + "Итого: " + countSalary(myJob) + "$");
}

function myScript16(){
    let obj = {name: 'Oleg', age: 35, salary: 700};
    alert(Object.entries(obj).join('\n'));
    function multiplyNumeric(obj){
        for(let key in obj){
            if(typeof obj[key] == 'number'){
                obj[key] *= 2;
            }
        }
    }
    multiplyNumeric(obj);
    alert(Object.entries(obj).join('\n'));

}

function myScript17(){
    let ladder = {
        step: 0,
        up() {
            this.step++;
        },
        down() {
            this.step--;
        },
        showStep: function() {
            alert("Ступенька " + this.step );
        }
    };
    ladder.up();
    ladder.up();
    ladder.down();
    ladder.up();
    ladder.showStep();
}

function myScript18(){
    let btn = document.getElementById("button18");
    btn.innerHTML = '<button onClick="getAlert()">Привет</button>'; 
}
function getAlert(){
    alert("Привет Мир!");
}

function myScript19(){
    let btn = document.getElementById("button19");
    btn.innerHTML = '<button onClick="fillInput()">Заполнить</button><br><input type="email" id="inputEmail">';
}
function fillInput(){
    let fillMail = document.getElementById("inputEmail").value = 'test@email.ru';
}

function myScript20(){
    let btn = document.getElementById("button20");
    btn.innerHTML = '<button onClick="checkInput()">Проверить</button><br><input type="text" id="inputText20">';  
}
function checkInput(){
    if (document.getElementById("inputText20").value === '') {
        alert("Вы ничего не ввели в поле");
    }else{
        alert("Вы ввели: " + document.getElementById("inputText20").value)
    }
}

function myScript21(){
    let btn = document.getElementById("button4");
    btn.innerHTML = '<button onClick="changeInput()">Поменять</button><br><input type="text" id="inputText1"><br><input type="text" id="inputText2">';
}
function changeInput(){
    let storage = document.getElementById("inputText2").value;
    document.getElementById("inputText2").value = document.getElementById("inputText1").value;
    document.getElementById("inputText1").value = storage;
}

function myScript22(){
    let btn = document.getElementById("button5");
    btn.innerHTML = '<button onClick="disabledInput()">заблокировать</button><br><br><button onClick="activatedInput()">разблокировать</button><br><br><input type="text" id="inputText3">';
}
function disabledInput(){
    document.getElementById("inputText3").setAttribute('disabled', 'disabled');
}
function activatedInput(){
    document.getElementById("inputText3").removeAttribute('disabled');
}

function myScript23(){
    let btn = document.getElementById("button6");
    btn.innerHTML = '<button onClick="changeSquare(this)">Скрыть квадрат</button><br><br><div class="square" id="change"></div>';
}
function changeSquare(obj) {
    obj.innerText = obj.innerText == "Скрыть квадрат" ? "Показать квадрат" : "Скрыть квадрат";
    let elem = document.querySelector('#change');
    elem.classList.toggle('disabled');
}

function myScript24(){
    let btn = document.getElementById("button7");
    btn.innerHTML = '<div class="square2" id="changeColor"></div>';
    let change = document.getElementById("changeColor");
    change.addEventListener("mouseover", function () {
        this.style.backgroundColor = "green"; 
    });
    change.addEventListener("mouseout", function () {
        this.style.backgroundColor = "red"; 
    });
}

function myScript25(){
    let btn = document.getElementById("button8");
        for(i = 0; i < 5; i++){
            btn.insertAdjacentHTML('beforeend', '<div class="square3" id="change2" onClick="changeSquare2(this)"></div><br>');
        }
}
function changeSquare2(obj) {
    let elem = document.querySelectorAll('#change2').forEach(function(elem){
        elem.style.background = 'red';
    })
    obj.style.backgroundColor = "green";
}

function myScript26(){
    let btn = document.getElementById("button9");
    btn.innerHTML = '<input class="input__calc" type="text" id="inputText" disabled>' +
    '<br><button class="btn" onClick="get(this.value)" value="7">7</button>' +
    '<button class="btn" onClick="get(this.value)" value="8">8</button>' +
    '<button class="btn" onClick="get(this.value)" value="9">9</button>' +
    '<br><button class="btn" onClick="get(this.value)" value="4">4</button>' +
    '<button class="btn" onClick="get(this.value)" value="5">5</button>' +
    '<button class="btn" onClick="get(this.value)" value="6">6</button>' +
    '&emsp;&emsp;<button class="btn" onClick="getOperator(this.value)" value="/">/</button>' +
    '<button class="btn" onClick="getOperator(this.value)" value="*">*</button>' +
    '<button class="btn" onClick="getOperator(this.value)" value="-">-</button>' +
    '<br><button class="btn" onClick="get(this.value)" value="1">1</button>' +
    '<button class="btn" onClick="get(this.value)" value="2">2</button>' +
    '<button class="btn" onClick="get(this.value)" value="3">3</button>' +
    '&emsp;&emsp;<button class="btn__main" onClick="getOperator(this.value)" value="+">+</button>' +
    '<button class="btn__main" onClick="getResult(this.value)" value="=">=</button>' +
    '<br><button class="btn" onClick="get(this.value)" value="0">0</button>' +
    '<button class="btn" onClick="get(this.value)" value="00">00</button>' +
    '<button class="btn" onClick="get(this.value)" value=".">.</button>' +
    '&emsp;&emsp;<button class="btn__clear" onClick="getClear()">C</button>'; 
}
function get(val){
    document.getElementById("inputText").value += val;
}
function getOperator(val){
    document.getElementById("inputText").value += " " + val + " ";
}
function getResult(val){
    document.getElementById("inputText").value = eval(document.getElementById("inputText").value);   
}
function getClear(){
    document.getElementById("inputText").value = "";   
}

function myScript27(){
    let btn = document.getElementById('button27');
    btn.innerHTML = '<input class="inputNumber" type="text">' +
    '<input class="inputNumber" type="text">' +
    '<input class="inputNumber" type="text">' +
    '<button id="task27">Посчитать</button>' +
    '<input id="sum" type="text">'; 

    let elem = document.getElementById('task27');
    elem.addEventListener('click', func);
    let elem1 = document.getElementsByClassName('inputNumber');

    function func() {
        let sum = 0;
        for (let i = 0; i < elem1.length; i++) {
            sum += +elem1[i].value;
        }
        let newElem = document.getElementById('sum');
        newElem.value = sum;
    }  
}
 

function myScript28(){
    let quantityInput = +prompt("Введите желаемое кол-во <input>");
    let btn = document.getElementById('button28');
    btn.innerHTML = '<button id="task28">Посчитать</button>' +
    '<p id="result28"></p>';
    for (let i = 0; i < quantityInput; i++){
        btn.insertAdjacentHTML('beforeEnd', '<input class="num" type="text"><br>');
    }
    let elem = document.getElementById('task28');
    elem.addEventListener('click', func);
    let elem1 = document.getElementsByClassName('num');

    function func() {
        let sum = 0;
        for (let i = 0; i < elem1.length; i++) {
            sum += +elem1[i].value;
        }
        let newElem = document.getElementById('result28');
        newElem.innerText = sum;
    }
}

function myScript29(){
    let btn = document.getElementById('button29');
    btn.innerHTML = '<input id="inputNumber29" type="text">';
    let inputNumber = document.getElementById('inputNumber29');
    inputNumber.addEventListener('blur', func);

    function func() {
        let numbers = document.getElementById('inputNumber29').value;
        let digits = ("" + numbers).split("");
        let sum = 0;
        for( let i = 0; i < digits.length; i++ ) {
        sum += Number(digits[i]);
        }
        document.getElementById('inputNumber29').value = sum;
    };
}

function myScript30(){
    let btn = document.getElementById('button30');
    btn.innerHTML = '<input id="inputNumber30" type="text" placeholder="Введи числа через запятую">';
    let inputNumber = document.getElementById('inputNumber30');
    inputNumber.addEventListener('blur', func);
    
    function func() {
        let numbers = document.getElementById('inputNumber30').value;
        let digits = ("" + numbers).split(",");
        let sum = 0;
        for( let i = 0; i < digits.length; i++ ) {
        sum += Number(digits[i]);
        }
        document.getElementById('inputNumber30').value = sum / digits.length;
    };
}

function myScript31(){
    let btn = document.getElementById('button31');
    btn.innerHTML = '<input id="name31" type="text" placeholder="Введи ФИО через пробел">';
    let inputNumber = document.getElementById('name31');
    inputNumber.addEventListener('blur', func);

    function func() {
        let fullName = document.getElementById('name31').value;
        let share = ("" + fullName).split(" ");
        let enterName = document.getElementById('naming');
        enterName.innerHTML = "";
        for( let i = 0; i < share.length; i++ ) {  
            enterName.insertAdjacentHTML('beforeend', '<input type="text" value="' + share[i] + '">');
        }
    };
}

function myScript32(){
    let btn = document.getElementById('button32');
    btn.innerHTML = '<input id="name32" type="text" placeholder="Введи ФИО через пробел">';
    String.prototype.firstLetterCaps = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }
    let inputNumber = document.getElementById('name32');
    inputNumber.addEventListener('blur', func);

    function func() {
        let fullName = document.getElementById('name32').value;
        let share = ("" + fullName).split(" ");
        document.getElementById('name32').value = "";
        for( let i = 0; i < share.length; i++ ) {
            document.getElementById('name32').value += share[i].firstLetterCaps() + " ";
        }
        document.getElementById('name32').value = document.getElementById('name32').value.trimEnd();
    };
}

function myScript33(){
    let btn = document.getElementById('button33');
        btn.innerHTML = '<input id="text" type="text">';
        let inputText = document.getElementById('text');
        inputText.addEventListener('blur', func);

    function func() {
        let num = 0;
        let str = inputText.value;
        let arr = str.split(' ');
        for (let i = 0; i < arr.length; i++) {
            if(arr[i] !== ""){
            num += 1;
            }
        }
        if (!document.getElementById('result33')){
        btn.insertAdjacentHTML('beforeend', '<p id="result33">' + num + '</p>');
        } else {
            let result = document.getElementById('result33');
            result.innerText = num;
        }
    }    
}

function myScript34(){
    let btn = document.getElementById('button34');
    btn.innerHTML = '<input id="text34" type="text">';
    let inputText = document.getElementById('text34');
    inputText.addEventListener('blur', func);
    
    function func() {
        let str = inputText.value;
        let arr = str.split(' ');
        let bigWord = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if(arr[i].length > bigWord.length){
                bigWord = arr[i]; 
            }
        }
        if (!document.getElementById('result')){
        btn.insertAdjacentHTML('beforeend', '<p id="result34">' + 'В самом длинном слове ' + bigWord + ' ' + bigWord.length + ' символов' + '</p>');
        } else {
            let result = document.getElementById('result34');
            result.innerText = bigWord.length;
        }
    }   
}

function myScript35(){
    let btn = document.getElementById('button35');
    btn.innerHTML = '<input id="text35" type="text">';
    let inputText = document.getElementById('text35');
    inputText.addEventListener('blur', func);

    function func() {
        let str = inputText.value;
        let arr = str.split('.');
        document.getElementById('text35').value = arr[2] + '-' + arr[1] + '-' + arr[0];
    }   
}

function myScript36(){
    let btn = document.getElementById('button36');
    btn.innerHTML = '<input id="date36" type="date" placeholder="Введите дату рождения">' +
    '<button onClick="getBirdthDate()">Вывести</button>'+
    '<p id="result36"></p>';
}
function getBirdthDate() {
    let date = document.getElementById('date36').value;
    let age = ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)) | 0;
    let newElem = document.getElementById('result36');
    newElem.innerText = "Полных лет: " + age;
}

function myScript37(){
    let btn = document.getElementById('button37');
    btn.innerHTML = '<input id="date37" type="date" placeholder="Введите дату рождения">' +
    '<button onClick="getOfWeek()">Вывести</button>'+
    '<p id="result37"></p>';
}
function getOfWeek() {
    let myDate = new Date(document.getElementById('date37').value);
    document.getElementById('result37').textContent = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"][myDate.getDay()];
}

function myScript38(){
    let btn = document.getElementById('button38');
    btn.innerHTML = '<input id="date38" type="text">' +
    '<button onClick="palindrome()">Проверить</button>';
}
function palindrome() {
    let str = document.getElementById('date38').value;
    let arr = str.split('');
    let arr2 = str.split('').reverse();
    for(let i = 0; i < arr.length; i++) {
        if(arr[i]!== arr2[i]) { 
            alert('это слово не палиндром');
            return;
        }
    }
    alert('это слово палиндром');
    return;
}

function myScript39(){
    let btn = document.getElementById('button39');
    btn.innerHTML = '<input id="date39" type="text">' +
    '<button onClick="nomberThree()">Проверить</button>';
}
function nomberThree(){
    let num = document.getElementById('date39').value;
    if(num.indexOf('3') !== -1) {
        alert('Значение ' + num + ' содержит цифру 3')
    } else {
        alert('Значение ' + num + ' не содержит цифру 3')
    }
}

function myScript40(){
    let lorem = '<p class="paragraph-num">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea ut blanditiis, vitae dolore magnam minima illum at rerum. Labore, expedita, ad accusamus mollitia asperiores cumque nesciunt reprehenderit perspiciatis? Magnam ipsam doloremque, voluptatem fugiat laborum provident recusandae assumenda?</p>';
    let btn = document.getElementById('button40');
    let randomParagr = Math.floor(Math.random() * (5 - 1) + 1);
    for (let i = 0; i < randomParagr; i++){
        lorem += lorem;
    }
    btn.innerHTML = lorem + '<br><br><button id="btn40">Пронумеровать</button>';
    let elem = document.getElementsByClassName('paragraph-num');
    let getBtn40 = document.getElementById('btn40');
    getBtn40.addEventListener('click', func);

    function func(){
        for (let i = 0; i< elem.length; i++) {
            elem[i].innerHTML = elem[i].innerHTML+' '+('<span class="numParagr">' + (i + 1) + '</span>');
        }
    
    }
}

function myScript41(){
    let btn = document.getElementById('button41');
    btn.innerHTML = "";
    let arr = [];
    let randomParagr = Math.floor(Math.random() * (10 - 4) + 4);
    for (let i = 0; i < randomParagr; i++){
        arr.push(Math.floor(Math.random() * (99 - 1) + 1));
        btn.innerHTML += '<p class="paragraph41">' + arr[i] + '</p>';
    }
    btn.innerHTML += '<br><button id="btn41">Фильтр по возрастанию</button>';
    let elem = document.getElementsByClassName('paragraph41');
    let getBtn41 = document.getElementById('btn41');
    getBtn41.addEventListener('click', func);

    function func(){
        arr.sort( (a, b) => a - b );
        btn.innerHTML += '<br><input id="date41" type="text" value="' + arr + '">';
    }
}

let addHref = document.getElementsByClassName('href42');  
document.addEventListener('DOMContentLoaded', function() {
    for (var i = 0; i < addHref.length; i++) {
        addHref[i].innerHTML = addHref[i].innerHTML + ' (' + addHref[i].href + ')';
    }
}, false);

let addHref2 = document.getElementsByClassName('href43');
let pattern = 'http://';
document.addEventListener('DOMContentLoaded', function() {
    for (var i = 0; i < addHref2.length; i++) {
        if (addHref2[i].href.indexOf(pattern) !== -1) {
        addHref2[i].innerHTML = addHref2[i].innerHTML + ' &rarr;';
        }
    }
}, false);

function myScript44(){
    let btn = document.getElementById('button44');
    btn.innerHTML = "";
    let arr = [];
    let randomParagr = Math.floor(Math.random() * (10 - 4) + 4);
    for (let i = 0; i < randomParagr; i++){
        arr.push(Math.floor(Math.random() * (99 - 1) + 1));
        btn.insertAdjacentHTML('beforeend', '<p onClick="getsquare44(this)">' + arr[i] + '</p>');
    }
}
function getsquare44(obj) {
    obj.innerHTML = Math.pow(obj.innerHTML, 2);
}

function myScript45(){
    let btn = document.getElementById('button45');
    btn.innerHTML = '<img src="img/icon3.png" class="changeImageSize45" alt="photo1">' +
    '<img src="img/icon4.png" class="changeImageSize45" alt="photo2">' +
    '<img src="img/icon5.png" class="changeImageSize45" alt="photo3">';  

    let elem = document.getElementsByClassName('changeImageSize45');
    for (let i = 0; i < elem.length; i++){
        elem[i].addEventListener('click', func);
    }
    function func() {
        this.height = this.height * 2;
    }
}  

function myScript46(){
    let btn = document.getElementById('button46');
    btn.innerHTML = '<img src="img/icon3.png" height="70" alt="photo1"onClick="changeSizeImage46(this)">' +
    '<img src="img/icon4.png" height="70" alt="photo2"onClick="changeSizeImage46(this)">' +
    '<img src="img/icon5.png" height="70" alt="photo3"onClick="changeSizeImage46(this)">';  
    }
    function changeSizeImage46(obj){
    if (obj.style.height == '140px'){
        obj.style.height = '70px';
    } else {
        obj.style.height = '140px';
    }
}

function myScript47(){

}

function myScript48(){

}

function myScript49(){

}


