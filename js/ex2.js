//================2================
const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];
const ulList = document.querySelector('#ingredients')

let arr = []
ingredients.forEach(el=>{  
  const elItem = document.createElement('li')   
  elItem.classList.add('item');
  elItem.textContent = el;  
  arr.push(elItem)   
})

ulList.append(...arr)

