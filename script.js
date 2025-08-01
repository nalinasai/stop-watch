  var startbutton = document.getElementById("start");
  var stopbutton = document.getElementById("stop");
  var resetbutton = document.getElementById("reset");

  var h = document.getElementById("hour");
  var m = document.getElementById("minute");
  var s = document.getElementById("second");

  let timer = null;
  let totalSeconds = 0;

  function updateDisplay() {
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    h.innerText = hours < 10 ? "0" + hours : hours;
    m.innerText = minutes < 10 ? "0" + minutes : minutes;
    s.innerText = seconds < 10 ? "0" + seconds : seconds;
  }

  function tick() {
    totalSeconds++;
    updateDisplay();
    timer = setTimeout(tick, 1000);
  }

  function start() {
    if (!timer) {
      tick();
    }
  }

  function stop() {
    clearTimeout(timer);
    timer = null;
  }

  function reset() {
    stop();
    totalSeconds = 0;
    updateDisplay();
  }