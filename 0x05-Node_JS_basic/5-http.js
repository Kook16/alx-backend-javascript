const http = require('http');
const fs = require('fs');
const path = require('path');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const databaseFile = process.argv[2];

    if (!databaseFile) {
      res.writeHead(400, {'Content-Type': 'text/plain'});
      res.end('Database file is required');

return;
    }

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('This is the list of our students\n');

    fs.readFile(databaseFile, 'utf8', (err, data) => {
      if (err) {
        res.end(`Cannot load the database: ${err.message}`);

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
        `Number of students in CS: ${
          csStudents.length
        }. List: ${csStudents.join(', ')}\n`
      );
      res.write(
        `Number of students in SWE: ${
          sweStudents.length
        }. List: ${sweStudents.join(', ')}\n`
      );
      res.end();
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;
