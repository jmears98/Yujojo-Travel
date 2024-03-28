// imports
const express = require('express');


const app = express();
const path = require('path');
app.use(express.json());
const PORT = process.env.PORT || 3001;

app.get('/', async (req, res) => 
res.sendFile(path.join(__dirname, '/public/')));





app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
