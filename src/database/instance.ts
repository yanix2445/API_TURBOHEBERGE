const Sequelize = require('sequelize');

require('dotenv').config();

const turbodb = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mariadb',
});
export default turbodb;
