const express = require('express');
const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

const db = mysql.createPool({
  uri: process.env.DB_URI,
});

// Create table if not exists
db.execute(`
  CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT,
    name VARCHAR(255),
    student_id VARCHAR(255),
    PRIMARY KEY (id)
  );
`);

app.get('/', (req, res) => {
  res.send('Server is succesfully running');
})

// CRUD operations
app.get('/students', async (req, res) => {
  const [rows] = await db.execute('SELECT * FROM students');
  res.json(rows);
});

app.post('/students', async (req, res) => {
  const { name, student_id } = req.body;
  const [result] = await db.execute('INSERT INTO students SET ?', { name, student_id });
  res.json({ id: result.insertId, name, student_id });
});

app.get('/students/:id', async (req, res) => {
  const id = req.params.id;
  const [rows] = await db.execute('SELECT * FROM students WHERE id = ?', id);
  res.json(rows[0]);
});

app.put('/students/:id', async (req, res) => {
  const id = req.params.id;
  const { name, student_id } = req.body;
  await db.execute('UPDATE students SET ? WHERE id = ?', { name, student_id }, id);
  res.json({ id, name, student_id });
});

app.delete('/students/:id', async (req, res) => {
  const id = req.params.id;
  await db.execute('DELETE FROM students WHERE id = ?', id);
  res.json({ message: 'Student deleted successfully' });
});

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});