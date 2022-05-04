const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', async (req, res) => {
  const products = await ProductModel.getAll();

  res.status(200).json(products);
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;

  if(!name) return res.status(404).json({ message: 'Nome inválido' });
  if(!brand) return res.status(404).json({ message: 'Marca inválida' });

  const newProduct = await ProductModel.add(name, brand);

  res.status(201).json([newProduct]);
});

router.get('/:id', async (req, res) => {
  const product = await ProductModel.getById(req.params.id);

  if(!product) return res.status(404).json({ message: 'Produto não encontrado' });

  res.status(200).json([product]);
});

router.delete('/:id', async (req, res) => {
  const product = await ProductModel.getById(req.params.id);

  if(!product) return res.status(404).json({ message: 'Produto não encontrado' });

  const products = await ProductModel.exclude(req.params.id);

  res.status(200).json([products]);
});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;

  if(!name) return res.status(404).json({ message: 'Nome inválido' });
  if(!brand) return res.status(404).json({ message: 'Marca inválida' });

  const product = await ProductModel.getById(req.params.id);

  if(!product) return res.status(404).json({ message: 'Produto não encontrado' });

  const products = await ProductModel.update(req.params.id, name, brand);

  res.status(200).json([products]);
});

module.exports = router;