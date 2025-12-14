const timer = document.getElementById('timer');
let timeLeft = +timer.textContent; 

const countDown = function() {
  timeLeft--;
  timer.textContent = timeLeft;
    
  if (timeLeft <= 0) {
    alert('Вы победили в конкурсе!');
    clearInterval(intervalId);
  }
}

const intervalId = setInterval(countDown, 1000);