function myScript2(){
    var event, ok;

    var answers = [];

    do {//Выводим первый вопрос
        ok = false;
        event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
    
        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(works.a0, event);
        }
    } while (!ok);
    switch (event) {
        case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
            answers[1] = [works.a00, works.a1];
            do {
                ok = false;
                event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
                if (event == -1) {
                    break;
                }
                else {
                    ok = isAnswer(works.b0, event);
                }
            } while (!ok);
            switch (event) {
                case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                    answers[2] = [works.b00, works.b1];
                    do {
                        ok = false;
                        event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                        if (event == -1) {
                            break;
                        }
                        else {
                            ok = isAnswer(works.d0, event);
                        }
                    } while (!ok);

                    break;
                case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                    answers[2] = [works.b00, works.b2];
                    do {
                        ok = false;
                        event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                        if (event == -1) {
                            break;
                        }
                        else {
                            ok = isAnswer(works.d0, event);
                        }
                    } while (!ok);

                    break;
                case -1: // Второе действие
                    answers[2] = [works.b00, '-1 - Выход из игры'];
                    break;
                default:
                    alert('Ошибка');
            }
            break;
        case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        answers[1] = [works.a00, works.a2];
            do {
                ok = false;
                event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
                if (event == -1) {
                    break;
                }
                else {
                    ok = isAnswer(works.c0, event);
                }
            } while (!ok);
            switch (event) {
                case 1: // Второе действие
                    answers[2] = [works.c00, works.c1];
                    do {
                        ok = false;
                        event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                        if (event == -1) {
                            break;
                        }
                        else {
                            ok = isAnswer(works.d0, event);
                        }
                    } while (!ok);

                    break;
                case 2: // Второе действие
                    answers[2] = [works.c00, works.c2];
                    do {
                        ok = false;
                        event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                        if (event == -1) {
                            break;
                        }
                        else {
                            ok = isAnswer(works.d0, event);
                        }
                    } while (!ok);

                    break;
                case -1: // Второе действие
                    answers[2] = [works.c00, '-1 - Выход из игры'];
                    break;
                default:
                    alert('Ошибка');
            }
            break;
        case -1: // Первое действие
            answers[1] = [works.a00, '-1 - Выход из игры'];
            break;
        default:
            alert('Ошибка');
    }

    isAnswers();

    //------------------------------------------
    function isAnswer(q, event) {
        if (isNaN(event) || !isFinite(event)) {
            alert('Вы ввели недопустимый символ');
            return false;
        }
        else if (event < 1 || event > q) {
            alert('Ваше число выходит из допустимого диапозона');
            return false;
        }
        return true;
        
    }

    function isAnswers(){
        var step = prompt("Хотите посмотреть ваши ответы? Введите интересующий вас шаг. \n -1 - Выход"); 
        switch(step) {
            case "1":
                alert("Текст на шаге 1 был: \n"  +  answers[1].join('\n Ваш ответ: '));
                break;
            case "2":
                alert("Текст на шаге 2 был: \n" +  answers[2].join('\n Ваш ответ: '));
                break;
            case "3":
                alert("Выбора нет, Нео!");
                break;    
            case "-1":
                break;
            default:
                alert("Вы ввели не верное значение. Укажите номер шага");
        }
    }
 
    
}