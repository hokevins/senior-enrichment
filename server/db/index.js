'use strict';
const chalk = require('chalk');
const Sequelize = require('sequelize');
const pkg = require('../../package.json');

console.log(chalk.yellow('Opening database connection'));

// This creates the database instance "db" that can be used in other database files.
// logging: false so we don't see all the SQL query made

module.exports = new Sequelize(process.env.DATABASE_URL || `postgres://localhost:5432/${pkg.name}`, {
  logging: false
});
