const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// R- Por causa do translate-y na classe tech, que altera o referencial para posicionamento no eixo Y.

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
firstLi.addEventListener('click', boxSelector1);
secondLi.addEventListener('click', boxSelector2);
thirdLi.addEventListener('click', boxSelector3);
function boxSelector1() {
  firstLi.className = 'tech';
  secondLi.className = '';
  thirdLi.className = '';
}
function boxSelector2() {
  firstLi.className = '';
  secondLi.className = 'tech';
  thirdLi.className = '';
}
function boxSelector3() {
  firstLi.className = '';
  secondLi.className = '';
  thirdLi.className = 'tech';
}
// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener('keyup', newText);
function newText() {
  let rec = document.querySelector('.tech');
  rec.innerText = input.value;
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?
myWebpage.addEventListener('dblclick', openLink);
function openLink(){
  window.open('https://rafaeldejesusl.github.io/', '_blank');
}


// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
myWebpage.addEventListener('mouseover', changeColor);
function changeColor(event) {
  event.target.style.color = "#2fc18c";
}

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.