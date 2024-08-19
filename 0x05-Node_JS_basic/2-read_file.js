const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').split('\n');
    const students = data.filter((line) => line).slice(1);
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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
