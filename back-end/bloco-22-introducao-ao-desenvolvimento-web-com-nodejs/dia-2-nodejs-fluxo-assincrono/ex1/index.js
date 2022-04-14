function calculo(a, b, c) {
  return new Promise((resolve, reject) => {
    if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      reject(new Error('Informe apenas números'));
    }
    const resultado = (a + b) * c;
    if(resultado < 50) reject(new Error('Valor muito baixo'));
    else resolve(resultado);
  })
};

// function consumidor() {
//   const a = Math.floor(Math.random() * 100 + 1);
//   const b = Math.floor(Math.random() * 100 + 1);
//   const c = Math.floor(Math.random() * 100 + 1);
//   calculo(a, b, c)
//     .then(result => console.log(`sucesso: ${result}`))
//     .catch(err => console.log(`erro: ${err.message}`))
// }

async function consumidor() {
  const a = Math.floor(Math.random() * 100 + 1);
  const b = Math.floor(Math.random() * 100 + 1);
  const c = Math.floor(Math.random() * 100 + 1);
  try {
    const result = await calculo(a, b, c)
    console.log(`sucesso: ${result}`);
  } catch (err) {
    console.log(`erro: ${err.message}`);
  }
}

consumidor();