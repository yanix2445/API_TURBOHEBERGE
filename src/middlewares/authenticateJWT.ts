import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { TokenPublic } from '../config/config_tokens';

async function authenticateJWT(req: Request, res: Response, next: NextFunction) {
  const { token } = req.cookies; // Récupération du cookie 'token'
  if (!token) return res.status(401).send({ error: 'Access Denied' }); // Accès refusé si l'utilisateur n'est pas connecté

  // console.log(token);

  try {
    jwt.verify(token, TokenPublic); //Vérification de la clef public + token
    next(); // on passe à la suite
  } catch (err) {
    return res.status(400).json({ error: 'Invalid Token !' }); // Token invalid
  }
}

export default authenticateJWT;
