function myScript3(){

    var answer;
    var i = 0;
    var n = 0;
    var score = 0;
    var many = [0, 1000, 5000, 50000, 200000, 500000, 1000000];
    
    alert("Начинаем игру - Кто хочет стать миллионером?");

    function questions(){
        if (i == 6){
            alert("Поздравляю, вы стали МИИИИЛЛИОНЕРОМ!");
        } else {
            answer = prompt(question[i].a00 + "Варианты ответа: \n" + question[i].a1 + question[i].a2 + question[i].a3 + question[i].a4 + "Ваш ответ: \n Если хотите закончить, нажмите q");
            if (answer > 0 && answer < 5 || answer == "q") {
                if (answer == "q"){
                    alert("Спасибо за игру. Вы заработали: " + many[n] + "p");
                } else {
                    gameContinue();
                }
            } else {
                alert("Вы ввели неверное значение. Введите ответ от 1 до 4 или покиньте игру нажав q");
                return questions();
            }
        }
    }

    questions();

    function gameContinue(){
        if(answer == question[i].aa){
            score++;
            alert("Вы угадали. Вы выиграли " + many[n + 1] + "p");
            many[++n];
            questions = questions(++i);
        } else {
            alert("Вы проиграли. Вы заработали: " + many[n] + "p");
        }
    }
}