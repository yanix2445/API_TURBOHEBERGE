import { Request, Response } from 'express';
import Product from '../database/models/Product';
import { createProduct, updateProduct, deleteProduct } from '../services/product.service';

async function getAll(req: Request, res: Response) {
  const products = await Product.findAll();
  res.send(JSON.stringify(products));
}

async function getById(req: Request, res: Response) {
  const products = await Product.findAll({
    where: {
      id: req.params.id,
    },
  });
  if (products) {
    res.send({ products });
  } else {
    res.status(404).send({ error: '404 - NOT FOUND' });
  }
}

export {
  getAll,
  getById,
  createProduct,
  updateProduct,
  deleteProduct,
};
