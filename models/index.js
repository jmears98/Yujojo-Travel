const User = require('./User');
const Review = require('./Review');

User.hasMany(Review);
Review.belongsTo(User);

module.exports = { Review, User };
