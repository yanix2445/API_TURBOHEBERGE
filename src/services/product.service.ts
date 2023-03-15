import { Request, Response } from 'express';
import Product from '../database/models/Product';

async function createProduct(req: Request, res: Response) {
  const product = await Product.create(req.body);
  res.send({ product });
}

async function updateProduct(req: Request, res: Response) {
  const product = await Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  if (product) {
    res.send({ product });
  } else {
    res.status(404).send({ error: '404 - NOT FOUND' });
  }
}

async function deleteProduct(req: Request, res: Response) {
  const product = await Product.destroy({ where: { id: req.params.id } });
  if (product) {
    res.send({ product });
  } else {
    res.status(404).send({ error: '404 - NOT FOUND' });
  }
}

export {
  createProduct,
  updateProduct,
  deleteProduct,
};
