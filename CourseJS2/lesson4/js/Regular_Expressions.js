function myScript1(){
let text = `One: 'Hi Mary.' Two: 'Oh, hi.'
One: 'How are you doing?'
Two: 'I'm doing alright. How about you?'
One: 'Not too bad. The weather is great isn't it?'
Two: 'Yes. It's absolutely beautiful today.'
One: 'I wish it was like this more frequently.'
Two: 'Me too.'
One: 'So where are you going now?'
Two: 'I'm going to meet a friend of mine at the department store'
One: 'Going to do a little shopping?'
Two: 'Yeah, I have to buy some presents for my parents.'
One: 'What's the occasion?'
Two: 'It's their anniversary.'
One: 'That's great. Well, you better get going. You don't want to be late.'
Two: 'I'll see you next time.'
One: 'Sure.' Bye.'`;

    let paragraph = document.getElementById('paragr1');
    paragraph.insertAdjacentHTML('beforeend', text.replace(/'/g, '"'));
}

function myScript2(){
let text = `One: 'Hi Mary.' Two: 'Oh, hi.'
One: 'How are you doing?'
Two: 'I'm doing alright. How about you?'
One: 'Not too bad. The weather is great isn't it?'
Two: 'Yes. It's absolutely beautiful today.'
One: 'I wish it was like this more frequently.'
Two: 'Me too.'
One: 'So where are you going now?'
Two: 'I'm going to meet a friend of mine at the department store'
One: 'Going to do a little shopping?'
Two: 'Yeah, I have to buy some presents for my parents.'
One: 'What's the occasion?'
Two: 'It's their anniversary.'
One: 'That's great. Well, you better get going. You don't want to be late.'
Two: 'I'll see you next time.'
One: 'Sure.' Bye.'`;

    let paragraph = document.getElementById('paragr2');
    paragraph.insertAdjacentHTML('beforeend', text.replace(/'$/igm, '"').replace(/: '/igm, ': "'));
}

function myScript3(){
    let form = document.getElementById('form-callBack');
    form.innerHTML = '<input type="text" name="callBack" id="fio" placeholder="Введите свое имя"><br>' +
    '<input type="text" name="callBack" id="nomber" placeholder="Введите свой телефон"><br>' +
    '<input type="text" name="callBack" id="email" placeholder="Введите свое email"><br>' +
    '<input type="text" name="callBack" id="text" placeholder="Введите текст"><br>' +
    '<button id="btn1" onClick="checkInput()">Отправить</button><br>';
}
function checkInput(){
    let fio = document.getElementById('fio').value;
    if(fio.match(/[a-zа-яА-ЯёЁ]/i) !== null){
        return;
    } else {
        alert('Ошибка. Одно из полей заполнено неверно!');
    }

    let nomber = document.getElementById('nomber').value;
    if(nomber.match(/[a-zа-яА-ЯёЁ]/i) !== null){
        alert('good');
    } else {
        alert('Ошибка. Одно из полей заполнено неверно!');
    }



}




    







    // class FormValid() {
    //     constructor(fio, nomber, email, text){
    //         this.fio = fio;
    //         this.nomber = nomber;
    //         this.nomber = email;
    //         this.nomber = text;
    //     }

    //     getFio(fio){

    //     }

    //     getName(nomber){

    //     }

    //     getEmail(email){

    //     }
        
    //     getText(text){

    //     }

    //     check(){

    //     }

    // }

