import sequelize from '../instance';
import Product from './Product';
import Order from './Order';

const orderhasproduct = sequelize.define('order_has_product1', {

});

Order.belongsToMany(Product, {
  as: 'order_has_product1',
  through: 'Order',
  foreignKey: 'Product_id',
  otherKey: 'Order_id',
  onDelete: 'CASCADE',
});

Product.belongsToMany(Order, {
  through: orderhasproduct,
});

export default orderhasproduct;
