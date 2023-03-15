/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/semi */

import { Router } from 'express';
import authenticateJWT from '../middlewares/authenticateJWT'

import {
  getAll,
  getById,
  createCategory,
  updateCategory,
  deleteCategory,
} from '../controllers/categories.controller';

export const router = Router();

router.get('/', authenticateJWT, getAll); // Utilisation Middleware
router.get('/:id', authenticateJWT, getById);
router.post('/', authenticateJWT, createCategory);
router.put('/', authenticateJWT, updateCategory);
//router.patch('/', authenticateJWT, updateCategory);
router.delete('/:id', authenticateJWT, deleteCategory);

export default router;
