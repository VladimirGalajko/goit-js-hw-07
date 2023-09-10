//================9================
const button = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

  button.addEventListener("click", changeColorStyle);
  function changeColorStyle(event){   
    const action = getRandomHexColor()   
    document.body.style.backgroundColor = action
    spanColor.textContent = action
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
