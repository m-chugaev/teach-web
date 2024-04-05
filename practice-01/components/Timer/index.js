let timer;
let minutes = 5;
let seconds = 0;
let isTimerRunning = false;

function startTimer() {
  if (!isTimerRunning) {
    isTimerRunning = true;
    timer = setInterval(updateTimer, 1000);
  }
}

function stopTimer() {
  clearInterval(timer);
  isTimerRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isTimerRunning = false;
  minutes = 5;
  seconds = 0;
  document.getElementById("timer").innerText = "5:00";
}

function updateTimer() {
  if (minutes === 0 && seconds === 0) {
    clearInterval(timer);
    isTimerRunning = false;
    alert("Таймер закончился");
    if (confirm("Сбросить таймер к 5 минутам?")) {
      resetTimer();
    }
  } else {
    if (seconds === 0) {
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }
    document.getElementById("timer").innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
}

/*
<div id="timer">5:00</div>
<button onclick="startTimer()">Start</button>
<button onclick="stopTimer()">Stop</button>
<button onclick="resetTimer()">Reset</button>
*/