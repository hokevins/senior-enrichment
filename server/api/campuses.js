const router = require('express').Router();
const Campus = require('../db/models/campus');

module.exports = router;

router.param('id', function (req, res, next, id) {
  Campus.findById(id)
  .then(campus => {
    if (campus) {
      req.campus = campus;
      next();
    } else {
      const error = new Error('Campus does not exist!');
      error.status = 404;
      throw error;
    }
  })
  .catch(next);
});

// GET api/campuses
router.get('/', function (req, res, next) {
  Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(next);
});

// GET /api/campuses/:id
router.get('/:id', function (req, res, next) {
  res.json(req.campus);
});

// POST /api/campuses
router.post('/', function (req, res, next) {
  Campus.create(req.body)
    .then(campus => res.json(campus))
    .catch(next);
});

// PUT /api/campuses/:id
router.put('/:id', function (req, res, next) {
  req.campus.update(req.body)
  .then(campus => res.json(campus))
  .catch(next);
});

// DELETE /api/campuses/:id
router.delete('/:id', function (req, res, next) {
  req.campus.destroy()
  .then(() => res.sendStatus(202))
  .catch(next);
});
