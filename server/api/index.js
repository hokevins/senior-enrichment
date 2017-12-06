'use strict';
const apiRouter = require('express').Router();

apiRouter.use('/students', require('./students'));
apiRouter.use('/campuses', require('./campuses'));

// 404 Error handler middleware
apiRouter.use((req, res, next) => {
  res.status(404).send('Apologies, page not found.');
});

module.exports = apiRouter;
