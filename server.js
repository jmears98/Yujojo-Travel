// // imports
// const express = require('express');
// const exphbs = require('express-handlebars');
// const path = require('path');
// const sequelize = require('./config/connections');
// const models = require('./models');

// const app = express();

// app.engine('handlebars', exphbs.engine());
// app.set('view engine', 'handlebars');
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// const PORT = process.env.PORT || 3001;

// app.get('/', (req, res) => {
//   res.render('home');
// });

// app.get('/contact', (req, res) => {
//   res.render('contact');
// });

// app.get('./users', async (req, res) => {
//   const userData = await models.User.findAll({});
//   return res.json(userData);
// });

// app.post('./users', async (req, res) => {
//   const userData = await models.User.create({ ...req.body });
//   return res.json(userData);
// });

// (async () => {
//   await sequelize.sync();
//   app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
// })();

// imports
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const sequelize = require('./config/connections');
const models = require('./models');

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/users', async (req, res) => {
  const userData = await models.User.findAll({});
  return res.json(userData);
});

app.post('/users', async (req, res) => {
  const userData = await models.User.create({ ...req.body });
  return res.json(userData);
});

(async () => {
  await sequelize.sync();
  app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
})();


