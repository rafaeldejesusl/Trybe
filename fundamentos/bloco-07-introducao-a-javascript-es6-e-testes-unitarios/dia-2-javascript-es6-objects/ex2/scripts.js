const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function func1(objeto, chave, valor) {
  objeto[chave] = valor;
};
func1(lesson2, 'turno', 'noite');
// console.log(lesson2);

function func2(objeto) {
  return Object.keys(objeto);
};
// console.log(func2(lesson3));

function func3(objeto) {
  return Object.keys(objeto).length;
};
// console.log(func3(lesson3));

function func4(objeto) {
  return Object.values(objeto);
};
// console.log(func4(lesson3));

const all = {
  lesson1,
  lesson2,
  lesson3,
}
const allLessons = Object.assign({}, all);
// console.log(allLessons);

function func6(objeto) {
  const soma = objeto.lesson1.numeroEstudantes + objeto.lesson2.numeroEstudantes + objeto.lesson3.numeroEstudantes;
  return soma;
};
// console.log(func6(all));

function func7(objeto, numero) {
  return Object.values(objeto)[numero];
};
// console.log(func7(lesson1, 0));

function func8(objeto, chave, valor) {
  let verify = objeto[chave] === valor ? true : false;
  return verify;
};
// console.log(func8(lesson3, 'turno', 'noite'));
// console.log(func8(lesson3, 'materia', 'Maria Clara'));

function func9(assunto) {
  let soma = 0;
  for (let [key] of Object.entries(allLessons)) {
    let atual = allLessons[key];
    if (atual.materia === assunto) {
      soma += atual.numeroEstudantes;
    }
  }
  return soma;
}
// console.log(func9('Matemática'));

function createReport(objeto, professor) {
  const report = {
    professor: '',
    aulas: [],
    estudantes: 0,
  };
  for (let [key] of Object.entries(objeto)) {
    let atual = allLessons[key];
    if (atual.professor === professor) {
      report.professor = atual.professor;
      report.aulas.push(atual.materia);
      report.estudantes += atual.numeroEstudantes;
    }
  }
  return report;
}
console.log(createReport(allLessons, 'Maria Clara'))