import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../database/models/User';
import { TokenPrivate } from '../config/config_tokens';

async function createUser(req: Request, res: Response) {
  // Gestion d'erreur
  if (!req.body.username) return res.status(400).json({ error: 'Username Required !' });
  if (!req.body.email) return res.status(400).json({ error: 'Email Required !' });
  if (!req.body.password) return res.status(400).json({ error: 'Password Required !' });

  // Vérification si l'utilisateur existe déjà dans la base de donnée
  const user = await User.findOne({
    where: {
      email: req.body.email,
    },
  });

  if (user) return res.status(400).json({ error: 'User already exist !' });

  // Hash Passwords
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // Enregistrement des données en base
  const registerUser = await User.create({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  });

  if (registerUser) return res.status(200).json({ success: true });
}

async function login(req: Request, res: Response) {
  // Gestion d'erreur
  if (!req.body.email) return res.status(400).json({ error: 'Email Required !' });
  if (!req.body.password) return res.status(400).json({ error: 'Password Required !' });

  // Vérification si l'utilisateur existe déjà dans la base de donnée
  const user = await User.findOne({
    where: {
      email: req.body.email,
    },
  });

  // console.log(user);

  if (!user) return res.status(400).json({ error: 'User does not exist !' });

  // Vérification mot de passe
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send({ error: 'Identifiant incorrect' });

  // console.log(TokenPrivate)

  // Crée le token d'authentification
  const token = jwt.sign({ _id: user.id }, TokenPrivate, { algorithm: 'RS256', expiresIn: '1d' });
  if (!token) throw Error('Couldn\'t sign the token');

  // console.log(token);

  return res.status(200).cookie('token', token, {
    sameSite: 'strict', httpOnly: true, path: '/', expires: new Date(new Date().getTime() + 100000 * 1000), // Expiration en 1d
  }).json({ message: 'Login Successful !' });
}

async function updateUser(req: Request, res: Response) {
  const users = await User.update(req.body, {
    where: {
      id: req.params.id,
    },
  });

  if (users) {
    res.status(200).send({ users });
  } else {
    res.status(404).send({ error: '404 - NOT FOUND' });
  }
}

async function deleteUser(req: Request, res: Response) {
  const categories = await User.destroy({ where: { id: req.params.id } });

  if (categories) {
    res.status(200).send({ categories });
  } else {
    res.status(404).send({ error: '404 - NOT FOUND' });
  }
}



export {
  createUser,
  login,
  updateUser,
  deleteUser
};
