const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');

let size = null;

const small = 200;
const large = 250;

cookie.onclick = function() {

  let currentCount = Number(clickerCounter.textContent);
  currentCount += 1;
  clickerCounter.textContent = currentCount;

  if(size) {
    cookie.width = small;
    size = false;
    } else {
        cookie.width = large;
        size = true;
    }
}