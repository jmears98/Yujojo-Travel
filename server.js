// imports
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const sequelize = require('./config/connections');
const routes = require('./controllers');

const PORT = process.env.PORT || 3001;

const app = express();
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

(async () => {
  await sequelize.sync();
  app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
})();
