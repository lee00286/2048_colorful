var TIMER = 1;
var lastTime = new Date().getTime();
var sec = 0;
var min = 0;

setInterval(function () {
  var currentTime = new Date().getTime();
  var elapsedTime = currentTime - lastTime;

  lastTime = currentTime;

  // elapsedTime is in milliseconds, divide by 1000 to get fractional seconds
  sec += (TIMER * (elapsedTime / 1000));

  // Minutes are 60 seconds
  if (sec >= 59.5) {
    sec -= 59.5;
    min += 1;
  }

  if (sec <= 9.5) {
    document.getElementById('time-container').innerText = (min).toFixed(0) + " : " + "0" + (sec).toFixed(0);
  } else {
    document.getElementById('time-container').innerText = (min).toFixed(0) + " : " + (sec).toFixed(0);
  }

}, 10);
