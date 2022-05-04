const CepService = require('../services/CepService');

const findCep = async (req, res) => {
  const { cep } = req.params;
  const result = await CepService.findCep(cep);
  return res.status(200).json(result);
}

const saveCep = async (req, res) => {
  const created = await CepService.saveCep(req.body);
  return res.status(201).json(created);
}

module.exports = {
  findCep,
  saveCep
};
