import "./howler.js";

// Setup the new Howl.
const sound = new Howl({
  src: ['./rington/111.mp3']
});

export let timerInput = document.getElementById("time"); 
let runTimer = document.getElementById("button2");
let timerShow = document.getElementById("timer");
let timeMinut;


runTimer.addEventListener('click', function() {
    timeMinut = parseInt(timerInput.value) * 60;

    let timer = setInterval(function () {
        let seconds = timeMinut % 60;
        let minutes = timeMinut / 60 % 60;
        // Условие если время закончилось то...
        if (timeMinut <= 0) {
            // Таймер удаляется
            clearInterval(timer);
            // Выводит сообщение что время закончилось
            sound.play();
        } else { // Иначе
            // Создаём строку с выводом времени
            let strTimer = `${Math.trunc(minutes)}:${seconds}`;
            // Выводим строку в блок для показа таймера
            timerShow.innerHTML = strTimer;
        }
        --timeMinut; // Уменьшаем таймер
    }, 1000)
})
 


 