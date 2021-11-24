const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");

const watch = document.querySelector("#watch");

const millisecondsToTimeString = function (ms) {
  let milliseconds = ms;
  let seconds = 0,
    minutes = 0;
  if (milliseconds >= 1000) {
    seconds = Math.floor(milliseconds / 1000);
    milliseconds %= 1000;
    if (seconds >= 60) {
      minutes = Math.floor(seconds / 60);
      seconds %= 60;
    }
  }
  const result =
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0") +
    ":" +
    String(Math.round(milliseconds / 10)).padStart(2, "0");
  return result;
};

class Timer {
  constructor() {
    this.startTime = null;
    this.timer = null;
    this.totalMillisecondsPassed = 0;

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
  }

  start() {
    if (!this.timer) {
      if (!this.startTime) {
        this.startTime = Date.now();
      }
      this.timer = setInterval(() => {
        let msPassed =
          Date.now() + this.totalMillisecondsPassed - this.startTime;
        watch.textContent = millisecondsToTimeString(msPassed);
      });
    }
  }

  stop() {
    if (this.timer) {
      window.clearInterval(this.timer);
      this.totalMillisecondsPassed += Date.now() - this.startTime;
      this.startTime = null;
      this.timer = null;
    }
  }

  reset() {
    this.startTime = null;
    watch.textContent = "00:00:00";
    this.totalMillisecondsPassed = 0;
    if (this.timer) {
      window.clearInterval(this.timer);
      this.timer = null;
    }
  }
}

let timer = new Timer();

startBtn.addEventListener("click", timer.start);

stopBtn.addEventListener("click", timer.stop);

resetBtn.addEventListener("click", timer.reset);
