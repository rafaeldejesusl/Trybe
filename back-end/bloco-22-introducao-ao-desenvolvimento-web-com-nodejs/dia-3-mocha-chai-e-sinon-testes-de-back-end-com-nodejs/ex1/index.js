const fs = require('fs');

const numberCheck = (number) => {
  if (typeof number !== 'number') {
    return 'o valor deve ser um número';
  } else if (number > 0) {
    return 'positivo';
  } else if (number < 0) {
    return 'negativo';
  } else {
    return 'neutro';
  }
};

const fileCreator = (file, content) => {
  fs.writeFileSync(`./${file}`, content);

  return 'ok';
};

module.exports = { numberCheck, fileCreator };
