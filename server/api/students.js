const router = require('express').Router();
const Student = require('../db/models/student');

module.exports = router;

router.param('id', function (req, res, next, id) {
  Student.findById(id)
  .then(student => {
    if (student) {
      req.student = student;
      next();
    } else {
      const error = new Error('Student does not exist!');
      error.status = 404;
      throw error;
    }
  })
  .catch(next);
});

// GET api/students
router.get('/', function (req, res, next) {
  Student.findAll()
    .then(students => res.json(students))
    .catch(next);
});

// GET /api/students/:id
router.get('/:id', function (req, res, next) {
  res.json(req.student);
});

// POST /api/students
router.post('/', function (req, res, next) {
  Student.create(req.body)
    .then(student => res.json(student))
    .catch(next);
});

// PUT /api/students/:id
router.put('/:id', function (req, res, next) {
  req.student.update(req.body)
  .then(student => res.json(student))
  .catch(next);
});

// DELETE /api/students/:id
router.delete('/:id', function (req, res, next) {
  req.student.destroy()
  .then(() => res.sendStatus(202))
  .catch(next);
});
