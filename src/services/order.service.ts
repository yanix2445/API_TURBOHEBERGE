import { Request, Response } from 'express';
import Order from '../database/models/Order';

async function createOrder(req: Request, res: Response) {
  const orders = await Order.create(req.body);
  res.send({ orders });
}

async function updateOrder(req: Request, res: Response) {
  const orders = await Order.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  if (orders) {
    res.send({ orders });
  } else {
    res.status(404).send({ error: '404 - NOT FOUND' });
  }
}

async function deleteOrder(req: Request, res: Response) {
  const orders = await Order.destroy({ where: { id: req.params.id } });
  if (orders) {
    res.send({ orders });
  } else {
    res.status(404).send({ error: '404 - NOT FOUND' });
  }
}

export {
  createOrder,
  updateOrder,
  deleteOrder,
};
