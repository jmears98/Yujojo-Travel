const sequelize = require('../config/connections');
const dotenv = require('dotenv').config();

console.log (
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  )
  
const { Review, User } = require('../models');
const reviewSeeds = require('./reviewSeeds');
const userSeeds = require('./userSeeds');

(async function seedDatabase() {
  await sequelize.sync({ force: true });

  await Review.bulkCreate(reviewSeeds);
  await User.bulkCreate(userSeeds);

  process.exit(0);
})();


