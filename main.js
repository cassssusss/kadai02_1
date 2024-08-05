let milliseconds = 0;
let seconds = 0;
let intervalId = null;

const hrsElement = document.getElementById('hrs');
const minsElement = document.getElementById('mins');
const secsElement = document.getElementById('secs');
const msecElement = document.getElementById('msec');
const timerElement = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

function startTimer() {
    if (intervalId === null) {
        intervalId = setInterval(function() {
            milliseconds +=10;

            if (milliseconds >= 1000){
                milliseconds = 0;
                seconds++;
            }
            
            let hrs = Math.floor(seconds / 3600);
            let mins = Math.floor((seconds % 3600) / 60);
            let secs = seconds % 60;
            let msec = Math.floor(milliseconds / 100);

            hrsElement.textContent = hrs;
            minsElement.textContent = mins;
            secsElement.textContent = secs;
            msecElement.textContent = msec;
        }, 10);
    }
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = false;
    
}

function stopTimer() {
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
}

function resetTimer() {
    stopTimer();
    milliseconds = 0;
    seconds = 0;
    hrsElement.textContent = '0';
    minsElement.textContent = '0';
    secsElement.textContent = '0';
    msecElement.textContent = '0';
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);