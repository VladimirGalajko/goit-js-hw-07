//================6================

const input = document.querySelector("input");
const atrLength = input.getAttribute('data-length')

input.addEventListener("blur", handleBlur);
input.addEventListener("input", handleInput);

function handleBlur(event) {
  const inputText = event.currentTarget.value.trim() 

  if(inputText.length === parseInt(atrLength)){
    input.classList.add('valid');  
   }  
  else {
    input.classList.add('invalid');
  }
  if(inputText === ''){
    input.classList.remove('valid', 'invalid');
   }
}

function handleInput(event) {
  input.classList.remove('valid', 'invalid');
}