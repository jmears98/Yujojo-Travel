const { Sequelize, DataTypes, Model } = require('sequelize');
const Sequelize = require('./.../config/connections');

class User extends Model {}

User.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
  },
);

module.exports = User;
