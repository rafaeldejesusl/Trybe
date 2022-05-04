require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const CepController = require('./controllers/CepController');
const cepValidator = require('./middlewares/cepValidator');
const erroMiddleware = require('./middlewares/erroMiddleware');
const bodyValidator = require('./middlewares/bodyValidator');
const app = express();

app.use(bodyParser.json());

app.get('/ping', (req, res) => res.status(200).json({ "message": "pong!" }));

app.post('/cep', bodyValidator, rescue(CepController.saveCep));

app.get('/cep/:cep', cepValidator, rescue(CepController.findCep));

app.use(erroMiddleware);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});
