interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student =  {firstName: "John", lastName: "Doe", age: 22, location: 'Kenya'}
const student2: Student =  {firstName: "Mary", lastName: "Sam", age: 18, location: 'Uganda'}

const studentsList: Student[] = [student1, student2];

function renderTable(students: Student[]) {
  const table = document.createElement('table');
  const headerRow = table.insertRow();
  const headers = ["First Name", "location"];

  headers.forEach(headerText => {
    const header = document.createElement('th');
    header.textContent = headerText;
    headerRow.appendChild(header);
  });

  students.forEach(student => {
    const row = table.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();

    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
  });

  document.body.appendChild(table);
}

document.addEventListener("DOMContentLoaded", ()=> renderTable(studentsList));
