'use strict';

const db = require('../index');
const Student = require('./student');
const Campus = require('./campus');

// Note:  According to Sequelize docs, "Creating an association will automatically add a foreign key constraint to the attributes."
// Therefore, constraints: false is not needed here unless the foreign keys are diabled due to circular references (which we don't have).
Student.belongsTo(Campus);
Campus.hasMany(Student);

module.exports = {
  db,
  Student,
  Campus
};
