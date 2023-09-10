//================4================

const buttons = document.querySelectorAll("#counter button");

buttons.forEach(button => {
  button.addEventListener("click", function() {   
    const action = button.getAttribute("data-action");    
    const valueSpan = document.getElementById("value");  
    let currentValue = parseInt(valueSpan.textContent);
    
    if (action === "increment") {
      currentValue += 1;
    } else if (action === "decrement") {
      currentValue -= 1;
    }
    valueSpan.textContent = currentValue;
  });
});




