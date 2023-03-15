import { Request, Response } from 'express';
import Order from '../database/models/Order';
import { createOrder, updateOrder, deleteOrder } from '../services/order.service';

async function getAll(req: Request, res: Response) {
  const orders = await Order.findAll();
  res.send(JSON.stringify(orders));
}

async function getById(req: Request, res: Response) {
  const orders = await Order.findAll({
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

export {
  getAll,
  getById,
  createOrder,
  updateOrder,
  deleteOrder,
};
