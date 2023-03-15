import { Request, Response } from 'express';
import User from '../database/models/User';
import { createUser, login, updateUser, deleteUser } from '../services/user.service';


async function getAll(req: Request, res: Response) {
  const users = await User.findAll();
  res.send(JSON.stringify(users));
}

async function getById(req: Request, res: Response) {
  const users = await User.findAll({
    where: {
      id: req.params.id,
    },
  });

  if (users) {
    res.send({ users });
  } else {
    res.status(404).send({ error: '404 - NOT FOUND' });
  }
}

export {
  getAll,
  getById,
  createUser,
  login,
  updateUser,
  deleteUser
};
