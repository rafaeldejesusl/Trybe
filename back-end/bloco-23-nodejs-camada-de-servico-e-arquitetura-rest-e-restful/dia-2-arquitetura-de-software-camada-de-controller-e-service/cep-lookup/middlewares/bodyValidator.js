const Joi = require('joi');

const bodyValidator = async (req, res, next) => {
  const { error } = Joi.object({
    cep: Joi.string().regex(/\d{5}-\d{3}/).required(),
    logradouro: Joi.string().required().not().empty(),
    bairro: Joi.string().required().not().empty(),
    localidade: Joi.string().required().not().empty(),
    uf: Joi.string().required().length(2)
  }).validate(req.body);
  if (error) return next(error);
  return next();
}

module.exports = bodyValidator;