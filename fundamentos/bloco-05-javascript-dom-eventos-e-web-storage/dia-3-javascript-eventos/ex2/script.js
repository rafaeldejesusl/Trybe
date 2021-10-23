function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// Exercício 1
function createMonthDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const days = document.querySelector('#days');
  for (let i = 0; i < dezDaysList.length; i += 1) {
    const day = dezDaysList[i];
    const dayList = document.createElement('li');
    dayList.innerText = day;
    dayList.className = 'day';
    if (day === 24 || day === 25 || day === 31) {
      dayList.className = dayList.className + ' holiday';
    }
    if (day === 4 || day === 11 || day === 18 || day === 25) {
      dayList.className = dayList.className + ' friday';
    }
    days.appendChild(dayList);
  }
}
createMonthDays();

// Exercicio 2
function createButton(string) {
  const buttonContainer = document.querySelector('.buttons-container');
  const button = document.createElement('button');
  button.innerText = string;
  button.id = 'btn-holiday';
  buttonContainer.appendChild(button);
}
createButton('Feriados');

// Exercicio 3
const button = document.querySelector('#btn-holiday');
button.addEventListener('click', changeColor);
function changeColor() {
  const holidays = document.querySelectorAll('.holiday');
  if (holidays[0].style.backgroundColor === 'white') {
    for (let i = 0; i < holidays.length; i += 1) {
      let days = holidays[i];
      days.style.backgroundColor = 'rgb(238,238,238)';
    }
  } 
  else {
    for (let i = 0; i < holidays.length; i += 1) {
    let days = holidays[i];
    days.style.backgroundColor = 'white';
    }
  }
}

// Exercicio 4
function createButton2(string) {
  const buttonContainer = document.querySelector('.buttons-container');
  const button2 = document.createElement('button');
  button2.innerText = string;
  button2.id = 'btn-friday';
  buttonContainer.appendChild(button2);
}
createButton2('Sexta-feira');

// Exercicio 5
const button2 = document.querySelector('#btn-friday');
button2.addEventListener('click', changeText);
const count = [4, 11, 18, 25];
function changeText() {
  const fridays = document.querySelectorAll('.friday');
  if (fridays[0].innerText === 'SEXTOU o/') {
    for (let i = 0; i < fridays.length; i += 1) {
      let days = fridays[i];
      days.innerText = count[i];
    }
  } 
  else {
    for (let i = 0; i < fridays.length; i += 1) {
    let days = fridays[i];
    days.innerText = 'SEXTOU o/';
    }
  }
}

// Exercicio 6
const calendarDays = document.querySelectorAll('.day');
for (let i = 0; i < calendarDays.length; i += 1) {
  calendarDays[i].addEventListener('mouseover', zoom);
  calendarDays[i].addEventListener('mouseleave', zoom2);
}
function zoom(event) {
  event.target.style.fontSize = '30px';
}
function zoom2(event) {
  event.target.style.fontSize = '20px';
}

// Exercicio 7
function createSpan(string) {
  const taskContainer = document.querySelector('.my-tasks');
  const span = document.createElement('span');
  span.innerText = string;
  taskContainer.appendChild(span);
}
createSpan('Projeto:');

// Exercicio 8
function createDiv(string) {
  const taskContainer = document.querySelector('.my-tasks');
  const div = document.createElement('div');
  div.style.backgroundColor = string;
  div.className = 'task';
  taskContainer.appendChild(div);
  taskContainer.appendChild(document.createElement("br"));
}
createDiv('green');

// Exercicio 9
const div = document.querySelector('.task');
div.addEventListener('click', changeClass);
function changeClass() {
  if (div.className === 'task') {
    div.className = div.className + ' selected';
  }
  else {
    div.className = 'task';
  }
}

// Exercicio 10
for (let i = 0; i < calendarDays.length; i += 1) {
  calendarDays[i].addEventListener('click', special);
}
function special(event) {
  const newColor = document.querySelector('.selected');
  if (event.target.style.color === newColor.style.backgroundColor) {
    event.target.style.color = 'rgb(119,119,119)';
  } else {
    event.target.style.color = newColor.style.backgroundColor;
  }
}

// Bonus
const input = document.querySelector('#task-input');
const add = document.querySelector('#btn-add');
const taskContainer = document.querySelector('.task-list-container');
add.addEventListener('click', newTask);
function newTask() {
  let task = document.createElement('span');
  task.innerText = input.value;
  if (input.value.length < 1) {
    alert('ERRO: CAMPO VAZIO');
  }
  task.className = 'task';
  taskContainer.appendChild(task);
  taskContainer.appendChild(document.createElement("br"));
}