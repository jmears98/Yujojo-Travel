const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connections');

class User extends Model {}

User.init(
  {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "namenameusername",
    },
  },
  {
    sequelize,
  },
);

module.exports = User;
