const User = require('./User');
const Review = require('./review');

User.hasMany(Review);
Review.belongsTo(User);

module.exports = { Review, User };
