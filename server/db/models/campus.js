const Sequelize = require('sequelize');
const db = require('../index');

module.exports = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://spaceplace.nasa.gov/review/planets/planets-06.en.png'
  },
  description: {
    type: Sequelize.TEXT
  }
});
