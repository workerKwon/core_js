import jujeobData from './data/data.js';

const submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', handleSubmit);

const nameField = document.querySelector('#nameField');
nameField.addEventListener('input', handleInput);

function handleSubmit(event) {
  event.preventDefault();

  const name = nameField.value;
  const jujeob = jujeobData(name);

  const randomJujeob = jujeob[Math.floor(Math.random() * jujeob.length)];

  const result = document.querySelector('.result');
  result.textContent = randomJujeob;
}

function handleInput(event) {
  console.log(event.target.value);
}
