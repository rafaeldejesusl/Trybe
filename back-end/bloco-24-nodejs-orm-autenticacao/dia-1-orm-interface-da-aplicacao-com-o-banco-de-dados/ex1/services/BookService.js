const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();
  return books;
}

const getById = async (id) => {
  const book = await Book.findByPk(id);
  return book;
}

const create = async (obj) => {
  const book = await Book.create(obj);
  return book;
}

const update = async (id, obj) => {
  const [book] = await Book.update(obj, { where: { id } });
  return book;
}

const remove = async (id) => {
  const book = await Book.destroy({ where: { id } });
  return book;
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
