const Sequelize = require('sequelize');
const { conn } = require('../database/conn');

const Contact = conn.define('contact', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  email: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  subject: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  message: {
    type: Sequelize.STRING(),
    allowNull: false
  }
});

module.exports = Contact;
