const express = require('express');
const app = express();

const students = [
  {
    name: 'Alice',
    age: 21,
    gender: 'female',
    students_id: '123210001',
    phone_number: '+628123456789',
  },
  {
    name: 'Bob',
    age: 21,
    gender: 'male',
    students_id: '123210002',
    phone_number: '+628987654321',
  },
  {
    name: 'Charlie',
    age: 20,
    gender: 'male',
    students_id: '123210003',
    phone_number: '+628543219876',
  },
  {
    name: 'David',
    age: 21,
    gender: 'male',
    students_id: '123210004',
    phone_number: '+628765432198',
  },
  {
    name: 'Eve',
    age: 20,
    gender: 'female',
    students_id: '123210005',
    phone_number: '+628912345678',
  },
  {
    name: 'Fred',
    age: 21,
    gender: 'male',
    students_id: '123210006',
    phone_number: '+628123456789',
  },
  {
    name: 'Grace',
    age: 21,
    gender: 'female',
    students_id: '123210007',
    phone_number: '+628987654321',
  },
  {
    name: ' Henley',
    age: 20,
    gender: 'male',
    students_id: '123210008',
    phone_number: '+628543219876',
  },
  {
    name: 'Ivan',
    age: 21,
    gender: 'male',
    students_id: '123210009',
    phone_number: '+628765432198',
  },
  {
    name: 'Jane',
    age: 20,
    gender: 'female',
    students_id: '123210010',
    phone_number: '+628912345678',
  },
  {
    name: 'Karen',
    age: 20,
    gender: 'female',
    students_id: '123210011',
    phone_number: '+628123456789',
  },
  {
    name: 'Leon',
    age: 21,
    gender: 'male',
    students_id: '123210012',
    phone_number: '+628987654321',
  },
  {
    name: 'Mila',
    age: 20,
    gender: 'female',
    students_id: '123210013',
    phone_number: '+628543219876',
  },
  {
    name: 'Nick',
    age: 21,
    gender: 'male',
    students_id: '123210014',
    phone_number: '+628765432198',
  },
  {
    name: 'Olivia',
    age: 20,
    gender: 'female',
    students_id: '123210015',
    phone_number: '+628912345678',
  },
  {
    name: 'Petra',
    age: 21,
    gender: 'female',
    students_id: '123210016',
    phone_number: '+628123456789',
  },
  {
    name: 'Queen',
    age: 21,
    gender: 'female',
    students_id: '123210017',
    phone_number: '+628987654321',
  },
  {
    name: 'Ray',
    age: 20,
    gender: 'male',
    students_id: '123210018',
    phone_number: '+628543219876',
  },
  {
    name: 'Sarah',
    age: 21,
    gender: 'female',
    students_id: '123210019',
    phone_number: '+628765432198',
  },
  {
    name: 'Tanya',
    age: 20,
    gender: 'female',
    students_id: '123210020',
    phone_number: '+628912345678',
  },
];

app.get('/', (req, res) => {
  res.send('Server is running');
})

app.get('/students', (req, res) => {
  res.json(students);
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});


