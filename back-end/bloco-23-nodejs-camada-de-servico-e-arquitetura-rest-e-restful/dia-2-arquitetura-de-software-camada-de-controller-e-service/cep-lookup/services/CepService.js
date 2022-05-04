const cepModel = require('../models/CepModel');
const CEP_NOT_FOUND = { status: 404, message: "CEP not found" };
const CEP_CONFLICT = { status: 409, message: "Already existing CEP" };

const findCep = async (cep) => {
  const cepDb = cep.replace('-', '');
  const result = await cepModel.findCep(cepDb);
  if (!result) throw CEP_NOT_FOUND;
  result.cep = result.cep.replace(/(\d{5})(\d{3})/, '$1-$2');
  return result;
}

const saveCep = async (obj) => {
  const { cep } = obj;
  const cepDb = cep.replace('-', '');
  obj.cep = cepDb;
  const result = await cepModel.findCep(cepDb);
  if (result) throw CEP_CONFLICT;
  const created = await cepModel.saveCep(obj);
  created.cep = created.cep.replace(/(\d{5})(\d{3})/, '$1-$2');
  return created;
}

module.exports = {
  findCep,
  saveCep
}