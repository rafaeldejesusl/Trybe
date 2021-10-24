const body = document.querySelector('#body');
const content = document.querySelector('#content');
const input = document.querySelector('#input');
const btn = document.querySelector('#btn-add');
const input2 = document.querySelector('#input2');
const btn2 = document.querySelector('#btn-add2');
const input3 = document.querySelector('#input3');
const btn3 = document.querySelector('#btn-add3');
const input4 = document.querySelector('#input4');
const btn4 = document.querySelector('#btn-add4');
const input5 = document.querySelector('#input5');
const btn5 = document.querySelector('#btn-add5');


btn.addEventListener('click', changeBackground);
function changeBackground() {
  content.style.backgroundColor = input.value;
  localStorage.setItem('input', input.value);
}

btn2.addEventListener('click', changeColor);
function changeColor() {
  content.style.color = input2.value;
  localStorage.setItem('input2', input2.value);
}

btn3.addEventListener('click', changeSize);
function changeSize() {
  content.style.fontSize = input3.value;
  localStorage.setItem('input3', input3.value);
}

btn4.addEventListener('click', changeLine);
function changeLine() {
  content.style.lineHeight = input4.value;
  localStorage.setItem('input4', input4.value);
}

btn5.addEventListener('click', changeFont);
function changeFont() {
  content.style.fontFamily = input5.value;
  localStorage.setItem('input5', input5.value);
}

window.onload = function () { 
  if (localStorage.length > 0) {
    content.style.backgroundColor = localStorage['input'];
    content.style.color = localStorage['input2'];
    content.style.fontSize = localStorage['input3'];
    content.style.lineHeight = localStorage['input4'];
    content.style.fontFamily = localStorage['input5'];
  }
};
