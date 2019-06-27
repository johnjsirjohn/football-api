const Sequelize = require('sequelize');

// const DATABASE_URL = 'postgres://postgres:secret@localhost:5432/postgres';
// const sequelize = new Sequelize(DATABASE_URL);

const databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:secret@localhost:5432/postgres'

const sequelize = new Sequelize(databaseUrl)

sequelize
  .sync()
  .then(() => console.log('Database schema updated'))
  .catch(console.error);

module.exports = sequelize;
export DATABASE_URL=postgres://$(whoami);
