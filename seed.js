const db = require('./server/db');
const Student = require('./server/db/models/student');
const Campus = require('./server/db/models/campus');

const campuses = [
  {
    name: 'Venus',
    imageUrl: 'https://spaceplace.nasa.gov/review/planets/planets-02.en.png',
    description: 'Campus-Venus is super romantic!'
  },
  {
    name: 'Mercury',
    imageUrl: 'https://spaceplace.nasa.gov/review/planets/planets-01.en.png',
    description: 'Campus-Mercury is the closest to the Sun, our instructor.'
  },
  {
    name: 'Earth',
    imageUrl: 'https://spaceplace.nasa.gov/review/planets/planets-03.en.png',
    description: 'Campus-Earth is home to a good cup-of-tea!'
  },
  {
    name: 'Mars',
    imageUrl: 'https://spaceplace.nasa.gov/review/planets/planets-04.en.png',
    description: 'Campus-Mars specializes in Sequelize and the back-end.'
  },
  {
    name: 'Neptune',
    imageUrl: 'https://spaceplace.nasa.gov/review/planets/planets-08.en.png',
    description: 'Campus-Neptune specializes in React and the front-end.'
  }
];

const id = () => Math.floor((Math.random() * campuses.length) + 1);

const students = [
  {
    firstName: 'Acid',
    lastName: 'Betty',
    email: 'AB@rupauldragrace.com',
    gpa: 2.5,
    campusId: id()
  },
  {
    firstName: 'Kim',
    lastName: 'Chi',
    email: 'KC@rupauldragrace.com',
    gpa: 2.75,
    campusId: id()
  },
  {
    firstName: 'Sasha',
    lastName: 'Velour',
    email: 'SV@rupauldragrace.com',
    gpa: 3.2,
    campusId: id()
  },
  {
    firstName: 'Naomi',
    lastName: 'Smalls',
    email: 'NS@rupauldragrace.com',
    gpa: 3.9,
    campusId: id()
  },
  {
    firstName: 'Trixie',
    lastName: 'Mattel',
    email: 'TM@rupauldragrace.com',
    gpa: 0.3,
    campusId: id()
  },
  {
    firstName: 'Alaska',
    lastName: 'Thunderf*ck 5000',
    email: 'AT@rupauldragrace.com',
    gpa: 2.3,
    campusId: id()
  },
  {
    firstName: 'Alyssa',
    lastName: 'Edwards',
    email: 'AE@rupauldragrace.com',
    gpa: 3.65,
    campusId: id()
  },
  {
    firstName: 'Bianca',
    lastName: 'Del Rio',
    email: 'BD@rupauldragrace.com',
    gpa: 4.0,
    campusId: id()
  },
  {
    firstName: 'Laganja',
    lastName: 'Estranja',
    email: 'LE@rupauldragrace.com',
    gpa: 1.1,
    campusId: id()
  },
  {
    firstName: 'Nina',
    lastName: 'Bonina Brown',
    email: 'NBB@rupauldragrace.com',
    gpa: 3.3,
    campusId: id()
  }
];

Student.belongsTo(Campus);
Campus.hasMany(Student);

const seed = () =>
  Promise.all(campuses.map(campus =>
    Campus.create(campus))
  )
  .then(() =>
  Promise.all(students.map(student =>
    Student.create(student))
  )
);

const main = () => {
  console.log('Syncing db...');
  db.sync({force: true})
    .then(() => {
      console.log('Seeding database...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
