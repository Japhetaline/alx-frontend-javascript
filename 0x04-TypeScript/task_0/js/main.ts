// task_0/js/main.ts

// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students and an array
const student1: Student = { firstName: "John", lastName: "Doe", age: 20, location: "New York" };
const student2: Student = { firstName: "Jane", lastName: "Smith", age: 22, location: "San Francisco" };

const studentsList: Student[] = [student1, student2];

// Render a table
const table = document.createElement("table");

studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);

  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});

// Append the table to the body
document.body.appendChild(table);

