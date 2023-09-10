//================1================

const container = document.querySelector('#categories');
const allItem = container.querySelectorAll('.item');
const arr = [...allItem];

console.log(`Number of categories: ${container.children.length}`);

arr.forEach(el => {
  console.log(`Category:  ${el.firstElementChild.textContent}
Elements : ${el.lastElementChild.childElementCount}`);
});


