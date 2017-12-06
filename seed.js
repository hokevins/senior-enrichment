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
    gpa: 2.5
  },
  {
    firstName: 'Kim',
    lastName: 'Chi',
    email: 'KC@rupauldragrace.com',
    gpa: 3.8
  },
  {
    firstName: 'Sasha',
    lastName: 'Velour',
    email: 'SV@rupauldragrace.com',
    gpa: 3.2
  },
  {
    firstName: 'Naomi',
    lastName: 'Smalls',
    email: 'NS@rupauldragrace.com',
    gpa: 3.9
  }
];

const seed = () =>
  Promise.all(students.map(student =>
    Student.create(student))
  )
  .then(() =>
  Promise.all(campuses.map(campus =>
    Campus.create(campus))
  )
);

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
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
