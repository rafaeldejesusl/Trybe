const express = require('express');
const app = express();
const BookController = require('./controllers/BookController');
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/books', BookController.getAll);

app.post('/books', BookController.create);

app.get('/books/:id', BookController.getById);

app.post('/books/:id', BookController.update);

app.delete('/books/:id', BookController.remove);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));