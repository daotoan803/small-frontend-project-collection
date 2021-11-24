const hourElement = document.querySelector("#hour");
const minuteElement = document.querySelector("#minute");
const secondElement = document.querySelector("#second");
const timeElement = document.querySelector("#time");
const splitElement = document.querySelectorAll(".split");

setInterval(() => {
  const currentTime = new Date();
  let hour = currentTime.getHours();
  const time = hour > 12 ? "PM" : "AM";
  if (hour > 12) hour %= 12;
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  if (hour != hourElement.textContent)
    hourElement.textContent = String(hour).padStart(2, "0");
  if (minutes != minuteElement.textContent)
    minuteElement.textContent = String(minutes).padStart(2, "0");
  if (seconds != secondElement.textContent)
    secondElement.textContent = String(seconds).padStart(2, "0");
}, 500);

function blink() {
  setTimeout(() => {
    splitElement.forEach((element) => {
      element.textContent = "";
    });
    setTimeout(() => {
      splitElement.forEach((element) => {
        element.textContent = ":";
      });
      blink();
    }, 500);
  }, 1000);
}

blink();
