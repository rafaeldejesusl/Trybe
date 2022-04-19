const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const app = express();

app.use(bodyParser.json());

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({message: `Hello, ${name}!`});
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if(age > 17) return res.status(200).json({ message: `Hello, ${name}` });
  res.status(401).json({ message: 'Unauthorized' });
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

app.get('/simpsons', async (req, res) => {
  try {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    res.status(200).send(data);
  } catch (error) {
    console.log(error.message);
    res.status(500).end();
  }
});

app.post('/simpsons', async (req, res) => {
  try {
    const { id, name } = req.body;
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    const result = await JSON.parse(data);
    const simpson = result.find((e) => e.id === id);
    if (simpson) return res.status(409).json({ message: 'id already exists' });
    result.push({ id, name });
    await fs.writeFile('./simpsons.json', JSON.stringify(result));
    res.status(204).end();
  } catch (error) {
    console.log(error.message);
    res.status(500).end();
  }
});

app.get('/simpsons/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    const result = await JSON.parse(data);
    const simpson = result.find((e) => e.id === id);
    if (!simpson) return res.status(404).json({ message: 'simpson not found' });
    res.status(200).send(simpson);
  } catch (error) {
    console.log(error.message);
    res.status(500).end();
  }
});

app.listen(3000, () => console.log('Ouvindo na porta 3000!'));
