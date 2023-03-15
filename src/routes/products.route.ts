/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/semi */

import { Router } from 'express';
import authenticateJWT from '../middlewares/authenticateJWT'

import {
  getAll,
  getById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/products.controller';

export const router = Router();

router.get('/', authenticateJWT, getAll);
router.get('/:id', authenticateJWT, getById);
router.post('/', authenticateJWT, createProduct);
router.put('/', authenticateJWT, updateProduct);
//router.patch('/', authenticateJWT, updateProduct);
router.delete('/:id', authenticateJWT, deleteProduct);

export default router;
