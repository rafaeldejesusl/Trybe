const btn = document.querySelector('#btn');
const number = document.querySelector('#number');

btn.addEventListener('click', () => {
  number.innerHTML = `${Number(number.innerText) + 1}`
});