function myScript3(){

    var answer;
    var answers = [];
    var i = 0;
    var n = 1;
    var score = 0;
    var many = [0, 1000, 5000, 50000, 200000, 500000, 1000000];
    
    alert("Начинаем игру - Кто хочет стать миллионером?");

    function questions(){
        answer = prompt(question[i].a00 + "Варианты ответа: \n" + question[i].a1 + question[i].a2 + question[i].a3 + question[i].a4 + "Ваш ответ: \n Если хотите закончить, нажмите q");
        if (answer > 0 && answer < 5 || answer == "q") {
            if (answer == "q"){
                alert('Спасибо за игру');
            } else {
                gameContinue();
            }
        } else {
            alert("Вы ввели неверное значение. Введите ответ от 1 до 4 или покиньте игру нажав q");
            return questions();
        }
    }

    questions();

    function gameContinue(){
        if(answer == question[i].aa){
            score++;
            alert("Вы угадали. Вы выиграли " + many[n]);
            many[++n];
            questions = questions(++i);
        } else {
            alert("Вы проиграли.");
        }
    }

    // isAnswers();
    // alert('Спасибо за игру');

    // function isAnswers(){
    //     var step = prompt("Хотите посмотреть ваши ответы? Введите интересующий вас шаг. \n -1 - Выход"); 
    //     switch(step) {
    //         case "1":
    //             alert("Текст на шаге 1 был: \n"  +  answers[1].join('\n Ваш ответ: '));
    //             break;
    //         case "2":
    //             alert("Текст на шаге 2 был: \n" +  answers[1].join('\n Ваш ответ: '));
    //             break;
    //         case "-1":
    //             break;
    //         default:
    //             alert("Вы ввели не верное значение. Укажите номер шага");
    //     }
    // }
}