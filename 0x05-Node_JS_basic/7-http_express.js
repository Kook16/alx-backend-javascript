const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databaseFile = process.argv[2];

  if (!databaseFile) {
    res.status(400).send('Database file is required');

return;
  }

  res.write('This is the list of our students\n');

  fs.readFile(databaseFile, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send(`Cannot load the database: ${err.message}`);

return;
    }

    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1); // Skip the header

    const csStudents = [];
    const sweStudents = [];

    students.forEach((student) => {
      const details = student.split(',');
      if (details.length === 4) {
        const field = details[3].trim();
        if (field === 'CS') {
          csStudents.push(details[0]);
        } else if (field === 'SWE') {
          sweStudents.push(details[0]);
        }
      }
    });

    res.write(`Number of students: ${students.length}\n`);
    res.write(
      `Number of students in CS: ${csStudents.length}. List: ${csStudents.join(
        ', '
      )}\n`
    );
    res.write(
      `Number of students in SWE: ${
        sweStudents.length
      }. List: ${sweStudents.join(', ')}\n`
    );
    res.end();
  });
});

app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;
