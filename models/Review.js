const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connections');

class Review extends Model {}

Review.init(
  {
    postedBy: DataTypes.STRING,
    title: DataTypes.STRING,
    review: DataTypes.STRING,
  },
  {
    sequelize,
  },
);

module.exports = Review;

// (async () => {
//     await sequelize.sync({ force: true });

//     await Review.create({ myDatetime: new Date() });
//     const instance = await Review.findOne();
//     console.log(instance.myDatetime);
//   })();
