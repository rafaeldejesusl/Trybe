require('dotenv').config();
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

const validateLogin = (body) => {
  return Joi.object({
    username: Joi.string().alphanum().min(5).required().messages({
      'string.min': '"username" length must be 5 characters long',
      'string.required': '"username" is required',
    }),
    password: Joi.string().min(5).required().messages({
      'string.min': '"password" length must be 5 characters long',
      'string.required': '"password" is required',
    }),
  }).validate(body);
}

const login = async (req, res) => {
  const { error } = validateLogin(req.body);
  if (error) return res.status(400).json({ message: error.message });
  if (req.body.username === 'admin' && req.body.password !== 's3nh4S3gur4???') {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  const admin = req.body.username === 'admin' && req.body.password === 's3nh4S3gur4???';

  const payload = {
    username: req.body.username,
    admin
  };

  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const token = jwt.sign(payload, JWT_SECRET, jwtConfig);
  return res.status(200).json({ token });
}

const users = async (req, res) => {
  const { username, admin } = req.user;
  return res.status(200).json({ username, admin });
}

const topSecret = async (req, res) => {
  return res.status(200).json({ secretInfo: 'Peter Parker é o Homem-Arannha' });
}

module.exports = {
  login,
  users,
  topSecret,
}