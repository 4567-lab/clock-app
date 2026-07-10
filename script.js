// Sliding Pages
function showPage(id) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active");
    });

    setTimeout(() => {
        document.getElementById(id).classList.add("active");
    }, 100);

}

// Digital Clock

function updateClock(){

const now=new Date();

let h=String(now.getHours()).padStart(2,"0");
let m=String(now.getMinutes()).padStart(2,"0");
let s=String(now.getSeconds()).padStart(2,"0");

document.getElementById("clockDisplay").innerHTML=h+":"+m+":"+s;

}

setInterval(updateClock,1000);
updateClock();


// Stopwatch

let hr = 0;
let min = 0;
let sec = 0;

let watch = null;
let running = false;

function startStopwatch() {

    if (running) return;

    running = true;

    watch = setInterval(function () {

        sec++;

        if (sec == 60) {
            sec = 0;
            min++;
        }

        if (min == 60) {
            min = 0;
            hr++;
        }

        document.getElementById("stopwatchDisplay").innerHTML =
            String(hr).padStart(2, "0") + ":" +
            String(min).padStart(2, "0") + ":" +
            String(sec).padStart(2, "0");

    }, 1000);
}

function stopStopwatch() {
    clearInterval(watch);
    running = false;
}

function resetStopwatch() {
    clearInterval(watch);
    running = false;

    hr = 0;
    min = 0;
    sec = 0;

    document.getElementById("stopwatchDisplay").innerHTML = "00:00:00";
}

// Countdown Timer

let countdown;
let timeLeft = 0;
let isRunning = false;

function startTimer() {

    if (!isRunning) {

        if (timeLeft <= 0) {

            let minutes = parseInt(document.getElementById("timerInput").value);

            if (isNaN(minutes) || minutes <= 0) {
                alert("Please enter valid minutes.");
                return;
            }

            // Convert minutes to seconds
            timeLeft = minutes * 60;
        }

        isRunning = true;

        countdown = setInterval(function () {

            let min = Math.floor(timeLeft / 60);
            let sec = timeLeft % 60;

            document.getElementById("timerDisplay").innerHTML =
                String(min).padStart(2, "0") + ":" +
                String(sec).padStart(2, "0");

            if (timeLeft <= 0) {
                clearInterval(countdown);
                isRunning = false;
                document.getElementById("timerDisplay").innerHTML = "00:00";
                alert("⏰ Time's Up!");
                return;
            }

            timeLeft--;

        }, 1000);
    }
}

function stopTimer() {
    clearInterval(countdown);
    isRunning = false;
}

function resetTimer() {
    clearInterval(countdown);
    isRunning = false;
    timeLeft = 0;

    document.getElementById("timerDisplay").innerHTML = "00:00";
    document.getElementById("timerInput").value = "";
}