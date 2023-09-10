//================7================

const input = document.querySelector('input');
const span = document.querySelector('#text');

input.addEventListener('input', changeStyle);

function changeStyle(event) {  
  span.style.fontSize = event.currentTarget.value;
}
