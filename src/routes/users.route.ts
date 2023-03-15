/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/semi */

import { Router } from 'express';
import authenticateJWT from '../middlewares/authenticateJWT'

import {
  getAll,
  getById,
  createUser,
  login,
  updateUser,
  deleteUser,
} from '../controllers/users.controller';

export const router = Router();

router.get('/', authenticateJWT, getAll);
router.get('/:id', authenticateJWT, getById);
router.put('/', authenticateJWT, updateUser);
router.delete('/:id', authenticateJWT, deleteUser);
//router.patch('/', updateUser);
router.post('/register', createUser);
router.post('/auth', login);

export default router;
