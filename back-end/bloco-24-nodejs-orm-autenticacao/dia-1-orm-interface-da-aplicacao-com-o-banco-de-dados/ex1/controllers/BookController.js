const BookService = require('../services/BookService');

const getAll = async (req, res) => {
  const books = await BookService.getAll();
  return res.status(200).json(books);
}

const getById = async (req,res) => {
  const { id } = req.params;
  const book = await BookService.getById(id);
  if (!book) return res.status(404).json({ message: "Book not found" });
  return res.status(200).json(book);
}

const create = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const book = await BookService.create({ title, author, pageQuantity });
  return res.status(201).json(book);
}

const update = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const { id } = req.params;
  const book = await BookService.update(id, { title, author, pageQuantity });
  if (!book) return res.status(404).json({ message: "Book not found" });
  return res.status(200).json({ message: 'Book updated' });
}

const remove = async (req, res) => {
  const { id } = req.params;
  const book = await BookService.remove(id);
  if (!book) return res.status(404).json({ message: "Book not found" });
  return res.status(200).json({ message: 'Book removed' });
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
