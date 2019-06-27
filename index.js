const Sequelize = require('sequelize');
const Team = require('./team/model');
const express = require('express');
const team = require('./team/model');
const teamRouter = require('./team/router');
const bodyParser = require('body-parser')

const app = express();
const jsonParser = bodyParser.json()
app.use(jsonParser)
app.use(teamRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Express API listening on port: ${port}`));

app.get('/', (request, response) => {
  response.send(`I'll do something, I promise!!${port}`);
});
