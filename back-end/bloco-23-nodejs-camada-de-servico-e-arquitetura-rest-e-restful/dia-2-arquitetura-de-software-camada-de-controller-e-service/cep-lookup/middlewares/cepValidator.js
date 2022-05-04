const Joi = require('joi');

const cepValidator = async (req, res, next) => {
  const { error } = Joi.object({
    cep: Joi.string().regex(/\d{5}-\d{3}/).required(),
  }).validate(req.params);
  if (error) return next(error);
  return next();
}

module.exports = cepValidator;
