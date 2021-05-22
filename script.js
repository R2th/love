const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

var i = 1;
const picLength = 11;
function changeImgBg() {
  if (i == picLength) {
    i = 0;
  }
  i++;
  document.getElementById("content").style.backgroundImage =
    "url('./Cafe/pic " + i.toString() + ".jpg')";
}
function countdown() {
  const currentDate = new Date();
  //   const newYear = "1 Jan " + (currentDate.getFullYear() + 1).toString();
  //   const newYearsDate = new Date(newYear);
  //   const totalSeconds = (newYearsDate - currentDate) / 1000;
  const anniversary = new Date("21 Nov 2020");
  const totalSeconds = (currentDate - anniversary) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(changeImgBg, 5000);
setInterval(countdown, 1000);
