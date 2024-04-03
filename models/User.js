const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connections');

class User extends Model {}

User.init(
  {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
  },
);

module.exports = User;
