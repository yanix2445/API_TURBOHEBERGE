import { Request, Response } from 'express';
import Category from '../database/models/Category';

async function createCategory(req: Request, res: Response) {
  const categories = await Category.create(req.body);
  res.send({ categories });
}

async function updateCategory(req: Request, res: Response) {
  const categories = await Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  if (categories) {
    res.send({ categories });
  } else {
    res.status(404).send({ error: '404 - NOT FOUND' });
  }
}

async function deleteCategory(req: Request, res: Response) {
  const categories = await Category.destroy({ where: { id: req.params.id } });
  if (categories) {
    res.send({ categories });
  } else {
    res.status(404).send({ error: '404 - NOT FOUND' });
  }
}

export {
  createCategory,
  updateCategory,
  deleteCategory,
};
