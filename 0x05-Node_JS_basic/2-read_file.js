const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').split('\n');
    const students = data.filter((line) => line.trim() !== '').slice(1);
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
    for (const field in Object.keys(fields)) {
      console.log(
        `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`
      );
    }
  } catch (error) {
    console.error('Cannot load the database');
    throw error;
  }
}

module.exports = countStudents;

