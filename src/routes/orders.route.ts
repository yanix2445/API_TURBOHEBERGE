/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/semi */

import { Router } from 'express';
import authenticateJWT from '../middlewares/authenticateJWT'

import {
  getAll,
  getById,
  createOrder,
  updateOrder,
  deleteOrder,
} from '../controllers/orders.controller';

export const router = Router();

router.get('/', authenticateJWT, getAll);
router.get('/:id', authenticateJWT, getById);
router.post('/', authenticateJWT, createOrder);
router.put('/', authenticateJWT, updateOrder);
//router.patch('/', authenticateJWT, updateOrder);
router.delete('/:id', authenticateJWT, deleteOrder);

export default router;
