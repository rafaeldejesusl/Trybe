require('dotenv').config();
const express = require('express');
const app = express();
const controller = require('./controllers/controller');
const auth = require('./middlewares/auth');
const admin = require('./middlewares/admin');
const { PORT } = process.env;

app.use(express.json());

app.post('/login', controller.login);

app.get('/users/me', auth, controller.users);

app.get('/top-secret', auth, admin, controller.topSecret);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
