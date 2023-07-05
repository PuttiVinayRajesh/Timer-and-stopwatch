script.js
// Timer variables
let timerInterval;
let timerSeconds = 0;
let timerMinutes = 0;
let timerHours = 0;

// Stopwatch variables
let stopwatchInterval;
let stopwatchMilliseconds = 0;
let stopwatchSeconds = 0;
let stopwatchMinutes = 0;
let stopwatchHours = 0;

// Timer buttons
const startTimerBtn = document.getElementById("start-timer");
const stopTimerBtn = document.getElementById("stop-timer");
const resetTimerBtn = document.getElementById("reset-timer");

// Stopwatch buttons
const startStopwatchBtn = document.getElementById("start-stopwatch");
const stopStopwatchBtn = document.getElementById("stop-stopwatch");
const resetStopwatchBtn = document.getElementById("reset-stopwatch");

// Timer functions
function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
  startTimerBtn.disabled = true;
}

function stopTimer() {
  clearInterval(timerInterval);
  startTimerBtn.disabled = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerSeconds = 0;
  timerMinutes = 0;
  timerHours = 0;
  updateTimerDisplay();
  startTimerBtn.disabled = false;
}

function updateTimer() {
  timerSeconds++;

  if (timerSeconds === 60) {
    timerSeconds = 0;
    timerMinutes++;
  }

  if (timerMinutes === 60) {
    timerMinutes = 0;
    timerHours++;
  }

  updateTimerDisplay();
}

function updateTimerDisplay() {
  document.getElementById("timer-seconds").textContent = formatTime(timerSeconds);
  document.getElementById("timer-minutes").textContent = formatTime(timerMinutes);
  document.getElementById("timer-hours").textContent = formatTime(timerHours);
}

// ... (existing code remains the same)

function setTimer() {
    const hoursInput = parseInt(document.getElementById("hours-input").value) || 0;
    const minutesInput = parseInt(document.getElementById("minutes-input").value) || 0;
    const secondsInput = parseInt(document.getElementById("seconds-input").value) || 0;
  
    timerSeconds = secondsInput;
    timerMinutes = minutesInput;
    timerHours = hoursInput;
  
    updateTimerDisplay();
  }
  
  // ... (existing code remains the same)
  

// Stopwatch functions
// ... (remaining stopwatch functions remain unchanged)

// Utility function to format time values with leading zeros
// ... (remaining utility function remains unchanged)

// Attach event listeners to buttons
startTimerBtn.addEventListener("click", startTimer);
stopTimerBtn.addEventListener("click", stopTimer);
resetTimerBtn.addEventListener("click", resetTimer);

startStopwatchBtn.addEventListener("click", startStopwatch);
stopStopwatchBtn.addEventListener("click", stopStopwatch);
resetStopwatchBtn.addEventListener("click", resetStopwatch);

// Attach event listener to set timer button
const setTimerBtn = document.getElementById("set-timer");
setTimerBtn.addEventListener("click", setTimer);
