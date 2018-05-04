'use strict';

const models = require('./server/db/models');
const app = require('./server');
const PORT = process.env.PORT || 1337;

// If you update your db schemas, make sure you drop the tables first and then recreate them with force: true!
models.db.sync({})
.then(() => {
  console.log('db synced');
  app.listen(PORT, () => console.log(`studiously serving silly sounds on port ${PORT}`));
});
