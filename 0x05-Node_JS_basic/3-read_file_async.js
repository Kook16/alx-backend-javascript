const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const students = data.
          split('\n').
          filter((line) => line).
          slice(1);
        const fields = {};

        students.forEach((student) => {
          const [firstname, , , field] = student.split(',');
          if (field in fields) {
            fields[field].push(firstname);
          } else {
            fields[field] = [firstname];
          }
        });

        console.log(`Number of students: ${students.length}`);
        for (const field in fields) {
          console.log(
            `Number of students in ${field}: ${
              fields[field].length
            }. List: ${fields[field].join(', ')}`
          );
        }
        resolve();
      }
    });
  });
}

module.exports = countStudents;
