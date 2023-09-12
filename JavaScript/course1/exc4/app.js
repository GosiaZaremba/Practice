class Clock {
  constructor() {
    this.hour = document.querySelector(".hour");
    this.minutes = document.querySelector(".minutes");
    this.seconds = document.querySelector(".seconds");
  }
  tick = () => {
    let date = new Date();
    let h = date.getHours() * 30;
    let m = date.getMinutes() * 6;
    let s = date.getSeconds() * 6;

    this.hour.style.transform = `rotateZ(${h + m / 12}deg)`;
    this.minutes.style.transform = `rotateZ(${m}deg)`;
    this.seconds.style.transform = `rotateZ(${s}deg)`;
  };

  start() {
    setInterval(this.tick, 1000);
  }
}

const clock = new Clock();
clock.start();
