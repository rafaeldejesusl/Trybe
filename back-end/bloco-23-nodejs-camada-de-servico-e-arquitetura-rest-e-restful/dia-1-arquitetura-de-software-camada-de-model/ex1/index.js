const express = require('express');
const bodyParser = require('body-parser');
const User = require('./models/User');
const app = express();
const PORT = 3000;
const err = (input, size) => {
  if (!size) {
    return {
      error: true,
      message: `O campo '${input}' é obrigatório`
    }
  }
  return {
    error: true,
    message: `O campo '${input}' é obrigatório e deve ter pelo menos ${size} caracteres`
  }
};
const NOTFOUND = {
  error: true,
  message: "Usuário não encontrado"
}


app.use(bodyParser.json());

app.post('/user', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (!User.validator(firstName)) return res.status(400).json(err('first name'));
  if (!User.validator(lastName)) return res.status(400).json(err('last name'));
  if (!User.validator(email)) return res.status(400).json(err('email'));
  if (!User.validator(password, 6)) return res.status(400).json(err('password', 6));

  const newUser = await User.createUser(firstName, lastName, email, password);
  res.status(201).json(newUser);
});

app.get('/user', async (req, res) => {
  const users = await User.getUsers();

  res.status(200).json(users);
});

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.getUser(id);
  if (user.length === 0) return res.status(404).json(NOTFOUND);

  res.status(200).json(user);
});

app.put('/user/:id', async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;
  if (!User.validator(firstName)) return res.status(400).json(err('first name'));
  if (!User.validator(lastName)) return res.status(400).json(err('last name'));
  if (!User.validator(email)) return res.status(400).json(err('email'));
  if (!User.validator(password, 6)) return res.status(400).json(err('password', 6));

  const user = await User.updateUser(id, firstName, lastName, email, password);
  if (!user) return res.status(404).json(NOTFOUND);
  res.status(200).json(user);
});

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});
