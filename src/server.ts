/* eslint-disable import/newline-after-import */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/semi */

import cors from 'cors';
import cookieParser from 'cookie-parser';

import { router as productsRouter } from './routes/products.route';
import { router as categoriesRouter } from './routes/categories.route';
import { router as ordersRouter } from './routes/orders.route';
import { router as usersRouter } from './routes/users.route';

import authenticateJWT from './middlewares/authenticateJWT'

const port = 8080;
const express = require('express');
const app = express();

// Traitement des requêtes json
app.use(express.json());

// CORS Middleware
app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000'], // Domain Autorisé à effectuer des requêtes
}));

// Cookie Parser Middleware
app.use(cookieParser()); // Pour le traitement de cookies

app.disable('x-powered-by'); // Pour diverses raisons de sécurité je retire la visibilité de la version d'express dans le header

app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/categories', categoriesRouter);
app.use('/orders', ordersRouter);

app.get('/', (req:any, res:any) => {
  res.send('Hello world!');
});

app.post('/', (req:any, res:any) => {
  res.send('I am a POST request');
});

app.get('/isAuthenticated', authenticateJWT, async (req:any, res:any) => {
  return res.status(200).json({success: 'Authenticated'})
})

app.get('/logout', (req:any, res:any) => {
  res.writeHead(200, {
    "Set-Cookie": `token=; HttpOnly; path=/; max-age=0`,
  });

  res.end();
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
