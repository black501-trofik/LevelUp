var timeX = 0;
let time_el = document.getElementById("timer");


const greeting = delay =>
  setTimeout(() => {
    timeX = timeX + 1;
    if (Math.floor((30 * 60 - timeX) / 60) > 0){
      if ((30 * 60 - timeX) % 60 < 10)  {
        time_el.textContent = Math.floor((30 * 60 - timeX) / 60) + ":0" + (30 * 60 - timeX) % 60;
      } else {
        time_el.textContent = Math.floor((30 * 60 - timeX) / 60) + ":" + (30 * 60 - timeX) % 60;
      }
    } else {
      time_el.textContent = "0:00"
    }
    greeting(delay + 1);
  }, 1000);
greeting(1);

