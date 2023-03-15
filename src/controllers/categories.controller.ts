import { Request, Response } from 'express';
import Category from '../database/models/Category';
import { createCategory, updateCategory, deleteCategory } from '../services/category.service';

async function getAll(req: Request, res: Response) {
  const categories = await Category.findAll();
  res.send(JSON.stringify(categories));
}

async function getById(req: Request, res: Response) {
  const categories = await Category.findAll({
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

export {
  getAll,
  getById,
  createCategory,
  updateCategory,
  deleteCategory,
};
