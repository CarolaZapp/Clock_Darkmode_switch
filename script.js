// sun-moon toggle
const container = document.querySelector(".container");
const button = document.querySelector(".clock-wrapper-sun-moon button");

button.addEventListener("click", () => {
  container.classList.toggle("switch");
});

// clock - date
const hourEl = document.querySelector(".hour");
const minuteEL = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");

const days = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
const months = ["Januar", "Februar", "Maerz", "April", "Mai", "Juni", "Juli", "August", "September","Oktober","November", "Dezember"];

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate()
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hoursDegree = (hours / 12) * 360;
  const minutesDegree = (minutes / 60) * 360;
  const secondsDegree = (seconds / 60) * 360;

  hourEl.style.transform = ` rotate(${hoursDegree}deg)`;
  minuteEL.style.transform = `rotate(${minutesDegree}deg)`;
  secondEl.style.transform = ` rotate(${secondsDegree}deg)`;


  timeEl.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

  dateEl.innerHTML = `${days[day]}, <span class="circle">${date}</span> ${months[month]}`
}

setTime();

setInterval(setTime, 1000);