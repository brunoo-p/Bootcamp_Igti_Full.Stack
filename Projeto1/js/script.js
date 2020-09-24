window.addEventListener('load', start);
function start() {
  let square = document.querySelector('#square');
  let rangeRed = document.querySelector('#rangeRed');
  let rangeGreen = document.querySelector('#rangeGreen');
  let rangeBlue = document.querySelector('#rangeBlue');
  let r = document.querySelector('#r');
  let g = document.querySelector('#g');
  let b = document.querySelector('#b');
  rangeRed.addEventListener('input', setColor);
  rangeGreen.addEventListener('input', setColor);
  rangeBlue.addEventListener('input', setColor);

  function setColor() {
    r.value = rangeRed.value; 
    g.value = rangeGreen.value;
    b.value = rangeBlue.value;
    RGB(r.value,g.value, b.value);
  }
  function RGB(r,g,b) {
    console.log('oi');
    let colorir = `rgb(${r},${g},${b})`;
    return square.style.backgroundColor = colorir;
  }
}
