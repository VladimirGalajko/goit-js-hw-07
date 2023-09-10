//================8================
//Напиши скрипт управління формою логіна.
// 3 Якщо у формі є незаповнені поля, виводь alert
//     з попередженням про те, що всі поля повинні бути заповнені.
// 4 Якщо користувач заповнив усі поля і відправив форму,
//   збери значення полів в об'єкт, де ім'я поля буде ім'ям
//   властивості, а значення поля - значенням властивості.
//   Для доступу до елементів форми використовуй властивість elements.
// 5 Виведи об'єкт із введеними даними в консоль і
//     очисти значення полів форми методом rese

const checkForm = document.querySelector('.login-form');

checkForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  const info = {
    email: email.value,
    password: password.value,
  };
  if (info.email === '' || info.password === '') {
    alert('Всі поля повинні бути заповнені');
    return;
  } else {
    console.log(info);
  }
  event.currentTarget.reset();
}
