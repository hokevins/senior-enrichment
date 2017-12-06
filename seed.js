const db = require('./server/db');
const Student = require('./server/db/models/student');
const Campus = require('./server/db/models/campus');

const campuses = [
  {
    name: 'Earth',
    imageUrl: 'https://spaceplace.nasa.gov/review/planets/planets-03.en.png',
    description: 'Earth is home.'
  },
  {
    name: 'Venus',
    imageUrl: 'https://spaceplace.nasa.gov/review/planets/planets-02.en.png',
    description: 'Venus is romantic.'
  },
  {
    name: 'Mercury',
    imageUrl: 'https://spaceplace.nasa.gov/review/planets/planets-01.en.png',
    description: 'Mercury is small.'
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
