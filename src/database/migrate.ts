/* eslint-disable @typescript-eslint/no-unused-vars */
import turbodb from './instance';
import User from './models/User';
import Product from './models/Product';
import Order from './models/Order';
import Category from './models/Category';

export async function connect() {
  try {
    await turbodb.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
connect();

export async function migrate() {
  try {
    await turbodb.query('SET FOREIGN_KEY_CHECKS = 0', null, { raw: true });

    await User.sync({ force: true });
    console.log('List of tables users');

    await Product.sync({ force: true });
    console.log('List of tables products');

    await Order.sync({ force: true });
    console.log('List of tables order');

    await Category.sync({ force: true });
    console.log('List of tables category');

    console.log('Database & tables created!');
  } catch (error: any) {
    console.error('Unable to sync', error);
  }
}
migrate();
