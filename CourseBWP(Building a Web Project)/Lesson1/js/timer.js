import "./howler.js";

const sound = new Howl({
  src: ['./rington/111.mp3']
});

export const timerInputMinute = document.getElementById("time__minute"); 
const timerInputSec = document.getElementById("time__sec"); 
const runTimer = document.getElementById("button__start");
const stopTimer = document.getElementById("button__stop");
const timerShow = document.getElementById("timer__result");

runTimer.addEventListener('click', function() {
    runTimer.disabled = true;
    stopTimer.disabled = false;
    let timeMinute = parseInt(timerInputMinute.value) * 60;
    let timeSec = parseInt(timerInputSec.value);

    let timer = setInterval(function () {
        let sumSeconds = timeMinute + timeSec;
        let seconds = sumSeconds % 60;
        let minutes = sumSeconds / 60 % 60;

        if (sumSeconds <= 0) {
            clearInterval(timer);
            sound.play();
        } else {
            let strTimer = `${Math.trunc(minutes)}:${seconds}`;
            timerShow.innerHTML = strTimer;
        }
        --timeSec;
    }, 1000)

    stopTimer.addEventListener('click', function() {
        runTimer.disabled = false;
        stopTimer.disabled = true;
        clearInterval(timer);
    })
})


 