const { Router } = require('express');

const router = Router();

const { Product } = require('../models');

router.get('/', async (req, res) => {
  const products = await Product.findAll();
  res.status(200).json(products);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const result = await Product.findByPk(id)
  res.status(200).json(result);
});

router.post('/', async (req, res) => {
  const { name, description } = req.body;
  const product = await Product.create({ name, description });
  res.status(200).json(product);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const result = await Product.update(
    { name, description },
    {
      where: { id }
    }
  );
  res.status(200).json(result);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Product.destroy(
    {
      where: { id }
    }
  );
  res.status(204).end();
});

module.exports = router;
