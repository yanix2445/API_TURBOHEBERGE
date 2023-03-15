/* eslint-disable linebreak-style */
import { DataTypes } from 'sequelize';
import sequelize from '../instance';

export const Order = sequelize.define('order', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Order;
