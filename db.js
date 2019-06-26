const Sequelize = require('sequelize');

const DATABASE_URL = 'postgres://postgres:secret@localhost:5432/postgres';
const sequelize = new Sequelize(DATABASE_URL);

sequelize
  .sync()
  .then(() => console.log('Database schema updated'))
  .catch(console.error);

module.exports = sequelize;
