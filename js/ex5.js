//================5================
const input = document.querySelector("#name-input");
const textOut = document.querySelector('#name-output')

input.addEventListener("input", handleInput);

function handleInput(event) {
  textOut.textContent = event.currentTarget.value.trim()
  if(textOut.textContent == ''){
    textOut.textContent = 'Anonymous'
  }

}


