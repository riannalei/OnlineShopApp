const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', '1527168Rxl;', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
