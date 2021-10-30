const estado = document.querySelector('#estado');
const button = document.querySelector('#submit');
const data = document.querySelector('#data');
const show = document.querySelector('#show');
const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const cpf = document.querySelector('#cpf');
const endereco = document.querySelector('#endereço');
const cidade = document.querySelector('#cidade');
const resumo = document.querySelector('#resumo');
const cargo = document.querySelector('#cargo');
const descricao = document.querySelector('#descricao');
var picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'DD/MM/YYYY',
  toString(date, format) {
      // you should do formatting based on the passed format,
      // but we will just return 'D/M/YYYY' for simplicity
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
      // dateString is the result of `toString` method
      const parts = dateString.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
  }
});
function gerarEstados() {
  const estados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  for (let i = 0; i < estados.length; i += 1) {
    const opcao = document.createElement('option');
    opcao.innerText = estados[i];
    opcao.value = estados[i];
    estado.appendChild(opcao);
  }
}
function validacao(event) {
  event.preventDefault()
  const residencia = document.querySelector('input[name="residencia"]:checked');
  if (nome.value === ''||email.value === ''||cpf.value === ''||endereco.value === ''||cidade.value === ''||estado.value === ''||resumo.value === ''||cargo.value === ''||descricao.value === ''||residencia === null) {
    alert('Campo Vazio');
  } else {
    show.innerHTML = '';
    const paragraph = document.createElement('p');
    paragraph.innerHTML = `Nome: ${nome.value} <br> Email: ${email.value} <br> CPF: ${cpf.value} <br> Endereço: ${endereco.value} <br> Cidade: ${cidade.value} <br> Estado: ${estado.value} <br> Residência: ${residencia.value} <br> Resumo do Currículo: ${resumo.value} <br> Cargo: ${cargo.value} <br> Descrição do cargo: ${descricao.value} <br> Data de início: ${picker}`;
    show.appendChild(paragraph);
  }
}
window.addEventListener('load', gerarEstados);
button.addEventListener('click', validacao);