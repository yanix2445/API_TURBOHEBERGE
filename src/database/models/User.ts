/* eslint-disable linebreak-style */
import { DataTypes } from 'sequelize';
import sequelize from '../instance';
import Order from './Order';

export const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.hasMany(Order, {});
Order.belongsTo(User, {});

export default User;
