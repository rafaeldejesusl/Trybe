const connection = require('./connection');

const findCep = async (cep) => {
  const [result] = await connection.execute(
    'SELECT * FROM cep_lookup.ceps WHERE cep=?',
    [cep]
  );
  return result[0];
}

const saveCep = async (obj) => {
  const { cep, logradouro, bairro, localidade, uf } = obj;
  await connection.execute(
    'INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?);',
    [cep, logradouro, bairro, localidade, uf]
  );
  return obj;
}

module.exports = {
  findCep,
  saveCep
};
